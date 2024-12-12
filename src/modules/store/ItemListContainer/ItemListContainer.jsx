import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Componentes
import Paginator from "../Paginator";
import ItemList from "../ItemList/ItemList";
import Filter from "../Filter";
import Loading from "@/modules/layout/Loading";

function ItemListContainer({ ...props }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Número de productos por página
  const [filters, setFilters] = useState({
    selectedBrand: "",
    selectedCategory: "",
    selectedStoreName: "",
    priceMin: 100,
    priceMax: 200,
  });
  const { categoryId } = useParams();
  const [hasRegistered, setHasRegistered] = useState(false);

  const getProduct = () => {
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}api/products`)
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
  }, []);

  // Filtrar productos según los filtros seleccionados
  useEffect(() => {
    const filterProducts = () => {
      console.log(filters);
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
        filtered = filtered.filter(
          (product) => product.store_name === filters.selectedStoreName
        );
      }
      if (filters.priceMin || filters.priceMax) {
        // Filtrar por precio
        filtered = filtered.filter(
          (product) =>
            product.price >= filters.priceMin &&
            product.price <= filters.priceMax
        );
      }

      // Filtrar por título
      if (filters.searchTitle) {
        const searchTerm = filters.searchTitle.toLowerCase();
        filtered = filtered.filter((product) =>
          product.title.toLowerCase().includes(searchTerm)
        );
      }

      setFilteredProducts(filtered); // Actualizamos los productos filtrados
    };

    filterProducts(); // Aplicar los filtros cada vez que los filtros cambian
  }, [filters, products]); // Los filtros o los productos deben cambiar para que se aplique el filtro

  // Paginación
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="container flex flex-col items-center gap-4 mx-auto">
      {props.children}
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col lg:flex-row   items-start sm:items-center w-full  px-4 sm:justify-between justify-start">
            <Filter onFilterChange={handleFilterChange} />
            <p className=" mb-8  ">Cantidad : {filteredProducts.length}</p>
          </div>
          <ItemList products={currentProducts} />
          <Paginator
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
          <span className="loading loading-dots loading-sm"></span>
        </>
      )}
    </div>
  );
}

export default ItemListContainer;
