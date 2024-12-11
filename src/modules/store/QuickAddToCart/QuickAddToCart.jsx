import clsx from "clsx";
import ShoppingBagIcon from "@/modules/ui/Icons/ShoppingBagIcon";
import Tooltip from "@/modules/ui/Tooltip";
import HeartIcon from "@/modules/ui/Icons/HeartIcon";
import WishIcon from "@/modules/ui/Icons/WishIcon";

function QuickAddToCart({ inWishList, ...props }) {
  return (
    <Tooltip
      className={clsx("tooltip-primary", inWishList && "tooltip-secondary")}
      text={
        inWishList ? "Ya en lista de favoritos" : "Agregar a lista de favoritos"
      }
    >
      <button
        tabIndex={0}
        className={clsx(
          "btn rounded-full hover:bg-slate-100 ",
          props.className,
          inWishList && "btn-disabled"
        )}
        {...props}
        disabled={inWishList}
      >
        {inWishList ? (
          <WishIcon className="text-yellow-500" />
        ) : (
          <HeartIcon className="text-yellow-500 " />
        )}
      </button>
    </Tooltip>
  );
}

export default QuickAddToCart;
