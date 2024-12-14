import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const SortContext = createContext();

// Proveedor del contexto
export const SortProvider = ({ children }) => {
  const [selectedSort, setSelectedSort] = useState("brand_asc");

  return (
    <SortContext.Provider
      value={{
        selectedSort,
        setSelectedSort,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};

// Custom hook para consumir el contexto
export const useSortContext = () => useContext(SortContext);
