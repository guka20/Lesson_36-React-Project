import React, { useContext } from "react";
import bannerImage from "@/assets/laptop.png";
import { IsDarkContext } from "@/Contexts/IsDarkProvider";

import "./Banner.css";
const Banner = () => {
  const { isDark } = useContext(IsDarkContext);
  return (
    <div className={isDark ? "banner dark" : "banner"}>
      <div className="textures">
        <p className="start-price">Starting At $999</p>
        <p className="title">The best notebook collection 2024</p>
        <p className="subtitle">
          Exclusive offer <span>-10%</span> off this week
        </p>
        <button className="shop-now">Shop Now</button>
      </div>
      <div className="image-place">
        <img src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
