import React from "react";
import "./ProductsLayout.css";
const ProductsLayout = ({ children, title }) => {
  return (
    <div className="products-layout">
      <p className="title">{title}</p>
      <div className="products-list">{children}</div>
    </div>
  );
};

export default ProductsLayout;
