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

  const requirement = orchestrator.readRequirement(
    "./requirements/login.txt"
  );

  const response = await orchestrator.run(
    Agent.TESTCASE,
    requirement
  );

  orchestrator.writeFile(
    "./requirements/testcases.txt",
    response
  );

  console.log(response);

}

main();