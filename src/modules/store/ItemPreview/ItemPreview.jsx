import { useState } from "react";
import clsx from "clsx";

// Componentes
import ProductImage from "@/modules/item/ProductImage/ProductImage";
import { useEffect } from "react";

function ItemPreview({ id, name, images, store_name, ...props }) {
  const [isHovered, setIsHovered] = useState(false);
  const styleHover = `absolute inset-0 transition-opacity duration-300 ease-in-out ${
    isHovered ? "opacity-100" : "opacity-0"
  }`;
  const [base64, setBase64] = useState("");
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const getBase64 = () => {
    console.log("ENTRO");
    fetch(`https://api.allorigins.win/get?url=${images[0]}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status.http_code === 200) {
          setBase64(data.contents); // Mostrar contenido solo si el estado es 200
        } else {
          console.warn("La solicitud no fue exitosa:", data.status);
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  useEffect(() => {
    if (["Tekboss"].includes(store_name)) {
      getBase64();
    }
  }, [id]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ProductImage
        src={base64 || images[0]}
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
