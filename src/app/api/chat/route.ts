import { GoogleGenAI } from '@google/genai';

export async function GET() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
  });
  const response = await ai.models.generateContentStream({
    model: 'gemini-2.0-flash',
    contents: 'Explain how AI works in a much details words',
  });

  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of response) {
        controller.enqueue(new TextEncoder().encode(chunk.text));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      Connection: 'keep-alive',
      'Content-Encoding': 'none',
      'Cache-Control': 'no-cache, no-transform',
      'Content-Type': 'text/event-stream; charset=utf-8',
    },
  });
}
