export const env = {
  baseUrl: process.env.LLM_BASE_URL!,
  apiKey: process.env.LLM_API_KEY!,
  model: process.env.LLM_MODEL!,
  timeout: Number(process.env.LLM_TIMEOUT),
  temperature: Number(process.env.LLM_TEMPERATURE),
  outputDir: process.env.OUTPUT_DIR!
};