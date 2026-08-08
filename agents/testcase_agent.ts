import { BaseAgent } from "./base_agent.js";
import { ILLMService } from "../interfaces/illm.js";
import { IMCPClient } from "../interfaces/imcp_client.js";

export class TestcaseAgent extends BaseAgent {
  constructor(llm: ILLMService, mcp: IMCPClient) {
    super(llm, mcp, "testcase_agent.md");
  }
}
