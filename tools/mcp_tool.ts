export class MCPTool {

    private server = "";

    connect(server: string): void {
        this.server = server;
    }

    async callTool(
        tool: string,
        args: Record<string, unknown>
    ): Promise<string> {

        console.log("Server:", this.server);
        console.log("Tool:", tool);
        console.log("Arguments:", args);

        return "Not implemented";
    }

}