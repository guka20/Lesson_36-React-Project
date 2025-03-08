import React, { useContext } from "react";
import "./Services.css";
import { IsDarkContext } from "@/Contexts/IsDarkProvider";
const Services = () => {
  const { isDark } = useContext(IsDarkContext);
  return (
    <div className={isDark ? "services-list dark" : "services-list"}>
      <div className="single-service">
        <p className="title">Free Delivery</p>
        <p className="description">Orders from all items</p>
      </div>
      <div className="single-service">
        <p className="title">Return & Refund</p>
        <p className="description">Money back guarantee</p>
      </div>
      <div className="single-service">
        <p className="title">Member Discount</p>
        <p className="description">On order over $99</p>
      </div>
      <div className="single-service">
        <p className="title">Support 24/7</p>
        <p className="description">Contact us 24 hours a day</p>
      </div>
    </div>
  );
};

export default Services;
