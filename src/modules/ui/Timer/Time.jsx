import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="fixed top-4 right-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg z-50">
      <div className="flex items-center gap-2">
        <p className="text-xs font-medium">Timer: {seconds}s</p>
        <div className="flex gap-1">
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs"
            onClick={startTimer}
          >
            Start
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md text-xs"
            onClick={stopTimer}
          >
            Stop
          </button>
          <button
            className="bg-gray-600 text-white px-2 py-1 rounded-md text-xs"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
