import { readFileSync, writeFileSync } from "node:fs";
import { BaseTool } from "./base_tool.js";

export class FileTool extends BaseTool {
  constructor() {
    super("file");
  }

  read(filePath: string): string {
    return readFileSync(filePath, "utf-8");
  }

  write(filePath: string, content: string): void {
    writeFileSync(filePath, content, "utf-8");
  }
}