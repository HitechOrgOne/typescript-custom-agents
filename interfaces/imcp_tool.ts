export interface IMCPClient {

  connect(
    serverName: string
  ): Promise<void>;

  listTools(): Promise<string[]>;

  callTool(
    toolName: string,
    arguments_: Record<string, unknown>
  ): Promise<unknown>;

  disconnect(): Promise<void>;

}