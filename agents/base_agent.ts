import { ILLMService } from "../interfaces/llm.js";
import { loadPrompt } from "../utils/prompt_loader.js";

export abstract class BaseAgent {

  constructor(
    protected readonly llm: ILLMService,
    private readonly promptFile: string
  ) {}

  async execute(
    input: string
  ): Promise<string> {

    const systemPrompt = loadPrompt(
      this.promptFile
    );

    return this.llm.generate(
      systemPrompt,
      input
    );

  }

}