import { IMCPClient } from "../interfaces/imcp_tool.js";
import { MockMCPServer } from "../mcp/mock_mcp_server.js";

export class MCPClient implements IMCPClient {

  private connected = false;
  private serverName = "";
  private readonly server = new MockMCPServer();

  async connect(serverName: string): Promise<void> 
  {

    this.serverName = serverName;
    await this.server.connect();
    this.connected = true;
    console.log(
      `Connected to MCP Server: ${this.serverName}`
    );
  }

  async listTools(): Promise<string[]> 
  {
    if (!this.connected) {
      throw new Error(
        "Not connected to MCP Server."
      );
    }
    return this.server.listTools();
  }

  async callTool(toolName: string,arguments_: Record<string, unknown>)
  {
    if (!this.connected) {
      throw new Error(
        "Not connected to MCP Server."
      );
    }

    return this.server.callTool(
      toolName,
      arguments_
    );

  }

  async disconnect(): Promise<void> {
    await this.server.disconnect();
    this.connected = false;
    this.serverName = "";
  }

}