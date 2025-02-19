import React from "react";

function AddToBasketButton({ product, addToBasket }) {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600 transition duration-200"
      onClick={() => addToBasket(product)}>
      Add to Basket
    </button>
  );
}

export default AddToBasketButton;
