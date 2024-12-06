import React, { useState, useEffect } from "react";

function Filter({ onFilterChange }) {
  const brands = [
    "Acer",
    "Alienware",
    "Asus",
    "Dell",
    "HP",
    "Lenovo",
    "MSI",
    "Otra",
  ];
  const categories = ["Batería", "Laptop", "Otra"];

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceMin, setPriceMin] = useState(100);
  const [priceMax, setPriceMax] = useState(2000);

  // Función para manejar cambios en los filtros
  const handleFilterChange = () => {
    // Imprimir los valores del estado aquí para depurar
    console.log("Filtros actuales:", {
      selectedBrand,
      selectedCategory,
      priceMin,
      priceMax,
    });

    const newFilters = { selectedBrand, selectedCategory, priceMin, priceMax };
    onFilterChange(newFilters); // Llamamos a la función recibida como prop
  };

  useEffect(() => {
    // Si los filtros ya están establecidos, se ejecuta la función al principio
    handleFilterChange();
  }, [selectedBrand, selectedCategory, priceMin, priceMax]); // Los filtros se actualizan cada vez que cambia el estado

  return (
    <div className="flex flex-col  sm:flex-row gap-4 mb-8 ">
      {/* Filtro de Marca */}
      <div className="flex items-center">
        <label className="mr-2">Marca:</label>
        <select
          className="select select-bordered"
          value={selectedBrand}
          onChange={(e) => {
            setSelectedBrand(e.target.value); // Cambiar el estado
          }}
        >
          <option value="">Todas</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      {/* Filtro de Categoría */}
      <div className="flex items-center">
        <label className="mr-2">Categoría:</label>
        <select
          className="select select-bordered"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value); // Cambiar el estado
          }}
        >
          <option value="">Todas</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Filtro de Precio */}
      <div className="flex items-center">
        <label className="mr-2">Precio:</label>
        <input
          type="number"
          className="input input-bordered"
          value={priceMin}
          onChange={(e) => {
            setPriceMin(e.target.value); // Cambiar el estado
          }}
          placeholder="Min"
        />
        <span className="mx-2">-</span>
        <input
          type="number"
          className="input input-bordered"
          value={priceMax}
          onChange={(e) => {
            setPriceMax(e.target.value); // Cambiar el estado
          }}
          placeholder="Max"
        />
      </div>
    </div>
  );
}

export default Filter;
