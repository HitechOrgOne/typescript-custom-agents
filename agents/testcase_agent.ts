import { BaseAgent } from "./base_agent.js";
import { ILLMService } from "../interfaces/llm.js";

export class TestcaseAgent extends BaseAgent {

  constructor(
    llm: ILLMService
  ) {

    super(
      llm,
      "testcase_agent.md"
    );

  }

}