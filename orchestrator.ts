import { Agent } from "./types/agent.js";
import { AGENTS } from "./agents/registry.js";
import { readFile } from "./tools/file_tool.js";

export async function run(
  agent: Agent,
  requirementFile: string
): Promise<string> {
  const requirement = readFile(requirementFile);

  return AGENTS[agent](requirement);
}