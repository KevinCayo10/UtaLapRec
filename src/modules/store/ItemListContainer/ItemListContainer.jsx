import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Componentes
import Paginator from "../Paginator";
import ItemList from "../ItemList/ItemList";
import Filter from "../Filter";
import Loading from "@/modules/layout/Loading";
import { useSortContext } from "@/context/SortContext";
import { useFilterContext } from "@/context/FilterContext";

function ItemListContainer({ ...props }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { selectedSort, setSelectedSort } = useSortContext(); // Acceder al SortContext
  const { filters, setFilters, currentPage, setCurrentPage } =
    useFilterContext(); // Acceder al FilterContext

  const itemsPerPage = 12; // Número de productos por página
  const { categoryId } = useParams();

  const getProduct = () => {
    fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/api/products/filters?sort=${selectedSort}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProduct(); // Si no hay un categoryId, obtiene todos los productos
  }, [selectedSort]);

  // Filtrar productos según los filtros seleccionados
  useEffect(() => {
    const filterProducts = () => {
      let filtered = [...products];

      // Filtrar por marca
      if (filters.selectedBrand) {
        filtered = filtered.filter(
          (product) => product.brand === filters.selectedBrand
        );
      }

      // Filtrar por categoría
      if (filters.selectedCategory) {
        filtered = filtered.filter(
          (product) => product.category === filters.selectedCategory
        );
      }

      // Filtrar por store name
      if (filters.selectedStoreName) {
        filtered = filtered.filter((product) =>
          product.characteristics?.ram
            ?.toLowerCase()
            ?.includes(filters.selectedProcesor.toLowerCase())
        );
      }
      // Filtrar por store name
      if (filters.selectedProcessor) {
        filtered = filtered.filter(
          (product) =>
            product.characteristics?.procesador?.text
              ?.toLowerCase()
              ?.includes(filters.selectedProcessor.toLowerCase()) ||
            product.title
              .toLowerCase()
              .includes(filters.selectedProcessor.toLowerCase())
        );
      }

      // Filtrar por almacenamiento
      if (filters.selectedStorage) {
        filtered = filtered.filter(
          (product) =>
            product.characteristics?.almacenamiento?.text
              ? product.characteristics?.almacenamiento?.text
                  .toLowerCase()
                  .includes(filters.selectedStorage.toLowerCase()) ||
                product.title
                  .toLowerCase()
                  .includes(filters.selectedStorage.toLowerCase())
              : true // Si no hay almacenamiento, no se filtra (se incluye)
        );
      }
      // Filtrar por almacenamiento
      if (filters.selectedRam) {
        filtered = filtered.filter(
          (product) =>
            product.characteristics?.ram?.text
              ? product.characteristics?.ram?.text
                  .toLowerCase()
                  .includes(filters.selectedRam.toLowerCase()) ||
                product.title
                  .toLowerCase()
                  .includes(filters.selectedRam.toLowerCase())
              : true // Si no hay almacenamiento, no se filtra (se incluye)
        );
      }

      // Filtrar por precio
      if (filters.priceMin || filters.priceMax) {
        filtered = filtered.filter(
          (product) =>
            product.price >= filters.priceMin &&
            product.price <= filters.priceMax
        );
      }

      //       // Filtrar por título
      if (filters.searchTitle) {
        const searchTerm = filters.searchTitle.toLowerCase();
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(searchTerm)
        );
      }

      setFilteredProducts(filtered); // Actualizamos los productos filtrados
    };

    filterProducts(); // Aplicar los filtros cada vez que los filtros cambian
  }, [filters, products]);

  // Paginación
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Actualiza la página en el contexto
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters); // Actualiza los filtros en el contexto
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="container flex flex-col gap-4 mx-auto">
      {props.children}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col lg:flex-row w-full gap-4">
            {/* Filtros */}
            <div className="lg:w-1/6 w-full ">
              <Filter onFilterChange={handleFilterChange} />
            </div>

            {/* Productos y Paginación */}
            <div className="lg:w-5/6 w-full flex flex-col gap-4 items-center">
              {/* Contador de Productos */}
              <div className="flex flex-col sm:flex-row   w-full justify-end items-center gap-4">
                <div className="indicator w-full sm:w-auto">
                  <span className="indicator-item indicator-top indicator-center badge badge-ghost badge-sm">
                    Ordenar por
                  </span>
                  <select
                    className="select select-bordered w-full sm:w-full"
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                  >
                    <option value="price_asc">Precio: Menor a Mayor</option>
                    <option value="price_desc">Precio: Mayor a Menor</option>
                    <option value="brand_asc">Marca: A-Z</option>
                    <option value="brand_desc">Marca: Z-A</option>
                    <option value="relevance">Relevancia</option>
                  </select>
                </div>
                <p className=" badge badge-primary self-center h-full">
                  {filteredProducts.length} Productos
                </p>
              </div>

              {/* Lista de Productos */}
              <ItemList products={currentProducts} />

              {/* Paginador */}
              <Paginator
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>

          {/* Indicador de Carga */}
          <span className="loading loading-dots loading-sm"></span>
        </>
      )}
    </div>
  );
}

export default ItemListContainer;
