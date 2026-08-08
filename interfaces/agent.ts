export interface IAgent {
  execute(requirement: string): Promise<string>;
}
