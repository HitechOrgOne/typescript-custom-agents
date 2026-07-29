import { ask } from "../llm.js";
import { loadPrompt } from "../utils/prompt_loader.js";

export async function generatePlaywrightTest(
  requirement: string
): Promise<string> {
  const systemPrompt = loadPrompt("playwright_agent.md");

  return ask(systemPrompt, requirement);
}