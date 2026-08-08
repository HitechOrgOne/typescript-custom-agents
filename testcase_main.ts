import "dotenv/config";

import { ToolRegistry } from "./tools/tool_registry.js";
import { LLMService } from "./services/llm_service.js";
import { OpenAIClient } from "./services/openai_client.js";
import { Orchestrator } from "./orchestrator.js";
import { TestcaseWorkflow } from "./workflows/testcase_workflow.js";
import { MCPClient } from "./mcp/mcp_client.js";

async function main(): Promise<void> {
  // ===== Test MCP =====

  const mcp = new MCPClient();
  await mcp.connect("Local Mock Server");

  console.log(await mcp.listTools());

  const content = await mcp.callTool("file", {
    operation: "read",
    path: "./requirements/login.txt",
  });

  console.log(content);

  await mcp.disconnect();

  // ===== Run Testcase Workflow =====

  const llm = new LLMService(new OpenAIClient());

  const orchestrator = new Orchestrator(new ToolRegistry(), llm);

  const workflow = new TestcaseWorkflow(orchestrator);

  const result = await workflow.execute("./requirements/login.txt");

  console.log(result);
}

main();
