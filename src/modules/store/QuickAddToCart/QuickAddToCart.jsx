import clsx from "clsx";
import ShoppingBagIcon from "@/modules/ui/Icons/ShoppingBagIcon";
import Tooltip from "@/modules/ui/Tooltip";
import HeartIcon from "@/modules/ui/Icons/HeartIcon";
import WishIcon from "@/modules/ui/Icons/WishIcon";

function QuickAddToCart({ inWishList, ...props }) {
  return (
    <Tooltip
      className={clsx("tooltip-primary", inWishList && "tooltip-secondary")}
      text={inWishList ? "Ya en lista de deseos" : "Agregar a lista de deseo"}
    >
      <button
        tabIndex={0}
        className={clsx("btn", props.className, inWishList && "btn-disabled")}
        {...props}
        disabled={inWishList}
      >
        {inWishList ? (
          <WishIcon className="text-red-500" />
        ) : (
          <HeartIcon className="text-red-500 " />
        )}
      </button>
    </Tooltip>
  );
}

export default QuickAddToCart;
