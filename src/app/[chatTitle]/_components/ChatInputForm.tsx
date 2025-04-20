'use client'; // Add this if using client-side state/event handlers

import { SendIcon } from '@/components/icons/SendIcon';
import * as React from 'react';

export function ChatInputForm() {
  // Add state for input value if needed
  // const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full items-center gap-2 rounded-lg border border-gray-200 bg-white p-2 shadow-sm" // Added max-width and centering
    >
      <input
        type="text"
        placeholder="Ask me anything..."
        // value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow border-none bg-transparent px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:ring-0 focus:outline-none"
      />
      <button
        type="submit"
        className="flex cursor-pointer items-center justify-between gap-2 rounded-md bg-gray-100 px-2.5 py-2 text-gray-500 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 focus:outline-none"
        aria-label="Send message"
      >
        <SendIcon className="h-4 w-4" />
        <span className="hidden md:block">Submit</span>
      </button>
    </form>
  );
}
