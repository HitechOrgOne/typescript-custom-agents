import { ask } from "../llm.js";
import { ILLMService } from "../interfaces/llm.js";

export class LLMService implements ILLMService {
  async generate(
    systemPrompt: string,
    userPrompt: string
  ): Promise<string> {
    return ask(systemPrompt, userPrompt);
  }
}