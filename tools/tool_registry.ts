import { FileTool } from "./file_tool.js";
// import { JiraTool } from "./jira_tool.js";
// import { DatabaseTool } from "./database_tool.js";
import { MCPTool } from "./mcp_tool.js";

export class ToolRegistry {

  readonly file = new FileTool();

  // readonly jira = new JiraTool();

  // readonly database = new DatabaseTool();

  readonly mcp = new MCPTool();

}