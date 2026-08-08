import { readFileSync } from "node:fs";
import path from "node:path";

export function loadPrompt(fileName: string): string {
  const promptsDir = path.join(process.cwd(), "prompts");

  return readFileSync(path.join(promptsDir, fileName), "utf-8");
}
