import OpenAI from "openai";
import { AppConfig } from "./config/app_config.js";

const config = new AppConfig();
const client = new OpenAI({
  baseURL: config.ollamaBaseUrl,
  apiKey: "ollama",
  timeout: 300000
});

export async function ask(
  systemPrompt: string,
  userPrompt: string
): Promise<string> {
  console.log("Before API call");

  const response = await client.chat.completions.create({
    model: config.model,
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
  });

  console.log("After API call");

  return response.choices[0].message.content ?? "";
}