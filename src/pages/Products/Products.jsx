import React, { useState, useEffect } from "react";
import { getDataFromDB } from "@/helper/api.js";
import { AllProductsLayout } from "@/Layouts";
import { CartItem } from "@/components";
import "./Products.css";
const Products = () => {
  const [allProducts, setAllProduct] = useState([]);
  const [sort, setSort] = useState("default");
  useEffect(() => {
    getDataFromDB(194, 0, "price", sort)
      .then((resp) => resp)
      .then((data) => setAllProduct(data));
  }, [sort]);

  return (
    <AllProductsLayout header="Products" setSort={setSort}>
      {allProducts.map((product) => (
        <CartItem
          key={product.id}
          id={product.id}
          thumbnail={product.thumbnail}
          category={product.category}
          title={product.title}
          price={product.price}
          discountPercentage={product.discountPercentage}
        />
      ))}
    </AllProductsLayout>
  );
};

export default Products;
