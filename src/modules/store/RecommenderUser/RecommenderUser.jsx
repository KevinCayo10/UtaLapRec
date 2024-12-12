import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList";
import Paginator from "../Paginator";
import Loading from "@/modules/layout/Loading";

function RecommenderUser() {
  const [productsIds, setProductsIds] = useState([]);
  const [productRecommender, setProductsRecommender] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de productos por página

  const fethProductRecommenderUser = () => {
    const user_id = localStorage.getItem("user_id");
    if (user_id) {
      try {
        const parsedUserId = JSON.parse(user_id); // Solo intenta parsear si el valor es un JSON válido
      } catch (error) {
        console.error("Error parsing user_id from localStorage", error);
      }
    }
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
        setProductsRecommender(data.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
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
      {/* {props.children} */}
      {loading ? (
        <Loading />
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
