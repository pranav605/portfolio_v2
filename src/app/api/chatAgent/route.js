import OpenAI from "openai";
import fs from "node:fs/promises";
import PDFParser from "pdf2json";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


async function push(text) {
    const data = {
        "token": process.env.PUSHOVER_TOKEN,
        "user": process.env.PUSHOVER_USER,
        "message": text,
    }
    try {
        const response = await fetch('https://api.pushover.net/1/messages.json', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        console.log(response);

    } catch (error) {
        console.error(error);
    }

}
const toolRegistry = {
    record_user_details,
    record_unknown_question,
};

function record_user_details({ email, name = "Name not provided", notes = "not provided" }) {
    if (!email || typeof email !== "string") return { error: "Invalid email" };
    push(`Recording ${name} with email ${email} and notes ${notes}`);
    return { recorded: "ok" };
}

function record_unknown_question({ question }) {
    if (!question || typeof question !== "string") return { error: "Invalid question" };
    push(`Recording ${question}`);
    return { recorded: "ok" };
}

async function handleToolCalls(toolCalls) {
    const results = [];
    for (const toolCall of toolCalls) {
        let args;
        try {
            args = JSON.parse(toolCall.function.arguments);
        } catch {
            console.warn("Invalid tool arguments:", toolCall.function.arguments);
            continue;
        }

        const toolName = toolCall.function.name;
        const tool = toolRegistry[toolName];
        const result = tool ? await tool(args) : {};
        results.push({ role: "tool", content: JSON.stringify(result), tool_call_id: toolCall.id });
    }
    return results;
}

const rateLimitMap = new Map();
function rateLimit(ip, limit = 10, windowMs = 60_000) {
    const now = Date.now();
    const entry = rateLimitMap.get(ip) || { count: 0, start: now };
    if (now - entry.start > windowMs) {
        entry.count = 0;
        entry.start = now;
    }
    entry.count++;
    rateLimitMap.set(ip, entry);
    return entry.count <= limit;
}

let record_user_details_json = {
    "name": "record_user_details",
    "description": "Use this tool to record that a user is interested in being in touch and provided an email address",
    "parameters": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string",
                "description": "The email address of this user"
            },
            "name": {
                "type": "string",
                "description": "The user's name, if they provided it"
            }
            ,
            "notes": {
                "type": "string",
                "description": "Any additional information about the conversation that's worth recording to give context"
            }
        },
        "required": ["email"],
        "additionalProperties": false
    }
}

let record_unknown_question_json = {
    "name": "record_unknown_question",
    "description": "Always use this tool to record any question that couldn't be answered as you didn't know the answer",
    "parameters": {
        "type": "object",
        "properties": {
            "question": {
                "type": "string",
                "description": "The question that couldn't be answered"
            },
        },
        "required": ["question"],
        "additionalProperties": false
    }
}

let tools = [{ "type": "function", "function": record_user_details_json, description: "Record user details", parameters: {} },
{ "type": "function", "function": record_unknown_question_json, description: "Record unknown question", parameters: {} }]


export async function POST(req) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "unknown";
    if (!rateLimit(ip)) {
        return new Response(JSON.stringify({ error: "Too many requests" }), { status: 429 });
    }

    try {
        const { message, history } = await req.json();

        // Load files inside handler
        // const summary = await fs.readFile("src/me/summary.txt", "utf-8");
        // const pdfData = await new Promise((resolve, reject) => {
        //     const parser = new PDFParser(null, 2);
        //     parser.on("pdfParser_dataError", reject);
        //     parser.on("pdfParser_dataReady", () => {
        //         const text = parser.getRawTextContent()
        //             .replace(/\r\n?/g, '\n')
        //             .replace(/[^\S\n]{2,}/g, '\n')
        //             .replace(/\n{3,}/g, '\n\n')
        //             .trim();
        //         resolve(text);
        //     });
        //     parser.loadPDF("src/me/linkedin.pdf");
        // });

        const context = {
            name: 'Sai Pranav Nishtala',
            summary: "My name is Sai Pranav Nishtala. I'm software engineer, full stack developer and AI enthusiast. I'm originally from India, but I moved to Canada in 2023. I love all foods, particularly north Indian cuisine. I love anything with paneer in it, be it a curry, appetizer or a pizza.",
            linkedin: `   
Contact
2269619335 (Mobile)
pranav605@gmail.com
www.linkedin.com/in/sai-pranav-
nishtala (LinkedIn)
github.com/pranav605 (Other)
Top Skills
JavaScript
Node.js
Front-End Development
Certifications
NextGen CTO
Career Essentials in Project
Management by Microsoft and
LinkedIn
Sai Pranav Nishtala
Full Stack Developer | React & Node.js Specialist | Cloud,
Kubernetes & Modern Web Apps | UI/UX Design | Azure | Open to
Canadian Tech Roles
Canada
Summary
Hi there, I'm a Full Stack Developer / Front End Developer with 2+
years of experience in creating and maintaining Web applications.
I've had the pleasure of working with React, HTML, JQuery, Azure -
they're great tools that have helped me in my work.
I have good knowledge and experience in RESTful API
development, data migration.
I'm always open to learning new things and improving my skills,
and I'm grateful for the opportunities that I've had so far. I'm familiar
with Agile development and source code management using GIT,
and I do my best to stay up to date with the latest best practices.
My proficiency lies in JavaScript, Python, SQL, and Java, and I'm
constantly working on expanding my knowledge.
I believe in the importance of problem-solving and communication
skills, and I exceed expectations while meeting project deadlines. I'm
always looking for new challenges and opportunities to grow, and I'm
excited to see where my career will take me next. Let's connect!
Experience
Matdun
Software Development Intern – AI & Computer Vision
September 2024 - December 2024 (4 months)
During my internship at Matdun, I played a pivotal role in developing an
innovative computer vision security service. I led a team to create a dataset
generation tool that streamlined AI model training, while also deploying
optimized deep learning models for real-time applications. My experience
included hands-on work with PyTorch and TensorFlow, enhancing my
technical skills in AI and computer vision.
  Page 1 of 2   
Infosys
2 years 9 months
Technology Analyst (Software Engineer – Front-End Development)
January 2023 - June 2023 (6 months)
Hyderabad, Telangana, India
At Infosys, I contributed to enhancing user experience through innovative
front-end solutions. I developed interactive modules with React.js, optimized
legacy systems for better usability, and resolved critical form validation issues,
significantly improving user engagement and reducing support requests.
Senior Systems Engineer (Software Engineer – Front-End
Development)
April 2022 - January 2023 (10 months)
Hyderabad, Telangana, India
In my role at Infosys, I contributed significantly to the development of a
React.js-based e-commerce platform by creating dynamic user interfaces
and enhancing content relevance. I successfully implemented location-based
filtering and designed interactive product detail pages, which improved user
experience and engagement. My efforts in modernizing the UI led to a more
efficient codebase and improved performance across the platform.
System Engineer
October 2020 - April 2022 (1 year 7 months)
Hyderabad, Telangana, India
Education
University of Windsor
Master's degree, Computer Science · (September 2023 - December 2024)
Anil Neerukonda Institute Of Technology & Sciences
Bachelor of Technology, Computer Science · (2016 - 2020)
  Page 2 of 2
`,
        };

        let system_prompt = `You are acting as ${context.name}. You are answering questions on ${context.name}'s website, \
particularly questions related to ${context.name}'s career, background, skills and experience. \
Your responsibility is to represent ${context.name} for interactions on the website as faithfully as possible. \
You are given a summary of ${context.name}'s background and LinkedIn profile which you can use to answer questions. \
Be professional and engaging, as if talking to a potential client or future employer who came across the website. \
If you don't know the answer to any question, use your record_unknown_question tool to record the question that you couldn't answer, even if it's about something trivial or unrelated to career. \
If the user is engaging in discussion, try to steer them towards getting in touch via email; ask for their email and record it using your record_user_details tool.`

        system_prompt += `\n\n## Summary:\n${context.summary}\n\n## LinkedIn Profile:\n${context.linkedin}\n\n`;
        system_prompt += `With this context, please chat with the user, always staying in character as ${context.name}.`;

        // Input validation
        if (typeof message !== "string" || message.length > 500) {
            return new Response(JSON.stringify({ error: "Invalid message" }), { status: 400 });
        }
        if (!Array.isArray(history) || history.length > 20) {
            return new Response(JSON.stringify({ error: "Invalid history" }), { status: 400 });
        }

        const messages = [
            { role: "system", content: system_prompt },
            ...history,
            { role: "user", content: message }
        ];

        let done = false;
        let res = null;
        let toolCallCount = 0;
        const MAX_TOOL_CALLS = 3;

        while (!done) {
            const response = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages,
                tools
            });

            res = response;
            const choice = response.choices[0];

            if (choice.finish_reason === "tool_calls") {
                toolCallCount++;
                if (toolCallCount > MAX_TOOL_CALLS) break;

                const assistantMessage = choice.message;
                const toolCalls = assistantMessage.tool_calls;
                const results = await handleToolCalls(toolCalls);
                messages.push(assistantMessage, ...results);
            } else {
                done = true;
            }
        }

        return new Response(JSON.stringify({ content: res.choices[0].message.content }), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": process.env.DOMAIN
            }
        });
    } catch (error) {
        console.error("Error in POST request:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}