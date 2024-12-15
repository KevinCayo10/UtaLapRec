import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import Paginator from "../Paginator";
import Loading from "@/modules/layout/Loading";
import { Link } from "react-router-dom";

function RecommenderUser({ onDataLengthChange }) {
  const [productsIds, setProductsIds] = useState([]);
  const [productRecommender, setProductsRecommender] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noRecommendations, setNoRecommendations] = useState(false); // Nuevo estado
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de productos por página

  const fethProductRecommenderUser = () => {
    const user_id = localStorage.getItem("user_id");
    fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}api/recommender-user/${user_id}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.data.length > 0) {
          setProductsRecommender(data.data);
          setNoRecommendations(false); // Hay recomendaciones
          setLoading(false);
          onDataLengthChange(data.data.length);
        } else {
          setNoRecommendations(true); // No hay recomendaciones
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fethProductRecommenderUser();
    // fethProductRecommenderContent();
  }, [productsIds]);

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productRecommender.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(productRecommender.length / itemsPerPage);

  return (
    <div className="container flex flex-col items-center gap-4 mx-auto">
      {loading ? (
        <Loading />
      ) : noRecommendations ? ( // Si no hay recomendaciones, mostrar el mensaje
        <div className="text-center text-gray-600">
          <p className="text-lg mb-4">
            Selecciona primero el producto que más te guste{" "}
            <Link
              to="/store"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Ir a la tienda
            </Link>
          </p>
        </div>
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

export default RecommenderUser;
