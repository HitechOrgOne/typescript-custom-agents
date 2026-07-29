import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "ollama",
});

export async function ask(
  systemPrompt: string,
  userPrompt: string
): Promise<string> {

  console.log("Before API call");

  const response = await client.chat.completions.create({
    model: "qwen3:8b",
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