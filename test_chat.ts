import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "ollama",
});

async function main() {
  const response = await client.chat.completions.create({
    model: "qwen3:8b",
    messages: [
      {
        role: "user",
        content: "Say hello in one word."
      }
    ],
  });

  console.log(response.choices[0].message.content);
}

main().catch(console.error);