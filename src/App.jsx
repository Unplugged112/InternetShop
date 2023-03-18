import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import FAQ from "./pages/FAQ/FAQ";
import Basket from "./pages/Basket/Basket";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="question" element={<FAQ />} />
        <Route path="basket" element={<Basket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
