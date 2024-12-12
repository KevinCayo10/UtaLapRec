import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Balancer from "react-wrap-balancer";
import clsx from "clsx";
import { CartContext } from "@/context/CartContext";

// Componentes
import TextWithLineBreaks from "../../item/TextWithLineBreaks";
import Price from "../../item/Price";
import ItemPreview from "../ItemPreview";
import QuickAddToCart from "@/modules/store/QuickAddToCart/";
import toast from "react-hot-toast";

function ItemCard({ ...props }) {
  const [isInWishList, setIsInWishList] = useState(false);
  const [errorOcurred, setErrorOcurred] = useState(false);
  const {
    id,
    title,
    category,
    price,
    description,
    urlImg,
    stock,
    availability,
    store_name,
    link,
  } = props;
  const { addItemToCart } = useContext(CartContext);
  const styles = clsx(
    props.className,
    `mx-4 sm:mx-0 border border-1 border-border card bg-background relative p-1 rounded-2xl
                       relative group`
  );

  useEffect(() => {
    const wishList = JSON.parse(localStorage.getItem("tuportatil-cart")) || []; // Si no existe, inicializa como array vacío
    const exists = wishList.some((item) => item.id === id);
    setIsInWishList(exists); // Si existe, se establece en true; de lo contrario, en false
  }, [addItemToCart]);

  const addToWishList = () => {
    setIsInWishList(true);
    registerInteractionFav();
  };

  const registerInteractionFav = () => {
    const user_id = localStorage.getItem("user_id");
    const payload = {
      user_id: user_id,
      product_id: id,
      interaction_type: "favorite",
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

  const handleChildClick = (event) => {
    event.stopPropagation(); // Evita que el clic en el botón active el Link
    event.preventDefault(); // Evita la acción de redirección
  };

  const handleImageError = () => {
    setErrorOcurred(true);
  };

  return (
    <article className={styles}>
      <Link to={`/${id}`} className="relative">
        <div className="flex items-center justify-between">
          <QuickAddToCart
            className=" p-1 "
            inWishList={isInWishList}
            onClick={(event) => {
              // Detiene la propagación del clic para evitar la redirección
              handleChildClick(event);
              addItemToCart({ id, title, urlImg, price, quantity: 1 }, stock);
              addToWishList();
            }}
          />
          <div className=" flex gap-1">
            <p className=" text-xs font-bold uppercase text-background badge badge-foreground top-2 right-1/4 ">
              {store_name.substring(0, 15)}
            </p>
            <p className=" text-xs font-bold uppercase text-background badge badge-primary top-2 right-2">
              {category}
            </p>
          </div>
        </div>
        <div
          className="absolute z-10 hidden group-hover:block top-56 left-4"
          onClick={handleChildClick}
        >
          {stock > 0 && availability ? (
            <p className="z-40 text-xs font-bold uppercase badge">Disponible</p>
          ) : (
            <p className="z-40 text-xs font-bold uppercase badge">Sin stock</p>
          )}
        </div>
        {/* Aquí colocamos el QuickAddToCart con un z-index alto */}

        <div className="p-2 pt-0 card-body ">
          <ItemPreview
            id={id}
            images={urlImg}
            alt={title}
            handleCaptureError={handleImageError}
          />
          <h3>
            <Balancer ratio={0.5}>
              <TextWithLineBreaks onlyBreakFirstLine styled>
                {title.replace(/[\n\t]/g, "")}
              </TextWithLineBreaks>
            </Balancer>
          </h3>
          <Price
            className="text-xl text-green-500 sm:text-base"
            price={price}
            currency={price}
          />
        </div>
      </Link>
    </article>
  );
}

export default ItemCard;
