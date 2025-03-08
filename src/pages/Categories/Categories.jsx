import React, { useContext, useEffect, useState } from "react";
import CategoryContainer from "./components/CategoryContainer";
import "./Categories.css";
import { getAllCategories } from "@/helper/api";
import { IsDarkContext } from "@/Contexts/IsDarkProvider";
const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const { isDark } = useContext(IsDarkContext);
  useEffect(() => {
    getAllCategories()
      .then((resp) => resp)
      .then((data) => setCategoriesList(data));
  }, []);
  return (
    <div className={isDark ? "category-page dark" : "category-page"}>
      <p className="title">Categories</p>
      <div className="categories-list">
        {categoriesList.map((category) => (
          <CategoryContainer
            key={category.slug}
            title={category.name}
            slug={category.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
