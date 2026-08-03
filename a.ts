// export enum Agent{
//     PW="pw",
//     MANUAL="manual"
// }

// export class LLM{
//     generate(prompt: string) : string{
// return `llm response for prompt ${prompt}`
//     }
// }

// //testcase agent.ts
// // import { llm } from '../llm.ts'
// export class TestCaseAgent{

//     // constructor with llm as parameter
//     constructor(private readonly llm: LLM){}

//     // function with input as parameter
//     execute(input: string): string{
//         return this.llm.generate(input)
//     }
// }

// // registry.ts
//   export function  createAgents(llm:LLM){
//     return{
//         [Agent.MANUAL]: new TestCaseAgent(llm)
//     }
//   }

//   // orchestrator.ts
//   export class Orchestrator
//   {
//     private readonly agents;
//     constructor(private readonly llm: LLM ){
//     this.agents = createAgents(this.llm) 
//     } 
// }
   
  
// 1. Define a standard JavaScript object
type user = {
  id: number
  name: string
  isAdmin: boolean
};

const uobj: user = {
  id: 1,
  name: "string",
  isAdmin: true
};

console.log(Object.entries(uobj).length)
export class  A1{
constructor(private instancevar: number){}
} 
