import { AGENTS } from "./agents/registry.js";

export async function run(
  agent: keyof typeof AGENTS,
  requirement: string
): Promise<string> {
  const selectedAgent = AGENTS[agent];
  return selectedAgent(requirement);
}