import { useState } from "react";

function QuantityButton({ product, addToBasket }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToBasket = () => {
    addToBasket(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="flex items-center space-x-2 mt-2">
      <button
        className="bg-gray-300 px-2 py-1 rounded"
        onClick={handleDecrease}>
        -
      </button>
      <span className="px-3">{quantity}</span>
      <button
        className="bg-gray-300 px-2 py-1 rounded"
        onClick={handleIncrease}>
        +
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleAddToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default QuantityButton;
