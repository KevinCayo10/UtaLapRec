import { useState } from "react";
import clsx from "clsx";

// Componentes
import ProductImage from "@/modules/item/ProductImage/ProductImage";

function ItemPreview({ id, name, images, ...props }) {
  const [isHovered, setIsHovered] = useState(false);
  const styleHover = `absolute inset-0 transition-opacity duration-300 ease-in-out ${
    isHovered ? "opacity-100" : "opacity-0"
  }`;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ProductImage
        src={images[0]}
        id={id}
        alt={name}
        className={"h-72 sm:h-64"}
      />
      <ProductImage
        src={images[1]}
        alt={name}
        className={clsx(styleHover, props.className)}
      />
    </div>
  );
}

export default ItemPreview;
