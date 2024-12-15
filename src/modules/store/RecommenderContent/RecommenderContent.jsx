import React from "react";
import ItemList from "../ItemList";
import Paginator from "../Paginator";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "@/modules/layout/Loading";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { Link } from "react-router-dom";

function RecommenderContent({ onDataLengthChange }) {
  const [productsIds, setProductsIds] = useState([]);
  const [productRecommender, setProductsRecommender] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de productos por página
  const { addItemToCart } = useContext(CartContext);
  const [noRecommendations, setNoRecommendations] = useState(false); // Nuevo estado

  const fethProductRecommenderContent = () => {
    const products_wish =
      JSON.parse(localStorage.getItem("tuportatil-cart")) || [];
    if (!products_wish) {
      return;
    }
    const products_ids = products_wish.map((product) => product.id);
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}api/recommender-content`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_ids: products_ids }),
    })
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
          onDataLengthChange(data.data.length || 0);
        } else {
          setNoRecommendations(true); // No hay recomendaciones
          setLoading(false);
        }
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fethProductRecommenderContent();
  }, []); // Esto solo se ejecuta una vez al inicio

  // useEffect(() => {
  //   fethProductRecommenderContent();
  // }, [productsIds]);
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
      ) : noRecommendations ? (
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

export default RecommenderContent;
