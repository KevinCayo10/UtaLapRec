import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "@/mocks/asyncMock";
import { useParams } from "react-router-dom";

// Componentes
import ItemList from "@/modules/store/ItemList";
import Paginator from "../Paginator";

function ItemListContainer({ ...props }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de productos por página

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
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
  }, []);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="container flex flex-col items-center gap-4 mx-auto">
      {props.children}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <ItemList products={currentProducts} />
          <Paginator
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default ItemListContainer;

//
