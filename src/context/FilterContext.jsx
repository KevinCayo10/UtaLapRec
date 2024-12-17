import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const FilterContext = createContext();

// Hook para usar el contexto
export const useFilterContext = () => {
  return useContext(FilterContext);
};

// Proveedor del contexto
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    selectedBrand: "",
    selectedCategory: "",
    selectedStoreName: "",
    selectedProcessor: "",
    selectedStorage: "",
    selectedRam: "",
    priceMin: 100,
    priceMax: 2000,
    searchTitle: "",
  });
  const [currentPage, setCurrentPage] = useState(1); // Estado de la página actual

  return (
    <FilterContext.Provider
      value={{ filters, setFilters, currentPage, setCurrentPage }}
    >
      {children}
    </FilterContext.Provider>
  );
};
