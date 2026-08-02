import OpenAI from "openai";
import { ILLMService } from "../interfaces/llm.js";

export class OpenAIClient implements ILLMService {

  private readonly client: OpenAI;

  constructor() {
    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async generate(
    systemPrompt: string,
    userPrompt: string
  ): Promise<string> {

    const response = await this.client.chat.completions.create({
      model: process.env.LLM_MODEL,
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userPrompt
        }
      ]
    });

    return response.choices[0].message.content ?? "";

  }

}