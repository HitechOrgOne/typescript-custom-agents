import { Agent } from "./types/agent.js";
import { createAgents } from "./agents/agent_registry.js";
import { ToolRegistry } from "./tools/tool_registry.js";
import { LLMService } from "./services/llm_service.js";

export class Orchestrator {

  private readonly agents;

  constructor(
    private readonly tools: ToolRegistry,
    private readonly llm: LLMService
  ) {
    this.agents = createAgents(
      this.llm
    );
  }

  async run(
    agent: Agent,
    input: string
  ): Promise<string> {

    return this.agents[agent].execute(
      input
    );

  }

  readRequirement(
    filePath: string
  ): string {

    return this.tools.file.read(
      filePath
    );

  }

  writeFile(
    filePath: string,
    content: string
  ): void {

    this.tools.file.write(
      filePath,
      content
    );

  }

}