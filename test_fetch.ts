const response = await fetch("http://localhost:11434/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer ollama",
  },
  body: JSON.stringify({
    model: "qwen3:8b",
    messages: [
      {
        role: "system",
        content:
          "You are a Senior QA Engineer.\r\n\r\nYour responsibilities:\r\n- Generate comprehensive test cases.\r\n- Include positive, negative, boundary, and edge cases.\r\n- Return the answer in Markdown.",
      },
      {
        role: "user",
        content: "User can log in with valid username and password.",
      },
    ],
  }),
});

console.log(await response.json());