import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../helper/api";
import "./Product.css";
const Product = () => {
  const { product_id } = useParams();
  const [productData, setProductData] = useState({
    images: [],
  });
  useEffect(() => {
    getSingleProduct(product_id)
      .then((resp) => resp)
      .then((data) => setProductData(data));
  }, []);
  return (
    <div className="product-page">
      <img src={productData.thumbnail} />
      <div className="image-list">
        {productData.images.map((el) => (
          <img src={el} width={50} />
        ))}
      </div>

      <br />
      <b>{productData.title}</b>
      <p>{productData.description}</p>
    </div>
  );
};

export default Product;
