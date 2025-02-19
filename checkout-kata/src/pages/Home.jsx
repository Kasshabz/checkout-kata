import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "A",
    name: "Item A",
    price: 50,
    offer: "3 for £1.30",
    image: "images/A.jpg",
  },
  {
    id: "B",
    name: "Item B",
    price: 30,
    offer: "2 for 45p",
    image: "images/B.jpg",
  },
  { id: "C", name: "Item C", price: 20, image: "images/C.jpg" },
  { id: "D", name: "Item D", price: 115, image: "images/D.jpg" },
];

function Home() {
  const [basket, setBasket] = useState([]);
  const navigate = useNavigate();

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center text-blue-800 border-b-4 border-blue-500 inline-block mx-auto mb-6">
        Checkout Kata
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToBasket={addToBasket}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
        <p className="text-lg font-semibold text-gray-700">
          Items in Basket: {basket.length}
        </p>
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-200"
          onClick={() => navigate("/checkout", { state: { basket } })}>
          Go to Checkout
        </button>
      </div>
    </div>
  );
}

export default Home;
