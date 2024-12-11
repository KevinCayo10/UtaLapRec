function ProductDescription({ name, description }) {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2 className="text-2xl card-title">{name}</h2>
      {description && description.length > 0 && (
        <p
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </section>
  );
}

export default ProductDescription;
