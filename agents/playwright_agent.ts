import { BaseAgent } from "./base_agent.js";
import { ILLMService } from "../interfaces/illm.js";

export class PlaywrightAgent extends BaseAgent {

  constructor(
    llm: ILLMService
  ) {
    super(
      llm,
      "playwright_agent.md"
    );
  }

}