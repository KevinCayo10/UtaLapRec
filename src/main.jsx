import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Verificar si el entorno es producción para registrar el Service Worker
if (process.env.NODE_ENV === "production") {
  const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

  // Registrar el service worker
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      console.log("Service Worker registrado con éxito:", registration);
    })
    .catch((error) => {
      console.error("Error al registrar el Service Worker:", error);
    });
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
