import { Agent } from "../types/agent.js";
import { Orchestrator } from "../orchestrator.js";

export class QAWorkflow {
  constructor(
    private readonly orchestrator: Orchestrator
  ) {}

  async execute(requirementFile: string): Promise<string> {
    const testCases = await this.orchestrator.run(
      Agent.TESTCASE,
      requirementFile
    );

    return this.orchestrator.run(
      Agent.PLAYWRIGHT,
      testCases
    );
  }
}