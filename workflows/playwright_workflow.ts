import { Agent } from "../types/agent.js";
import { Orchestrator } from "../orchestrator.js";

export class PlaywrightWorkflow {
  constructor(
    private readonly orchestrator: Orchestrator
  ) {}

  async execute(
    testcaseFile: string
  ): Promise<string> {

    const testCases = this.orchestrator.readRequirement(
      testcaseFile
    );

    const playwrightCode = await this.orchestrator.run(
      Agent.PLAYWRIGHT,
      testCases
    );

    this.orchestrator.writeFile(
      "./output/login.spec.ts",
      playwrightCode
    );

    return playwrightCode;
  }
}