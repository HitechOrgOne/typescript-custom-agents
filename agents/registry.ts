import { Agent } from "../types/agent.js";
import { ILLMService } from "../interfaces/llm.js";
import { TestcaseAgent } from "./testcase_agent.js";
import { PlaywrightAgent } from "./playwright_agent.js";

export interface IAgent {
  execute(requirement: string): Promise<string>;
}

export function createAgents(
  llm: ILLMService
): Record<Agent, IAgent> {
  return {
    [Agent.TESTCASE]: new TestcaseAgent(llm),
    [Agent.PLAYWRIGHT]: new PlaywrightAgent(llm),
  };
}