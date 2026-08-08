import { MCPToolInfo } from "../mcp/mcp_tool_info.js";

export interface IMCPServerTool {
  readonly info: MCPToolInfo;

  execute(arguments_: Record<string, unknown>): Promise<unknown>;
}
