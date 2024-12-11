import clsx from "clsx";
import { useState } from "react";

function ProductImage({ id, src, alt, ...props }) {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <figure
      className={clsx(
        "w-full h-full overflow-hidden rounded-xl",
        props.className
      )}
    >
      {hasError ? (
        // Mostrar el ícono SVG en caso de error
        <div className="w-full h-full flex justify-center items-center bg-gray-100 rounded-xl   object-cover ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path d="M6.5 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14.427 1.99c-6.61-.908-12.31 4-11.927 10.51" />
              <path d="M3 13.066c2.78-.385 5.275.958 6.624 3.1" />
              <path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z" />
            </g>
          </svg>
        </div>
      ) : (
        // Mostrar la imagen si no hay error
        <img
          className="object-cover rounded-xl"
          src={src}
          alt={alt}
          title={alt}
          onError={handleError} // Capturar el error de carga
        />
      )}
    </figure>
  );
}

export default ProductImage;
