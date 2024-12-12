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
  const [stores_name, setStores_name] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStoreName, setSelectedStoreName] = useState("");
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
        setStores_name(data.stores_name);
      })
      .catch((error) => console.error(error));
  };

  // Función para manejar cambios en los filtros
  const handleFilterChange = () => {
    const newFilters = {
      selectedBrand,
      selectedCategory,
      selectedStoreName,
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
  }, [
    selectedBrand,
    selectedCategory,
    selectedStoreName,
    priceMin,
    priceMax,
    searchTitle,
  ]);

  return (
    <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:flex-wrap">
      {/* Filtro de store name */}
      <div class="indicator w-full sm:w-auto">
        <span class="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
          Tienda
        </span>
        <select
          className="select select-bordered w-full sm:w-auto"
          value={selectedStoreName}
          onChange={(e) => {
            setSelectedStoreName(e.target.value);
          }}
        >
          <option value="">Todas</option>
          {stores_name.map((store_name) => (
            <option key={store_name} value={store_name}>
              {store_name}
            </option>
          ))}
        </select>
      </div>
      {/* Filtro de Marca */}
      <div class="indicator w-full sm:w-auto">
        <span class="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
          Marca
        </span>
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
      <div class="indicator w-full sm:w-auto">
        <span class="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
          Marca
        </span>
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
      <div className="flex flex-row gap-2">
        <div className="indicator w-full sm:w-auto">
          <span class="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
            Precio min
          </span>
          <input
            type="number"
            className="input input-bordered w-full sm:w-24"
            value={priceMin}
            onChange={(e) => {
              setPriceMin(e.target.value);
            }}
            placeholder="Min"
          />
        </div>
        <div className="indicator w-full sm:w-auto">
          <span class="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
            Precio Max
          </span>
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
      <div class="indicator w-full sm:w-auto">
        <span class="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
          Buscar
        </span>
        <input
          type="text"
          className="input input-bordered w-full sm:w-auto"
          placeholder="Buscar por palabra clave..."
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Filter;
