import clsx from "clsx";

function ProductImage({ id, src, alt, ...props }) {
  // const imagePath = `${PUBLIC_IMG_PATH.productImages}/${id}-${src}`

  return (
    <figure
      className={clsx("w-full   overflow-hidden rounded-xl", props.className)}
    >
      <img
        className="  object-cover rounded-xl "
        src={src}
        alt={alt}
        title={alt}
      />
    </figure>
  );
}

export default ProductImage;
