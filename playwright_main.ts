import "dotenv/config";
import { ToolRegistry } from "./tools/tool_registry.js";
import { LLMService } from "./services/llm_service.js";
import { Orchestrator } from "./orchestrator.js";
import { PlaywrightWorkflow } from "./workflows/playwright_workflow.js";

async function main(): Promise<void> {
  const orchestrator = new Orchestrator(new ToolRegistry(), new LLMService());

  const workflow = new PlaywrightWorkflow(orchestrator);

  const result = await workflow.execute("./requirements/testcases.txt");

  console.log(result);
}

main();
