import { IMCPServerTool } from "../../interfaces/imcp_server_tool.js";
import { FileTool } from "../../tools/file_tool.js";

export class FileMCPTool implements IMCPServerTool {

  readonly name = "file";

  readonly info = {
    name: "file",
    description: "Read and write local files."
};

  constructor(
    private readonly fileTool: FileTool
  ) {}

  async execute(
    arguments_: Record<string, unknown>
  ): Promise<unknown> {

    const operation = arguments_.operation as string;
    const path = arguments_.path as string;

    switch (operation) {

      case "read":
        return this.fileTool.read(path);

      case "write":

        this.fileTool.write(
          path,
          arguments_.content as string
        );

        return "File written successfully.";

      default:
        throw new Error(
          `Unknown file operation: ${operation}`
        );

    }

  }

}