import { readFileSync } from "node:fs";
import { BaseTool } from "./base_tool.js";

export class FileTool extends BaseTool {
  constructor() {
    super("file");
  }

  read(filePath: string): string {
    return readFileSync(filePath, "utf-8");
  }
}