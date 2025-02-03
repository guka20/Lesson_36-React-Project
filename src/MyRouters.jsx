import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
const MyRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:product_id" element={<Product />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
    </Routes>
  );
};

export default MyRouters;
