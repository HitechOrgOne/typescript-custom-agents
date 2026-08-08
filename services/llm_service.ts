import { ILLMService } from "../interfaces/illm.js";

export class LLMService implements ILLMService {
  constructor(private readonly client: ILLMService) {}

  async generate(systemPrompt: string, userPrompt: string): Promise<string> {
    return this.client.generate(systemPrompt, userPrompt);
  }
}
