import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

// Components
import ProductTags from "../ProductTags";
import ProductInfo from "../ProductInfo";
import ProductImage from "../ProductImage";
import ItemCount from "../ItemCount";
import ProductDescription from "../ProductDescription";
import ProductSpecs from "../ProductSpecs";

function ItemDetail({ ...props }) {
  const {
    id,
    title,
    category,
    brand,
    stock,
    price,
    availability,
    urlImg,
    description,
    characteristics,
  } = { ...props };

  const { addItemToCart } = useContext(CartContext);
  const initialCount = 1;

  const handleOnAdd = (quantity) => {
    const item = { id, title, price, quantity };
    addItemToCart(item, stock);
  };

  return (
    <article className="container flex flex-col gap-6">
      {/* Product header */}
      <header className="flex flex-col-reverse justify-between gap-6 mx-4 sm:flex-row-reverse">
        <div className="flex flex-col items-center gap-4 text-xl sm:items-start basis-3/5">
          <ProductTags {...{ brand, category }} />
          <ProductInfo {...{ title, price, stock }} />
          <div className="flex flex-col items-center w-full pt-0 sm:pt-10 sm:items-start">
            {/* TODO: Agregar al carrito */}
            {availability && stock > 0 ? (
              <ItemCount
                initial={initialCount}
                stock={stock}
                onAdd={handleOnAdd}
              />
            ) : (
              <p className="text-2xl font-bold text-center text-gray-500">
                Producto no disponible
              </p>
            )}
          </div>
        </div>
        <ProductImage
          id={id}
          src={urlImg[0]}
          alt={title}
          className="flex  items-center justify-center  h-full"
        />
      </header>

      {/* Product Detail */}
      <main className="flex flex-col items-center gap-10 mx-4 card bg-base-100">
        {/* {banner && banner.length > 0 && (
          <ProductImage
            id={id}
            src={banner}
            alt={`Banner del producto ${name}`}
          />
        )} */}
        <ProductDescription {...{ title, description }} />
        {characteristics && <ProductSpecs features={characteristics} />}
      </main>
    </article>
  );
}

export default ItemDetail;
