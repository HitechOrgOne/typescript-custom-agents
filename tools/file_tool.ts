import { readFileSync } from "node:fs";
import { ITool } from "../interfaces/tool.js";

export class FileTool implements ITool {
  readonly name = "file";

  read(filePath: string): string {
    return readFileSync(filePath, "utf-8");
  }
}