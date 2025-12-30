import OpenAI from "openai";
import fs from "node:fs/promises";
import PDFParser from "pdf2json";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const context = await (async () => {
    // Read summary.txt
    const summary = await fs.readFile("src/me/summary.txt", "utf-8");

    // Read PDF (your existing pdf2json code)
    const pdfData = await new Promise((resolve, reject) => {
        const pdfParser = new PDFParser(null, 2); // merged text

        pdfParser.on("pdfParser_dataError", reject);
        pdfParser.on("pdfParser_dataReady", () => {
            const linkedin = pdfParser.getRawTextContent()
                .replace(/\r\n?/g, '\n')
                .replace(/[^\S\n]{2,}/g, '\n')
                .replace(/\n{3,}/g, '\n\n')
                .trim();

            resolve(linkedin);
        });

        pdfParser.loadPDF("src/me/linkedin.pdf");
    });

    return {
        name: 'Sai Pranav Nishtala',
        summary: summary.trim(),  // now properly loaded
        linkedin: pdfData,
    };
})();

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

let system_prompt = `You are acting as ${context.name}. You are answering questions on ${context.name}'s website, \
particularly questions related to ${context.name}'s career, background, skills and experience. \
Your responsibility is to represent ${context.name} for interactions on the website as faithfully as possible. \
You are given a summary of ${context.name}'s background and LinkedIn profile which you can use to answer questions. \
Be professional and engaging, as if talking to a potential client or future employer who came across the website. \
If you don't know the answer to any question, use your record_unknown_question tool to record the question that you couldn't answer, even if it's about something trivial or unrelated to career. \
If the user is engaging in discussion, try to steer them towards getting in touch via email; ask for their email and record it using your record_user_details tool.`

system_prompt += `\n\n## Summary:\n${context.summary}\n\n## LinkedIn Profile:\n${context.linkedin}\n\n`;
system_prompt += `With this context, please chat with the user, always staying in character as ${context.name}.`;

export async function POST(req) {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "unknown";
    if (!rateLimit(ip)) {
        return new Response(JSON.stringify({ error: "Too many requests" }), { status: 429 });
    }

    try {
        const { message, history } = await req.json();

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