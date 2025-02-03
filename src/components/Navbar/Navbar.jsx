import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuMoon } from "react-icons/lu";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <Link className="logo" to="/">
          Shopify
        </Link>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search for a product..."
          />
          <button className="search-btn">
            <IoIosSearch />
          </button>
        </div>
        <div className="nav-right-side">
          <Link to="/products">Products</Link>
          <Link to="categories">Categories</Link>
          <button className="user-login-btn nav-btn">
            <FaUser size={25} />
            <span>Login</span>
          </button>
          <button className="cart-btn nav-btn">
            <AiOutlineShoppingCart size={25} />
          </button>
          <button className="theme-btn nav-btn">
            <LuMoon size={25} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
