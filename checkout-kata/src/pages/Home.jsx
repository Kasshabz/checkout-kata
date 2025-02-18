import ProductCard from "../components/ProductCard";
import { useState } from "react";

const products = [
  { id: "A", name: "Item A", price: 50, offer: "3 for £1.30", image: "/A.jpg" },
  { id: "B", name: "Item B", price: 30, offer: "2 for 45p", image: "/B.jpg" },
  { id: "C", name: "Item C", price: 20, image: "/C.jpg" },
  { id: "D", name: "Item D", price: 115, image: "/D.jpg" },
];

function Home() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product, quantity) => {
    const newItems = Array(quantity).fill(product);
    setBasket([...basket, ...newItems]);
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout Kata</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToBasket={addToBasket}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
