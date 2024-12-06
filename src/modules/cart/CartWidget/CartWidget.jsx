import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { Link } from "react-router-dom";

import { pluralize } from "../../../utils/textUtils";
import clsx from "clsx";
import toast from "react-hot-toast";

// Componentes
import Price from "@/modules/item/Price";
import IconButton from "@/modules/ui/IconButton";
import CrossIcon from "@/modules/ui/Icons/CrossIcon";
import Badge from "@/modules/ui/Badge/Badge";
import CartIcon from "@/modules/ui/Icons/CartIcon";

// Mock cart
import useCartMock from "@/mocks/useCartMock";
import { LOAD_CART_MOCK } from "@/utils/globalConstants";
import { useState, useEffect } from "react";
import ProductImage from "@/modules/item/ProductImage";
import WishIcon from "@/modules/ui/Icons/WishIcon";

function CartWidget({ ...props }) {
  const { cartQuantity, cartTotalAmount, clearCart } = useContext(CartContext);
  const quantity = cartQuantity();
  const [productCart, setProductCart] = useState([]);
  // Mock cart
  useCartMock(LOAD_CART_MOCK);

  useEffect(() => {
    const getCartItems = () => {
      const storedCart = localStorage.getItem("tuportatil-cart");
      if (storedCart) {
        try {
          return JSON.parse(storedCart);
        } catch (error) {
          return [];
        }
      }
      return [];
    };
    setProductCart(getCartItems());
    console.log("PRODUCT : " + productCart);
  }, [quantity]);

  return (
    <div className={clsx("dropdown dropdown-end", props.className)}>
      {/* Badge */}
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <WishIcon className="text-red-500" />
          {quantity > 0 && <Badge>{quantity}</Badge>}
        </div>
      </label>

      {/* Cart badge menu */}
      <div
        tabIndex={0}
        className="mt-3 shadow card card-compact dropdown-content w-60 bg-base-100"
      >
        <div className="text-center card-body">
          {quantity === 0 ? (
            <span className="text-lg font-bold text-gray-600">
              Lista de deseo vacío
            </span>
          ) : (
            <>
              {/* <span className="text-lg font-bold">
                {pluralize(quantity, "artículo")}
              </span>
              <Price
                className="text-lg text-info"
                price={cartTotalAmount()}
                currency="ARS"
              /> */}
              {productCart.map((item, index) => {
                return (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg"
                  >
                    <ProductImage
                      src={item.urlImg[0]}
                      id={item.id}
                      alt={item.title}
                      className={"h-10"}
                    />

                    <div className="flex flex-col ">
                      <h3 className="font-normal text-sm text-start truncate w-32 text-gray-600">
                        {item.title.slice(0, 20)}
                      </h3>
                      <span className="text-gray-500 text-start">
                        {item.price}
                      </span>
                    </div>
                  </div>
                );
              })}

              <div className="card-actions">
                <IconButton
                  className="w-full mt-0 btn-error btn-outline"
                  icon={<CrossIcon />}
                  onClick={() => {
                    clearCart();
                    toast.success(<p>Lista de deseo eliminado.</p>);
                  }}
                >
                  Limpiar carrito
                </IconButton>
                {/* <IconButton
                  className="btn-primary btn-sm sm:btn-md btn-block"
                  icon={<CartIcon />}
                >
                  <Link to="/cart">Ver carrito</Link>
                </IconButton> */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartWidget;
