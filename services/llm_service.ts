import { ILLMService } from "../interfaces/illm.js";
import {  OpenAIClient } from "./openai_client.js";

  export class LLMService implements ILLMService {
    private readonly client = new OpenAIClient();
    generate(systemPrompt: string,userPrompt: string)
          {
            return this.client.generate(systemPrompt, userPrompt);
          }
  }