import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSignleCategory } from "@/helper/api";
import { AllProductsLayout } from "@/Layouts";
import { CartItem } from "@/components";
import { IsDarkContext } from "@/Contexts/IsDarkProvider";
import "./Category.css";
const Category = () => {
  const { category_slug } = useParams();
  const { isDark } = useContext(IsDarkContext);
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    getSignleCategory(category_slug)
      .then((resp) => resp)
      .then((data) => setProductsList(data.products));
  }, []);
  return (
    <div
      className={isDark ? "category-filter-page dark" : "category-filter-page"}
    >
      <AllProductsLayout header={`Categories > ${category_slug}`}>
        {productsList.map((product) => (
          <CartItem
            id={product.id}
            thumbnail={product.thumbnail}
            category={product.category}
            title={product.title}
            price={product.price}
            discountPercentage={product.discountPercentage}
          />
        ))}
      </AllProductsLayout>
    </div>
  );
};

export default Category;
