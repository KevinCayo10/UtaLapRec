import clsx from "clsx";

function ProductImage({ id, src, alt, ...props }) {
  // const imagePath = `${PUBLIC_IMG_PATH.productImages}/${id}-${src}`

  return (
    <figure className={clsx("w-full", props.className)}>
      <img className="w-3/4 rounded-xl" src={src} alt={alt} title={alt} />
    </figure>
  );
}

export default ProductImage;
