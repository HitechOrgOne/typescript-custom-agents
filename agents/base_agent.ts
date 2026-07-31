import { IAgent } from "../interfaces/agent.js";
import { ILLMService } from "../interfaces/llm.js";
import { loadPrompt } from "../utils/prompt_loader.js";

export abstract class BaseAgent implements IAgent {
  constructor(
    protected readonly llm: ILLMService,
    private readonly promptFile: string
  ) {}

  async execute(requirement: string): Promise<string> {
    const systemPrompt = loadPrompt(this.promptFile);

    return this.llm.generate(
      systemPrompt,
      requirement
    );
  }
}