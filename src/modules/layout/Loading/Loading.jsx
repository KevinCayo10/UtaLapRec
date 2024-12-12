import React from "react";

function Loading() {
  return (
    <div className="flex space-x-2 my-4">
      <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"></div>
    </div>
  );
}

export default Loading;
