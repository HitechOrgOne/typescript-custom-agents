import { Orchestrator } from "./orchestrator.js";
import { Agent } from "./types/agent.js";
import { ToolRegistry } from "./tools/tool_registry.js";
import { LLMService } from "./services/llm_service.js";

async function main(): Promise<void> {
  const orchestrator = new Orchestrator(
    new ToolRegistry(),
    new LLMService()
  );

  const requirement = orchestrator.readRequirement(
    "./requirements/login.txt"
  );

  const response = await orchestrator.run(
    Agent.TESTCASE,
    requirement
  );

  console.log(response);
}

main();