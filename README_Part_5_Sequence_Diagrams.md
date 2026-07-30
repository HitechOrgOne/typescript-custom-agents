
# Part 5 - Sequence Diagrams

## Testcase

User
 |
main
 |
Workflow
 |
Orchestrator
 |
TestcaseAgent
 |
LLMService
 |
LLMClient
 |
Ollama
 |
response
 |
FileTool.write()

## Playwright

User
 |
main
 |
Workflow
 |
Orchestrator
 |
PlaywrightAgent
 |
LLMService
 |
LLMClient
 |
Ollama
 |
response
 |
FileTool.write()

Return path is the reverse of every call.

Data:
login.txt
 -> requirement string
 -> prompt + requirement
 -> LLM
 -> testcase string
 -> testcases.txt

Then

testcases.txt
 -> testcase string
 -> prompt + testcase
 -> LLM
 -> Playwright TS
 -> login.spec.ts
