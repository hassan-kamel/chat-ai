"use client"; // Add this if using client-side state/event handlers

import { SendIcon } from "@/components/icons/SendIcon";
import * as React from "react";

export function ChatInputForm() {
  // Add state for input value if needed
  // const [inputValue, setInputValue] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded-lg shadow-sm w-full  mx-auto" // Added max-width and centering
    >
      <input
        type="text"
        placeholder="Ask me anything..."
        // value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow px-3 py-2 text-sm text-gray-700 placeholder-gray-400 bg-transparent border-none focus:outline-none focus:ring-0"
      />
      <button
        type="submit"
        className="px-2.5 py-2 flex items-center justify-between gap-2  bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
        aria-label="Send message"
      >
        <SendIcon className="w-4 h-4" />
        <span className="md:block hidden ">Submit</span>
      </button>
    </form>
  );
}
