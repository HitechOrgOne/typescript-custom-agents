import { MCPToolInfo } from "../mcp/mcp_tool_info.js";

export interface IMCPClient {
  connect(serverName: string): Promise<void>;

  listTools(): Promise<MCPToolInfo[]>;

  callTool(
    toolName: string,
    arguments_: Record<string, unknown>,
  ): Promise<unknown>;

  disconnect(): Promise<void>;
}
