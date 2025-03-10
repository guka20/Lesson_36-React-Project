import React from "react";
import offerBanner from "@/assets/banner.jpg";
import "./OfferModal.css";
import { IoClose } from "react-icons/io5";

const OfferModal = ({ setIsHidden }) => {
  return (
    <div className="dark-screen">
      <div className="offer-banner-container">
        <img src={offerBanner} className="offer-img" />
        <button className="close-btn" onClick={() => setIsHidden(true)}>
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default OfferModal;
