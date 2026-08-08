import { Agent } from "../types/agent.js";
import { ILLMService } from "../interfaces/illm.js";
import { MCPClient } from "../mcp/mcp_client.js";
import { TestcaseAgent } from "./testcase_agent.js";
import { PlaywrightAgent } from "./playwright_agent.js";

export function createAgents(llm: ILLMService, mcp: IMCPClient) {
  return {
    [Agent.TESTCASE]: new TestcaseAgent(llm),

    [Agent.PLAYWRIGHT]: new PlaywrightAgent(llm),
  };
}
