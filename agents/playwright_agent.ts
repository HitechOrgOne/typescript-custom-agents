import { BaseAgent } from "./base_agent.js";
import { ILLMService } from "../interfaces/llm.js";

export class PlaywrightAgent extends BaseAgent {
  constructor(llm: ILLMService) {
    super(llm, "playwright_agent.md");
  }

  async execute(requirement: string): Promise<string> {
    return this.ask(requirement);
  }
}