// Route hander in NextJS

import { streamText, StreamingTextResponse, StreamData } from "ai";
import { createOllama } from "ollama-ai-provider";

const ollama = createOllama();

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = await streamText({
        model: ollama("phi3"),
        messages
    });

    return new StreamingTextResponse(result.toAIStream());
}