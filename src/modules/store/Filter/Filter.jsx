import { useFilterContext } from "@/context/FilterContext";
import React, { useState, useEffect } from "react";

function Filter({ filters, setFilters }) {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [stores_name, setStores_name] = useState([]);

  // Constantes para procesadores, almacenamiento y RAM
  const PROCESSORS = ["i3", "i5", "i7", "Ryzen 3", "Ryzen 5", "Ryzen 7"];
  const STORAGES = ["128GB", "256GB", "512GB", "1TB", "2TB"];
  const RAMS = ["4GB", "8GB", "16GB", "32GB", "64GB"];

  const [processors, setProcessors] = useState(PROCESSORS);
  const [storages, setStorages] = useState(STORAGES);
  const [rams, setRams] = useState(RAMS);

  const [selectedBrand, setSelectedBrand] = useState(
    filters.selectedBrand || ""
  );
  const [selectedCategory, setSelectedCategory] = useState(
    filters.selectedCategory || ""
  );
  const [selectedStoreName, setSelectedStoreName] = useState(
    filters.selectedStoreName || ""
  );
  const [selectedProcessor, setSelectedProcessor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(2000);
  const [searchTitle, setSearchTitle] = useState(filters.searchTitle || "");

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
      selectedProcessor,
      selectedStorage,
      selectedRam,
      priceMin,
      priceMax,
      searchTitle,
    };
    setFilters(newFilters);
  };

  useEffect(() => {
    console.log("erload filters .....")
    getFilterValues();
  }, []);

  return (
    <div className="flex flex-col gap-4 mb-8 sm:flex-col">
      <div className="hidden sm:block">
        <h3 className="p-2 text-2xl font-semibold">Filtros</h3>
      </div>

      {/* Filtro de tienda */}
      <div className="indicator w-full sm:w-auto">
        <span className="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
          Tienda
        </span>
        <select
          className="select select-bordered w-full"
          value={selectedStoreName}
          onChange={(e) => {
            setSelectedStoreName(e.target.value);
            handleFilterChange();
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

      {/* Filtro de Categoría */}
      <div className="indicator w-full sm:w-auto">
        <span className="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
          Categoría
        </span>
        <select
          className="select select-bordered w-full"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            handleFilterChange();
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
      {/* Filtro de Marca */}
      <div className="indicator w-full sm:w-auto">
        <span className="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
          Marca
        </span>
        <select
          className="select select-bordered w-full"
          value={selectedBrand}
          onChange={(e) => {
            setSelectedBrand(e.target.value);
            handleFilterChange();
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

      {/* Filtro de Procesadores */}
      <div className="indicator w-full sm:w-auto">
        <span className="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
          Procesador
        </span>
        <select
          className="select select-bordered w-full"
          value={selectedProcessor}
          onChange={(e) => {
            setSelectedProcessor(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Todos</option>
          {processors.map((processor) => (
            <option key={processor} value={processor}>
              {processor}
            </option>
          ))}
        </select>
      </div>

      {/* Filtro de Almacenamiento */}
      <div className="indicator w-full sm:w-auto">
        <span className="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
          Almacenamiento
        </span>
        <select
          className="select select-bordered w-full"
          value={selectedStorage}
          onChange={(e) => {
            setSelectedStorage(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Todos</option>
          {storages.map((storage) => (
            <option key={storage} value={storage}>
              {storage}
            </option>
          ))}
        </select>
      </div>

      {/* Filtro de RAM */}
      <div className="indicator w-full sm:w-auto">
        <span className="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
          RAM
        </span>
        <select
          className="select select-bordered w-full"
          value={selectedRam}
          onChange={(e) => {
            setSelectedRam(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">Todos</option>
          {rams.map((ram) => (
            <option key={ram} value={ram}>
              {ram}
            </option>
          ))}
        </select>
      </div>

      {/* Filtro de Precio */}
      <div className="flex flex-row gap-2">
        <div className="indicator w-full sm:w-wrap">
          <span className="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
            Precio min
          </span>
          <input
            type="number"
            className="input input-bordered w-full"
            value={priceMin}
            onChange={(e) => {
              setPriceMin(e.target.value);
              handleFilterChange();
            }}
            placeholder="Min"
          />
        </div>
        <div className="indicator w-full sm:w-wrap">
          <span className="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
            Precio max
          </span>
          <input
            type="number"
            className="input input-bordered w-full"
            value={priceMax}
            onChange={(e) => {
              setPriceMax(e.target.value);
              handleFilterChange();
            }}
            placeholder="Max"
          />
        </div>
      </div>

      {/* Filtro de Búsqueda */}
      <div className="indicator w-full sm:w-auto">
        <span className="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
          Buscar
        </span>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Buscar por palabra clave..."
          value={searchTitle}
          onChange={(e) => {
            setSearchTitle(e.target.value);
            handleFilterChange();
          }}
        />
      </div>
    </div>
  );
}

export default Filter;
