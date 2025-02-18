import { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";

function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product, quantity) => {
    const newItems = Array(quantity).fill(product);
    setBasket([...basket, ...newItems]);
  };

  return (
    <Router>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home addToBasket={addToBasket} />} />
          <Route path="/checkout" element={<Checkout basket={basket} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
