import React from "react";
import AddToBasketButton from "./AddToBasketButton";
function ProductCard({ product, addToBasket }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
      <p className="text-gray-600">
        Price: £{(product.price / 100).toFixed(2)}
      </p>
      {product.offer && (
        <p className="text-green-500 text-sm">{product.offer}</p>
      )}
      <AddToBasketButton product={product} addToBasket={addToBasket} />
    </div>
  );
}

export default ProductCard;
