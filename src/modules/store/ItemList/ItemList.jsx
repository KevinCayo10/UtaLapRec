import ItemCard from "../ItemCard";

function ItemList({ products }) {
  return (
    <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   ">
      {products.map((product) => {
        return <ItemCard key={product.id} {...product} />;
      })}
    </div>
  );
}

export default ItemList;
