import React from "react";
import Paginator from "../Paginator";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import Loading from "@/modules/layout/Loading";

function RecommenderContainer({ ...props }) {
  const [productsIds, setProductsIds] = useState([]);
  const [productRecommender, setProductsRecommender] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de productos por página

  const getProductWishes = () => {
    console.log("GET PRODUCT");
    const products_wish =
      JSON.parse(localStorage.getItem("tuportatil-cart")) || [];
    console.log("PRODUCT WISHES : ", products_wish);
    if (products_wish) {
      const products_ids = products_wish.map((product) => product.id);
      setProductsIds(products_ids);
      console.log("PRODUCTS ID: " + products_ids);
    }
  };

  const fethProductRecommender = () => {
    console.log("FETCH PRODUCT ", productsIds);

    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}api/recommender`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_ids: productsIds }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        setProductsRecommender(data.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProductWishes();
  }, []); // Esto solo se ejecuta una vez al inicio

  useEffect(() => {
    if (productsIds.length > 0) {
      fethProductRecommender();
    }
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
      {props.children}
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

export default RecommenderContainer;
