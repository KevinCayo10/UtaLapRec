import { useState, useEffect } from "react";
import { getProductById } from "@/mocks/asyncMock";
import { useParams } from "react-router-dom";

// Componentes
import ItemDetail from "../ItemDetail";
import Loading from "@/modules/layout/Loading";
import toast from "react-hot-toast";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [hasRegistered, setHasRegistered] = useState(false);

  const { productId } = useParams();

  const getProductDetail = () => {
    console.log("ENTRO A GET PRODUCT");
    setLoading(true);
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}api/products/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        console.log("DATA detail : ", data.data);
        setProduct(data.data);
        setLoading(false);
        registerInteractionView();
      });
  };

  const registerInteractionView = () => {
    console.log("HELLO REGISTER");
    const user_id = localStorage.getItem("user_id");
    const payload = {
      user_id: user_id,
      product_id: productId,
      interaction_type: "view",
    };
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}api/history`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProductDetail();
  }, [productId]);

  return (
    <>
      <div className="flex flex-col items-center w-full gap-4">
        {loading ? <Loading /> : <ItemDetail {...product} />}
      </div>
      {/* TODO: Ver por qué no renderiza el Footer que está en App.jsx cuando está en la página de producto */}
    </>
  );
}

export default ItemDetailContainer;
