import React from "react";

function Loading() {
  return (
    <div className="flex space-x-2 my-4 justify-center">
      <div
        className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"
        style={{ animationDelay: "0.4s" }}
      ></div>
      <div
        className="w-4 h-4 bg-gray-600 rounded-full animate-bounce "
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  );
}

export default Loading;
