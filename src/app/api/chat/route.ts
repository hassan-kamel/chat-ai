import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export const payloadSchema = z.object({
  prompt: z.string().min(1).max(1000, 'Prompt must be between 1 and 1000 characters'),
});

export async function POST(request: Request) {
  const { prompt } = await request.json();

  const validatedPrompt = payloadSchema.safeParse({ prompt });

  if (!validatedPrompt.success) {
    return NextResponse.json(
      {
        success: false,
        message: 'Validation failed',
        errors: validatedPrompt.error.flatten(),
        timestamp: new Date().toISOString(),
      },
      { status: 400 },
    );
  }

  const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
  });
  const response = await ai.models.generateContentStream({
    model: 'gemini-2.0-flash',
    contents: prompt,
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
