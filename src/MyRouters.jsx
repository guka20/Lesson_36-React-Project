import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "@/Layouts";
import { Home, Categories, Category, Product, Products } from "@/pages";
import Profile from "./pages/Profile/Profile";
import { IsAuthContext } from "./Contexts/IsAuth";

const MyRouters = () => {
  const { isAuth } = useContext(IsAuthContext);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:product_id" element={<Product />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:category_slug" element={<Category />} />
        <Route
          path="/user/profile"
          element={isAuth ? <Profile /> : <Navigate to="/" />}
        />
      </Route>
    </Routes>
  );
};

export default MyRouters;
