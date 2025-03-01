import React from "react";
import { Routes, Route } from "react-router-dom";
import{ MainLayout} from "@/Layouts";
import { Home, Categories, Category, Product, Products } from "@/pages";

const MyRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:product_id" element={<Product />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:category_slug" element={<Category />} />
      </Route>
    </Routes>
  );
};

export default MyRouters;
