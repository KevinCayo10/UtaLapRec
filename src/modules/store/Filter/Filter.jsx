import React, { useState, useEffect } from "react";

function Filter({ onFilterChange }) {
  // const brands = [
  //   "Acer",
  //   "Alienware",
  //   "Asus",
  //   "Dell",
  //   "HP",
  //   "Lenovo",
  //   "MSI",
  //   "Apple",
  //   "Otra",
  // ];
  // const categories = ["Batería", "Laptop", "Otra"];

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(2000);
  const [searchTitle, setSearchTitle] = useState("");

  const getFilterValues = () => {
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}api/filter`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        setBrands(data.brands);
        setCategories(data.categories);
        setPriceMax(data.price_max);
      })
      .catch((error) => console.error(error));
  };

  // Función para manejar cambios en los filtros
  const handleFilterChange = () => {
    console.log("Filtros actuales:", {
      selectedBrand,
      selectedCategory,
      priceMin,
      priceMax,
      searchTitle,
    });

    const newFilters = {
      selectedBrand,
      selectedCategory,
      priceMin,
      priceMax,
      searchTitle,
    };
    onFilterChange(newFilters);
  };

  useEffect(() => {
    getFilterValues();
  }, []);
  useEffect(() => {
    handleFilterChange();
  }, [selectedBrand, selectedCategory, priceMin, priceMax, searchTitle]);

  return (
    <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:flex-wrap">
      {/* Filtro de Marca */}
      <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto">
        <label className="mb-1 sm:mb-0 sm:mr-2 font-medium">Marca:</label>
        <select
          className="select select-bordered w-full sm:w-auto"
          value={selectedBrand}
          onChange={(e) => {
            setSelectedBrand(e.target.value);
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
      <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto">
        <label className="mb-1 sm:mb-0 sm:mr-2 font-medium">Categoría:</label>
        <select
          className="select select-bordered w-full sm:w-auto"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
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
      <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto">
        <label className="mb-1 sm:mb-0 sm:mr-2 font-medium">Precio:</label>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <input
            type="number"
            className="input input-bordered w-full sm:w-24"
            value={priceMin}
            onChange={(e) => {
              setPriceMin(e.target.value);
            }}
            placeholder="Min"
          />
          <span className="hidden sm:inline-block">-</span>
          <input
            type="number"
            className="input input-bordered w-full sm:w-24"
            value={priceMax}
            onChange={(e) => {
              setPriceMax(e.target.value);
            }}
            placeholder="Max"
          />
        </div>
      </div>

      {/* Filtro de Búsqueda */}
      <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto">
        <label className="mb-1 sm:mb-0 sm:mr-2 font-medium">Buscar:</label>
        <input
          type="text"
          className="input input-bordered w-full sm:w-auto"
          placeholder="Buscar productos..."
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Filter;
