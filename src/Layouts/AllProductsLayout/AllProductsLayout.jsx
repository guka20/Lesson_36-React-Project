import React from "react";
import "./AllProductsLayout.css";
const AllProductsLayout = ({ children, header, setSort }) => {
  return (
    <div className="all-products-layout">
      <div className="header-place">
        <span className="title">{header}</span>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="default">Default</option>
          <option value="asc">Price (low to high)</option>
          <option value="desc">Price (high to low)</option>
        </select>
      </div>
      <div className="products-list">{children}</div>
    </div>
  );
};

export default AllProductsLayout;
