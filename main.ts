import { run } from "./orchestrator.js";

async function main(): Promise<void> {
  const requirement =
    "User can log in with valid username and password.";

  console.log(await run("testcase", requirement));

 console.log(await run("playwright", requirement));
}

main();