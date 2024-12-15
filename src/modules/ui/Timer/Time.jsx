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
    // Guardar el tiempo cuando el botón Reset se presiona
    saveTime(seconds);

    // Reiniciar el estado del timer
    setIsRunning(false);
    setSeconds(0);
  };

  const saveTime = async (time) => {
    const user_id = localStorage.getItem("user_id"); // Obtén el ID del usuario
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_URL}/api/timer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user_id,
            time: time, // El tiempo que pasó
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error al guardar el tiempo");
      }

      const data = await response.json();
      console.log("Tiempo guardado:", data);
    } catch (error) {
      console.error("Error al guardar el tiempo:", error);
    }
  };

  return (
    <div className="fixed top-4 right-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg z-50">
      <div className="flex items-center gap-2">
        <p className="text-xs font-medium">Tiempo: {seconds}s</p>
        <div className="flex gap-1">
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs"
            onClick={startTimer}
          >
            Empezar
          </button>
          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md text-xs"
            onClick={stopTimer}
          >
            Parar
          </button>
          <button
            className="bg-gray-600 text-white px-2 py-1 rounded-md text-xs"
            onClick={resetTimer}
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
