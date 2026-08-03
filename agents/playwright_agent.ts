import { Agent } from "../types/agent.js"
import { Orchestrator } from "../orchestrator.js";
import { ToolRegistry } from "../tools/tool_registry.js";
import { LLMService } from "../services/llm_service.js";
import { OpenAIClient } from "../services/openai_client.js";

async function main(): Promise<void> {

  const llm = new LLMService(
    new OpenAIClient()
  );

  const orchestrator = new Orchestrator(
    new ToolRegistry(),
    llm
  );

  const testCases = orchestrator.readRequirement(
    "./requirements/testcases.txt"
  );

  const response = await orchestrator.run(
    Agent.PLAYWRIGHT,
    testCases
  );

  orchestrator.writeFile(
    "./output/login.spec.ts",
    response
  );

  console.log(response);

}

main();