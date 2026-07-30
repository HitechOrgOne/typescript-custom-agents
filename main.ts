import { Agent } from "./types/agent.js";
import { Orchestrator } from "./orchestrator.js";
import { LLMService } from "./services/llm_service.js";
import { ToolRegistry } from "./tools/tool_registry.js";

async function main(): Promise<void> {
  const orchestrator = new Orchestrator(
    new ToolRegistry(),
    new LLMService()
  );

  const response = await orchestrator.run(
    Agent.TESTCASE,
    "./requirements/login.txt"
  );

  console.log(response);
}

main();