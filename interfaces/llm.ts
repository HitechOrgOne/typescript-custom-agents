export interface ILLMService {
  generate(
    systemPrompt: string,
    userPrompt: string
  ): Promise<string>;
}