
# Part 4 - Class & Method Reference

## main_testcase.ts
Responsibilities:
- Create ToolRegistry
- Create LLMService
- Create Orchestrator
- Create TestcaseWorkflow
- Call execute()

Call chain:
main()
 ├─ new ToolRegistry()
 ├─ new LLMService()
 ├─ new Orchestrator()
 ├─ new TestcaseWorkflow()
 └─ workflow.execute()

## TestcaseWorkflow
Method:
execute(requirementFile:string)

Calls:
1. orchestrator.readRequirement()
2. orchestrator.run(TESTCASE,input)
3. orchestrator.writeFile(testcases.txt,result)
4. return result

## PlaywrightWorkflow
execute(testcaseFile:string)

Calls:
1. orchestrator.readRequirement()
2. orchestrator.run(PLAYWRIGHT,input)
3. orchestrator.writeFile(login.spec.ts,result)

## Orchestrator

run(agent,input)
 -> registry[agent].execute(input)

readRequirement(path)
 -> FileTool.read(path)

writeFile(path,data)
 -> FileTool.write(path,data)

Purpose:
Single entry point for workflows.

## BaseAgent

execute(input)
 ├─ loadPrompt()
 ├─ llm.generate(system,input)
 └─ return response

Concrete agents only provide prompt identity.
