import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "ollama",
});

async function main() {
  const models = await client.models.list();
  console.log(models);
}

main().catch(console.error);