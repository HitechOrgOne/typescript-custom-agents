import OpenAI from "openai";
import { AppConfig } from "./config/app_config.js";

export class LLMClient {
  private readonly client: OpenAI;
  private readonly config = new AppConfig();

  constructor() {
    this.client = new OpenAI({
      baseURL: this.config.ollamaBaseUrl,
      apiKey: "ollama",
    });
  }

  async generate(
    systemPrompt: string,
    userPrompt: string
  ): Promise<string> {
    console.log("Before API call");

    const response = await this.client.chat.completions.create({
      model: this.config.model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    console.log("After API call");

    return response.choices[0].message.content ?? "";
  }
}