import { Agent } from "./types/agent.js";
import { createAgents } from "./agents/registry.js";
import { LLMService } from "./services/llm_service.js";
import { ToolRegistry } from "./tools/tool_registry.js";

export class Orchestrator {
  private readonly agents;

  constructor(
    private readonly tools: ToolRegistry,
    private readonly llm: LLMService
  ) {
    this.agents = createAgents(llm);
  }

  async run(
    agent: Agent,
    input: string
  ): Promise<string> {
    return this.agents[agent].execute(input);
  }

  readRequirement(
    requirementFile: string
  ): string {
    return this.tools.file.read(requirementFile);
  }

  writeFile(
    filePath: string,
    content: string
  ): void {
    this.tools.file.write(filePath, content);
  }
}