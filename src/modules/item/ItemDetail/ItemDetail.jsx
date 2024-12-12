import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import clsx from "clsx";

// Components
import ProductTags from "../ProductTags";
import ProductInfo from "../ProductInfo";
import ProductImage from "../ProductImage";
import ItemCount from "../ItemCount";
import ProductDescription from "../ProductDescription";
import ProductSpecs from "../ProductSpecs";
import { useEffect } from "react";
import toast from "react-hot-toast";
import ItemCard from "@/modules/store/ItemCard";
import Loading from "@/modules/layout/Loading";

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
    store_name,
    link,
  } = { ...props };
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addItemToCart } = useContext(CartContext);
  const initialCount = 1;

  const handleOnAdd = (quantity) => {
    const item = { id, title, price, quantity };
    addItemToCart(item, stock);
  };

  const [isHovered, setIsHovered] = useState(false);
  const styleHover = `absolute inset-0 transition-opacity duration-300 ease-in-out ${
    isHovered ? "opacity-100" : "opacity-0"
  }`;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const getProductRecommender = () => {
    fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}api/recommender-content/${id}`
    )
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
    getProductRecommender();
  }, []);

  return (
    <article className="container flex flex-col gap-6">
      {/* Product header */}
      <header className="flex flex-col-reverse justify-between gap-6 mx-4 sm:flex-row-reverse">
        <div className="flex flex-col items-center gap-4 text-xl sm:items-start sm:basis-1/2 w-full">
          <ProductTags {...{ brand, category, link, store_name }} />
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

        <div
          className="relative flex justify-center items-center sm:basis-1/2 w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ProductImage
            id={id}
            src={urlImg[0]}
            alt={title}
            className="flex items-center justify-center w-full h-auto  "
          />
          {urlImg[1] && (
            <ProductImage
              src={urlImg[1]}
              alt={title}
              className={clsx(styleHover, props.className)}
            />
          )}
        </div>
      </header>

      {/* Product Detail */}
      <main className="flex flex-col items-center gap-10 mx-4 card bg-base-100 ">
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
      <section className="">
        <h2 className="text-2xl card-title my-4 text-primary">
          Recomendado para ti
        </h2>
        {loading ? (
          <div className="flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          <div className="grid justify-center  grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {products.map((product) => {
              return (
                <ItemCard
                  key={product.id}
                  {...product}
                  className="border border-blue-200"
                />
              );
            })}
          </div>
        )}
      </section>
    </article>
  );
}

export default ItemDetail;
