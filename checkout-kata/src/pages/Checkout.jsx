import React from "react";

function Checkout({ basket }) {
  const calculateTotal = () => {
    let total = 0;
    let itemCounts = {};

    basket.forEach((item) => {
      itemCounts[item.id] = (itemCounts[item.id] || 0) + 1;
    });

    const pricingRules = {
      A: { price: 50, special: { quantity: 3, price: 130 } }, // 3 for £1.30
      B: { price: 30, special: { quantity: 2, price: 45 } }, // 2 for 45p
      C: { price: 20 },
      D: { price: 115 },
    };

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
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      {basket.length === 0 ? (
        <p className="text-gray-500">Your basket is empty.</p>
      ) : (
        <>
          <ul className="mb-4">
            {Object.entries(
              basket.reduce((acc, item) => {
                acc[item.id] = (acc[item.id] || 0) + 1;
                return acc;
              }, {})
            ).map(([id, quantity]) => (
              <li key={id} className="text-lg">
                {id} x {quantity}
              </li>
            ))}
          </ul>
          <p className="text-xl font-semibold">
            Total: £{calculateTotal().toFixed(2)}
          </p>
        </>
      )}
    </div>
  );
}

export default Checkout;
