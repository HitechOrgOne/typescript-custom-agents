import { ask } from "../llm.js";
import { loadPrompt } from "../utils/prompt_loader.js";

export async function generateTestCases(
  requirement: string
): Promise<string> {
  const systemPrompt = loadPrompt("testcase_agent.md");

  return ask(systemPrompt, requirement);
}