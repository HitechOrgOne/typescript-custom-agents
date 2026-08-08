import { Agent } from "../types/agent.js";
import { Orchestrator } from "../orchestrator.js";

export class QAWorkflow {
  constructor(private readonly orchestrator: Orchestrator) {}

  async execute(requirementFile: string): Promise<string> {
    // Read requirement
    const requirement = this.orchestrator.readRequirement(requirementFile);

    // Generate manual test cases
    const testCases = await this.orchestrator.run(Agent.TESTCASE, requirement);

    this.orchestrator.writeFile("./requirements/testcases.txt", testCases);

    // Generate Playwright code
    const playwrightCode = await this.orchestrator.run(
      Agent.PLAYWRIGHT,
      testCases,
    );

    this.orchestrator.writeFile("./output/login.spec.ts", playwrightCode);

    return playwrightCode;
  }
}
