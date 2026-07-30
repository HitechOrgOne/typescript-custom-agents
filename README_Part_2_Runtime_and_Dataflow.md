# Part 2 – Runtime & Data Flow

## Testcase workflow

login.txt
↓
string
↓
TestcaseAgent
↓
LLM
↓
testcases.txt

## Playwright workflow

testcases.txt
↓
string
↓
PlaywrightAgent
↓
LLM
↓
login.spec.ts

Method chain

main
→ workflow.execute()
→ orchestrator.run()
→ registry[agent]
→ execute()
→ llm.generate()
→ client.generate()
→ Ollama

Returned data bubbles back in reverse.

Adding an Agent:
1. Extend BaseAgent
2. Add prompt
3. Register in registry
4. Add enum
5. Create workflow (optional)

Adding a Tool:
1. Extend BaseTool
2. Register in ToolRegistry
3. Expose orchestrator helper
4. Consume from workflow/agent.
