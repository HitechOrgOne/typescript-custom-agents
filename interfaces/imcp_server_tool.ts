export interface IMCPServerTool {
  readonly name: string;

execute(
    arguments_: Record<string, unknown>
  ): Promise<unknown>;

}