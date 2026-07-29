import { ILLMService } from "../interfaces/llm.js";
import { loadPrompt } from "../utils/prompt_loader.js";

export async function generateTestCases(
  llm: ILLMService,
  requirement: string
): Promise<string> {
  const systemPrompt = loadPrompt("testcase_agent.md");

  return llm.generate(systemPrompt, requirement);
}