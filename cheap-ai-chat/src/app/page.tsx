"use client";

import { useChat } from "ai/react";
import Markdown from "react-markdown";

export default function Chat() {
  const { 
    messages,           // messages we've had with chat bot
    input,              // where we input text
    handleInputChange,  // handle changes in input field
    handleSubmit        // when we hit return
  } = useChat();

  return (
    <div className="flex flex-col w-full mx-2 stretch">
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          <Markdown>{m.content}</Markdown>
          {/* {m.content} */}
        </div>
      ))}

      {/* input field for user to type */}
      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl text-black"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}