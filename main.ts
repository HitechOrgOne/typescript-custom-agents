import { QAWorkflow } from "./workflows/qa_workflow.js";
import { Orchestrator } from "./orchestrator.js";
import { ToolRegistry } from "./tools/tool_registry.js";
import { LLMService } from "./services/llm_service.js";
import { OpenAIClient } from "./services/openai_client.js";

async function main(): Promise<void> {
  const llm = new LLMService(new OpenAIClient());

  const orchestrator = new Orchestrator(new ToolRegistry(), llm);

  const workflow = new QAWorkflow(orchestrator);

  const result = await workflow.execute("./requirements/login.txt");

  console.log(result);
}

main();
