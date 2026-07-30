import { ToolRegistry } from "./tools/tool_registry.js";
import { LLMService } from "./services/llm_service.js";
import { Orchestrator } from "./orchestrator.js";
import { TestcaseWorkflow } from "./workflows/testcase_workflow.js";

async function main(): Promise<void> {

  const orchestrator = new Orchestrator(
    new ToolRegistry(),
    new LLMService()
  );

  const workflow = new TestcaseWorkflow(
    orchestrator
  );

  const result = await workflow.execute(
    "./requirements/login.txt"
  );

  console.log(result);
}

main();