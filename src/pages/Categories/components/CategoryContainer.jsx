import React from "react";
import "./CategoryContainer.css";
import { Link } from "react-router-dom";
const CategoryContainer = ({ title, slug }) => {
  return (
    <div className="category-container">
      <p className="title">{title}</p>
      <Link to={`/category/${slug}`} className="link">
        View Products
      </Link>
    </div>
  );
};

export default CategoryContainer;
