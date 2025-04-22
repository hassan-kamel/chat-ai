'use client';

import React, { useEffect, useState } from 'react';
import OpenAI from 'openai';

interface ChatProps {
  // chatTitle: string;
}

const Chat: React.FC<ChatProps> = () => {
  const [currentMessage, setCurrentMessage] = useState('');

  const getOpenAIResponse = async (prompt: string) => {
    const client = new OpenAI({
      apiKey: '',
      dangerouslyAllowBrowser: true,
    });
    const result = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    });

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result) {
          console.log('chunk', chunk);
          // if (chunk.type === 'response.output_text.delta' && chunk.delta) {
          //   // setCurrentMessage(prev => prev + chunk.delta);
          //   controller.enqueue(new TextEncoder().encode(chunk.delta));
          // }
        }

        controller.close();
      },
    });

    return stream;
  };

  useEffect(() => {
    getOpenAIResponse('Explain how AI works in a much details words')
      .then(stream => {
        const reader = stream.getReader();
        const decoder = new TextDecoder('utf-8');
        const readStream = async () => {
          const { done, value } = await reader.read();
          if (done) return;
          setCurrentMessage(prev => prev + decoder.decode(value));
          readStream();
        };
        readStream();
      })
      .catch(error => {
        console.error('Error fetching OpenAI response:', error);
      });
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-box">{currentMessage}</div>
    </div>
  );
};

export default Chat;
