import { generateTestCases } from "./testcase_agent.js";
import { generatePlaywrightTest } from "./playwright_agent.js";

export const AGENTS = {
  testcase: generateTestCases,
  playwright: generatePlaywrightTest,
} as const;