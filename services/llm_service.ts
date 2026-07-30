import { ILLMService } from "../interfaces/llm.js";
import { LLMClient } from "../llm_client.js";

export class LLMService implements ILLMService {
  private readonly client = new LLMClient();

  async generate(
    systemPrompt: string,
    userPrompt: string
  ): Promise<string> {
    return this.client.generate(systemPrompt, userPrompt);
  }
}