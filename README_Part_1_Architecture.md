# Part 1 – Architecture

# Overall Flow

```text
npm run testcase
    │
    ▼
main_testcase.ts
    │ new ToolRegistry()
    │ new LLMService()
    │ new Orchestrator(tools,llm)
    │ new TestcaseWorkflow(orchestrator)
    ▼
TestcaseWorkflow.execute(login.txt)
    │
    ├── orchestrator.readRequirement(path)
    │       └── FileTool.read(path) -> string
    │
    ├── orchestrator.run(TESTCASE,input)
    │       └── TestcaseAgent.execute(input)
    │              ├── loadPrompt()
    │              ├── LLMService.generate(system,user)
    │              │      └── LLMClient.generate()
    │              │             └── OpenAI/Ollama(Qwen)
    │              └── returns test cases
    │
    └── orchestrator.writeFile()
            └── FileTool.write()

Classes

main_* : composition root only.
Workflow : business flow.
Orchestrator : coordinates agents and tools.
Agent : one AI capability.
LLMService : hides provider.
LLMClient : OpenAI/Ollama implementation.
ToolRegistry : owns tool instances.
FileTool : read/write.

Design principles:
- SRP
- Dependency Injection
- Composition
- Layered Architecture
- Registry Pattern
- Template Method (BaseAgent)
