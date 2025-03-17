import React, { useContext } from "react";
import offerImage from "@/assets/banner.jpg";
import { IsDarkContext } from "@/Contexts/IsDarkProvider";
import "./Offer.css";

const Offer = () => {
  const { isDark } = useContext(IsDarkContext);
  return (
    <div className={isDark ? "offer-container dark" : "offer-container"}>
      <div className="image-place">
        <img src={offerImage} className="offer-image" />
      </div>
      <div className="offer-textures">
        <h1>Don't miss the offer Grab it now</h1>
        <button className="shop-now">Shop Now</button>
      </div>
    </div>
  );
};

export default Offer;
