import React from "react";
import offerImage from "@/assets/banner.jpg";
import "./Offer.css";

const Offer = () => {
  return (
    <div className="offer-container">
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
