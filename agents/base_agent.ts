import { ILLMService } from "../interfaces/llm.js";
import { loadPrompt } from "../utils/prompt_loader.js";

export abstract class BaseAgent {

  private readonly systemPrompt: string;

  constructor(
    protected readonly llm: ILLMService,
    private readonly promptFile: string
  ) {
    this.systemPrompt = loadPrompt(
      this.promptFile
    );
  }

  async execute(
    input: string
  ): Promise<string> {

    return this.llm.generate(
      this.systemPrompt,
      input
    );

  }

}