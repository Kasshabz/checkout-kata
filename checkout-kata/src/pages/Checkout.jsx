import React from "react";
import { useLocation } from "react-router-dom";

const pricingRules = {
  A: { price: 50, special: { quantity: 3, price: 130 } },
  B: { price: 30, special: { quantity: 2, price: 45 } },
  C: { price: 20 },
  D: { price: 115 },
};

function Checkout() {
  const location = useLocation();
  const basket = location.state?.basket || [];

  const itemCounts = basket.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {});

  const calculateTotal = () => {
    let total = 0;

    for (const id in itemCounts) {
      const count = itemCounts[id];
      const item = pricingRules[id];

      if (item.special && count >= item.special.quantity) {
        const specialBundles = Math.floor(count / item.special.quantity);
        const remaining = count % item.special.quantity;
        total += specialBundles * item.special.price + remaining * item.price;
      } else {
        total += count * item.price;
      }
    }

    return total / 100;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">
        Checkout
      </h1>
      {basket.length === 0 ? (
        <p className="text-gray-500 text-center">Your basket is empty.</p>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Order Summary
          </h2>
          <ul className="divide-y divide-gray-200 mb-6">
            {Object.entries(itemCounts).map(([id, quantity]) => (
              <li
                key={id}
                className="flex justify-between items-center py-4 hover:bg-gray-50 transition duration-200">
                <span className="text-lg font-medium text-gray-700">
                  {id} x {quantity}
                </span>
                <span className="text-gray-600">
                  £{((quantity * pricingRules[id].price) / 100).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="text-xl font-semibold text-right border-t pt-4">
            Total:{" "}
            <span className="text-green-600">
              £{calculateTotal().toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
