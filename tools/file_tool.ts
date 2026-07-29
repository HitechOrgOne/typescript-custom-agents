import { readFileSync } from "node:fs";

export function readFile(filePath: string): string {
  return readFileSync(filePath, "utf-8");
}