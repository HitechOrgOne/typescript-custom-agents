import { ILLMService } from "../interfaces/illm.js";
import { IMCPClient } from "../interfaces/imcp_client.js";
import { loadPrompt } from "../utils/prompt_loader.js";

export abstract class BaseAgent {
  private readonly systemPrompt: string;

  constructor(
    protected readonly llm: ILLMService,
    protected readonly mcp: IMCPClient,
    private readonly promptFile: string,
  ) {
    this.systemPrompt = loadPrompt(this.promptFile);
  }

  async execute(input: string): Promise<string> {
    const tools = await this.mcp.listTools();
    const toolDescriptions = tools
      .map((tool) => `${tool.name}: ${tool.description}`)
      .join("\n");

    const finalSystemPrompt = `${this.systemPrompt}

Available MCP Tools

${toolDescriptions}
`;

    return this.llm.generate(finalSystemPrompt, input);
  }
}
