import "dotenv/config";
import { QAWorkflow } from "./workflows/qa_workflow.js";
import { Orchestrator } from "./orchestrator.js";
import { ToolRegistry } from "./tools/tool_registry.js";
import { LLMService } from "./services/llm_service.js";

async function main() {
  const orchestrator = new Orchestrator( new ToolRegistry(),new LLMService() );
  const workflow = new QAWorkflow(orchestrator);
  const result = await workflow.execute("./requirements/login.txt");
  console.log(result);
}

main();