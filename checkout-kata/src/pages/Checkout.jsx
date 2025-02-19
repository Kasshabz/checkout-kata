import React from "react";
import { useLocation } from "react-router-dom";

const pricingRules = {
  A: { price: 50, special: { quantity: 3, price: 130 } }, // 3 for £1.30
  B: { price: 30, special: { quantity: 2, price: 45 } }, // 2 for 45p
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
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
        Checkout
      </h1>
      {basket.length === 0 ? (
        <p className="text-gray-500 text-center">Your basket is empty.</p>
      ) : (
        <>
          <ul className="mb-6 border rounded-lg p-4 shadow-md bg-gray-100">
            {Object.entries(itemCounts).map(([id, quantity]) => (
              <li
                key={id}
                className="text-lg flex justify-between items-center py-2 border-b last:border-b-0">
                <span className="font-semibold text-gray-700">
                  {id} x {quantity}
                </span>
                <span className="text-gray-600">
                  £{((quantity * pricingRules[id].price) / 100).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="text-xl font-semibold text-right">
            Total:{" "}
            <span className="text-green-600">
              £{calculateTotal().toFixed(2)}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default Checkout;
