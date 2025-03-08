import React, { useContext } from "react";
import "./AllProductsLayout.css";
import { IsDarkContext } from "@/Contexts/IsDarkProvider";
const AllProductsLayout = ({ children, header, setSort }) => {
  const { isDark } = useContext(IsDarkContext);
  return (
    <div
      className={isDark ? "all-products-layout dark" : "all-products-layout"}
    >
      <div className="header-place">
        <span className="title">{header}</span>
        <select
          className="sorting-select"
          onChange={(e) => setSort(e.target.value)}
        >
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
