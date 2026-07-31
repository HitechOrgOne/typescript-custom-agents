import { env } from "./config/env.js"
import OpenAI from "openai";

export class LLMClient {
  private readonly client: OpenAI;
  
  constructor() {
    this.client = new OpenAI({
      baseURL: env.baseUrl,
      apiKey:  env.apiKey,
    });
  }

  async generate(
    systemPrompt: string,
    userPrompt: string
  ): Promise<string> {
    console.log("Before API call");

    const response = await this.client.chat.completions.create({
      model:  env.model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    console.log("After API call");

    return response.choices[0].message.content ?? "";
  }
}