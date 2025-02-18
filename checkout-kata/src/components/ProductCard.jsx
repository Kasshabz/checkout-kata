import QuantityButton from "./QuantityButton";
function ProductCard({ product, addToBasket }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">
        Price: £{(product.price / 100).toFixed(2)}
      </p>
      {product.offer && (
        <p className="text-green-500 text-sm">{product.offer}</p>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
        onClick={() => addToBasket(product)}>
        Add to Basket
      </button>
      <QuantityButton product={product} addToBasket={addToBasket} />
    </div>
  );
}
export default ProductCard;
