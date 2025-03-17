import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuMoon } from "react-icons/lu";
import { IoSunnyOutline } from "react-icons/io5";

import { IsDarkContext } from "@/Contexts/IsDarkProvider";
import "./Navbar.css";
import { IsLoginOpenContext } from "@/Contexts/IsLoginOpen";
import { IsAuthContext } from "@/Contexts/IsAuth";

const Navbar = () => {
  const { setIsLoginOpen } = useContext(IsLoginOpenContext);
  const { userData, setUserData } = useContext(IsAuthContext);
  const { isDark, setIsDark } = useContext(IsDarkContext);

  const logOut = () => {
    setUserData(null);
  };
  return (
    <nav className={isDark ? "nav-bar dark" : "nav-bar"}>
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
          {userData === null ? (
            <button
              className="user-login-btn nav-btn"
              onClick={() => setIsLoginOpen(true)}
            >
              <FaUser size={25} />
              <span>Login</span>
            </button>
          ) : (
            <button className="user-login-btn nav-btn" onClick={logOut}>
              Log Out
            </button>
          )}

          <button className="cart-btn nav-btn">
            <AiOutlineShoppingCart size={25} />
          </button>
          <button
            className="theme-btn nav-btn"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <IoSunnyOutline size={25} /> : <LuMoon size={25} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
