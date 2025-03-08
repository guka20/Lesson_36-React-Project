import React, { useContext } from "react";
import "./CategoryContainer.css";
import { Link } from "react-router-dom";
import { IsDarkContext } from "@/Contexts/IsDarkProvider";
const CategoryContainer = ({ title, slug }) => {
  const { isDark } = useContext(IsDarkContext);
  return (
    <div className={isDark ? "category-container dark" : "category-container"}>
      <p className="title">{title}</p>
      <Link to={`/category/${slug}`} className="link">
        View Products
      </Link>
    </div>
  );
};

export default CategoryContainer;
