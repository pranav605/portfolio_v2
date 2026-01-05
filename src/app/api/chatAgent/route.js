import OpenAI from "openai";
import fs from "node:fs/promises";
import PDFParser from "pdf2json";
import { supabase } from '../../../utils/supabaseClient'
import Mustache from "mustache"

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

  // Push to Pushover or logging
  push(`Recording ${question}`);

  // Fire-and-forget DB insert
  supabase
    .from("questions")
    .insert({ question: question})
    .then(({ data, error }) => {
      if (error) console.error("Failed to insert unknown question:", error);
      else console.log("Unknown question saved:", data);
    })
    .catch((err) => {
      console.error("Unexpected error inserting unknown question:", err);
    });

  // Always return ok to the chatbot
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

// Fetch system prompts from Supabase
async function getSystemPrompts() {
    const { data, error } = await supabase
        .from("system_prompts")
        .select("*");

    if (error) {
        console.error("Error fetching system prompts:", error);
        return null;
    }

    // Convert array to object by type for easy access
    const promptMap = {};
    data.forEach((row) => {
        promptMap[row.type] = row.content;
    });

    return promptMap;
}

async function getAdditionalContext() {
    const { data, error } = await supabase
        .from('questions').select('*');
    if (error) {
        console.error("Error fetching system prompts:", error);
        return null;
    }
    return data;
}

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
            linkedin: ` `,
        };


        // Get prompts from Supabase
        const prompts = await getSystemPrompts();
        if (!prompts) {
            return new Response(JSON.stringify({ error: "Could not load prompts" }), { status: 500 });
        }

        //Get additional questions and answers from db
        const additionalContext = await getAdditionalContext();
        if (!additionalContext) {
            return new Response(JSON.stringify({ error: "Could not load additional context" }), { status: 500 });
        }
        console.log(additionalContext);
        const formattedQA = additionalContext
            .filter(q => q.is_answered)
            .map(
                (q) => `Q: ${q.question}\nA: ${q.answer}`
            )
            .join("\n\n");

        let system_prompt = prompts["system"] || "";

        system_prompt = Mustache.render(system_prompt, { summary: prompts["summary"], resume: prompts["resume"], linkedin: prompts["linkedin"], name: "Sai Pranav Nishtala" })
        system_prompt+= `\n\n ##Here is some additional context from questions users have asked in other chats:${formattedQA}.`
        // system_prompt += `\n\n## Summary:\n${context.summary}\n\n## LinkedIn Profile:\n${context.linkedin}\n\n`;
        // system_prompt += `With this context, please chat with the user, always staying in character as ${context.name}.`;

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