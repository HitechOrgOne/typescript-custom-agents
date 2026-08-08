import { BaseAgent } from "./base_agent.js";
import { ILLMService } from "../interfaces/illm.js";

export class PlaywrightAgent extends BaseAgent {
  constructor(llm: ILLMService, mcp: IMCPClient) {
    super(llm, mcp, "playwright_agent.md");
  }
}
