import { useState, useEffect } from "react";
import { getProductById } from "@/mocks/asyncMock";
import { useParams } from "react-router-dom";

// Componentes
import ItemDetail from "../ItemDetail";
import Loading from "@/modules/layout/Loading";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/products/${productId}`)
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
      });
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
