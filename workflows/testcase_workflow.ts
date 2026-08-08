import { Agent } from "../types/agent.js";
import { Orchestrator } from "../orchestrator.js";

export class TestcaseWorkflow {
  constructor(private readonly orchestrator: Orchestrator) {}

  async execute(requirementFile: string): Promise<string> {
    const requirement = this.orchestrator.readRequirement(requirementFile);

    const testCases = await this.orchestrator.run(Agent.TESTCASE, requirement);

    this.orchestrator.writeFile("./requirements/testcases.txt", testCases);

    return testCases;
  }
}
