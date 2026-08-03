import { BaseAgent } from "./base_agent.js";
import { ILLMService } from "../interfaces/illm.js";
import { PROMPTS } from "../constants/prompts.js";

export class PlaywrightAgent extends BaseAgent {

  constructor(
    llm: ILLMService
  ) {

    super(
      llm,
      PROMPTS.PLAYWRIGHT,
    );

  }

}