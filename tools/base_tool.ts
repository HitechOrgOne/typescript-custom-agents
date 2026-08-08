import { ITool } from "../interfaces/tool.js";

export abstract class BaseTool implements ITool {
  constructor(public readonly name: string) {}
}
