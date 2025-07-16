import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Componentes
import Paginator from "../Paginator";
import ItemList from "../ItemList/ItemList";
import Filter from "../Filter";
import Loading from "@/modules/layout/Loading";
import toast from "react-hot-toast";
import { getProductsPaged } from "@/services/product";
import Skeleton from "@/modules/ui/Skeleton";

function ItemListContainer({ ...props }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(5);

  const [selectedSort, setSelectedSort] = useState("brand_asc");
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
  }); // Acceder al /api/products/FilterContext

  const fetchProducts = async ({ page, filters, limit }) => {
    const response = await getProductsPaged(page, limit, selectedSort, {
      brand: filters.selectedBrand,
      store: filters.selectedStoreName,
      priceMin: filters.priceMin,
      priceMax: filters.priceMax,
      search: filters.searchTitle,
    });
    if (response.status) {
      const { products, pagination } = response.data;
      setFilteredProducts([...products]);
      setTotalRows(pagination.totalPages);
      setLoading(false);
    } else {
      console.error("Error al obtener productos:", response.message);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchProducts({
      page: currentPage,
      limit: itemsPerPage,
      filters,
    });
  }, [filters, selectedSort]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Actualiza la página en el contexto
    setLoading(true);
    fetchProducts({
      page: pageNumber,
      limit: itemsPerPage,
      filters,
    });
  };

  return (
    <div className="container flex flex-col gap-4 mx-auto">
      {props.children}
      <>
        <div className="flex flex-col lg:flex-row w-full gap-4">
          {/* Filtros */}
          <div className="lg:w-1/6 w-full ">
            <Filter setFilters={setFilters} filters={filters} />
          </div>

          {/* Productos y Paginación */}
          <div className="w-full flex flex-col gap-4 items-center ">
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
            {loading && (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            )}
            {!loading && <ItemList products={filteredProducts} />}
            {/* Paginador */}
            {!loading && (
              <Paginator
                totalPages={totalRows}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>

        {/* Indicador de Carga */}
        <span className="loading loading-dots loading-sm"></span>
      </>
    </div>
  );
}

export default ItemListContainer;
