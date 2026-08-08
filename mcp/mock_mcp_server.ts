import { IMCPServerTool } from "../interfaces/imcp_server_tool.js";
import { FileTool } from "../tools/file_tool.js";
import { FileMCPTool } from "../tools/file_mcp_tool.js";
import { MCPToolInfo } from "./mcp_tool_info.js";

export class MockMCPServer {
  private readonly tools = new Map<string, IMCPServerTool>();

  constructor() {
    this.register(new FileMCPTool(new FileTool()));
  }

  private register(tool: IMCPServerTool): void {
    this.tools.set(tool.info.name, tool);
  }

  async connect(): Promise<void> {
    console.log("MCP Server: Client connected.");
  }

  async listTools(): Promise<MCPToolInfo[]> {
    return [...this.tools.values()].map((tool) => tool.info);
  }

  async callTool(
    toolName: string,
    arguments_: Record<string, unknown>,
  ): Promise<unknown> {
    const tool = this.tools.get(toolName);

    if (!tool) {
      throw new Error(`Tool '${toolName}' not found.`);
    }

    return tool.execute(arguments_);
  }

  async disconnect(): Promise<void> {
    console.log("MCP Server: Client disconnected.");
  }
}
