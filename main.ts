import { run } from "./orchestrator.js";
import { Agent } from "./types/agent.js";

async function main(): Promise<void> {
  const response = await run(
    Agent.TESTCASE,
    "./requirements/login.txt"
  );

  console.log(response);
}

main();