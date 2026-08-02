import { ILLMService } from "../interfaces/llm.js";
import {  OpenAIClient } from "./openai_client.js";

  export class LLMService implements ILLMService {
    private readonly client = new OpenAIClient();
    generate(systemPrompt: string,userPrompt: string)
          {
            return this.client.generate(systemPrompt, userPrompt);
          }
    getresults(name: string): Promise<string> {
        return Promise.resolve("")
    }
  }