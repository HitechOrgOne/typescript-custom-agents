import { Agent } from "../types/agent.js";
import { ILLMService } from "../interfaces/llm.js";
import { generateTestCases } from "./testcase_agent.js";
import { generatePlaywrightTest } from "./playwright_agent.js";

export type AgentFunction = (
  llm: ILLMService,
  requirement: string
) => Promise<string>;

export const AGENTS: Record<Agent, AgentFunction> = {
  [Agent.TESTCASE]: generateTestCases,
  [Agent.PLAYWRIGHT]: generatePlaywrightTest,
};