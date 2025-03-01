import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSignleCategory } from "@/helper/api";
import { AllProductsLayout } from "@/Layouts";
import { CartItem } from "@/components";
const adressStyle = {
  marginTop: "20px",
  fontSize: "20px",
  marginLeft: "20px",
};
const Category = () => {
  const { category_slug } = useParams();
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    getSignleCategory(category_slug)
      .then((resp) => resp)
      .then((data) => setProductsList(data.products));
  }, []);
  return (
    <div>
      <p style={adressStyle}>
        Categories {">"} <b>{category_slug}</b>
      </p>
      <AllProductsLayout>
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
