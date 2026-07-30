import { Agent } from "./types/agent.js";
import { createAgents } from "./agents/registry.js";
import { LLMService } from "./services/llm_service.js";
import { FileTool } from "./tools/file_tool.js";

const llm = new LLMService();
const fileTool = new FileTool();

const agents = createAgents(llm);

export async function run(
  agent: Agent,
  requirementFile: string
): Promise<string> {
  const requirement = fileTool.read(requirementFile);

  return agents[agent].execute(requirement);
}