import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSignleCategory } from "../../helper/api";

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
      {productsList.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <img src={product.thumbnail} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Category;
