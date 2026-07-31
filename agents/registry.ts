import { Agent } from "../types/agent.js";
import { ILLMService } from "../interfaces/llm.js";

import { TestcaseAgent } from "./testcase_agent.js";
import { PlaywrightAgent } from "./playwright_agent.js";

export function createAgents(
  llm: ILLMService
) {

  return {

    [Agent.TESTCASE]: new TestcaseAgent(
      llm
    ),

    [Agent.PLAYWRIGHT]: new PlaywrightAgent(
      llm
    )

  };

}