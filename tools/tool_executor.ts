import { ToolRegistry } from "./tool_registry.js";

export class ToolExecutor {
  constructor(private readonly tools: ToolRegistry) {}

  async execute(
    tool: "file" | "jira" | "database" | "mcp",
    action: string,
    payload?: unknown,
  ): Promise<unknown> {
    switch (tool) {
      case "file":
        return `Executing File Tool: ${action}`;

      case "jira":
        return this.tools.jira.createIssue(payload as string);

      case "database":
        return this.tools.database.query(payload as string);

      case "mcp":
        return this.tools.mcp.callTool(
          "default-server",
          action,
          payload as Record<string, unknown>,
        );

      default:
        throw new Error(`Unknown tool: ${tool}`);
    }
  }
}
