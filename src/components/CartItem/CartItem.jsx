import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import "./CartItem.css";
import { Link } from "react-router-dom";
import { IsDarkContext } from "@/Contexts/IsDarkProvider";

const CartItem = ({
  id,
  thumbnail,
  category,
  title,
  price,
  discountPercentage,
}) => {
  const { isDark } = useContext(IsDarkContext);
  let newPrice = price - (price * discountPercentage) / 100;
  newPrice = newPrice.toFixed(2);
  return (
    <div className={isDark ? "cart-item dark" : "cart-item"}>
      <div className="image-place">
        <img src={thumbnail} />
      </div>
      <div className="textures">
        <p className="category">{category}</p>
        <Link to={`/product/${id}`} className="title">
          {title}
        </Link>
        <div className="cart-and-price">
          <div>
            <p className="new-price">${newPrice}</p>
            <div className="price-precentage">
              <p className="old-price">${price}</p>
              <p className="percentage ">-{discountPercentage}%</p>
            </div>
          </div>
          <button className="cart-btn">
            <IoCartOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
