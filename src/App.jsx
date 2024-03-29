import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product";
import FAQ from "./pages/FAQ/FAQ";
import Stock from "./pages/Stock/Stock";
import Profile from "./pages/Profile/Profile";
import Order from "./pages/Order/Order";
import PromotionProducts from "./pages/PromotionProducts/PromotionProducts";
import Favorite from "./pages/Favorite/Favorite";
import Blog from "./pages/Blog/Blog";
import Article from "./pages/Article/Article";


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
        <Route path="stock" element={<Stock />} />
        <Route path="profile" element={<Profile />} />
        <Route path="order" element={<Order />} />
        <Route path="catalog/:id" element={<Catalog />} />
        <Route path="promotion/products/:id" element={<PromotionProducts />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/article/:id" element={<Article/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
