// import fs from "node:fs"
// import { parse } from "csv-parse/sync";
// const csvContent = fs.readFileSync("./users.csv","utf8")
// const records = parse(csvContent, {
//     columns: true,
//     skip_empty_lines: true
// });

// for(let record of records){
// console.log(record instanceof Set )
// console.log(record  )
// }

// type Tools = {
// name:string
// description:string
// }
// interface AllTools {
// state: string
// }
// const tools=new Map<string,Tools>()
// tools.set("Jira",{name:"Jira Tool",description:"This is jira"})
// tools.set("DB",{name:"DB Tool",description:"This is DB"})
// const va=[...tools.values()].map( val => val.name)
// for(let singleval of va )
// {
//     console.log(singleval)
// }

// function mf(...args){
//     args.forEach(   item => console.log(item))
//      }

// mf(1,2,3)

const l1 = [1, 2, 3];
const l2 = l1.reduce((accumulator, current) => accumulator + current, 2);
console.log(l2);
