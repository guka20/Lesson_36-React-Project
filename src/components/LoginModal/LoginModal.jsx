import React, { useContext, useEffect, useState } from "react";
import "./LoginModal.css";
import { IoIosClose } from "react-icons/io";
import { FaUnlock, FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IsLoginOpenContext } from "@/Contexts/IsLoginOpen";
import { IsAuthContext } from "@/Contexts/IsAuth";
import { authUserUsingToken, getAccessToken } from "@/helper/api";

const LoginModal = () => {
  const { setIsLoginOpen } = useContext(IsLoginOpenContext);
  const { setUserData } = useContext(IsAuthContext);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  const getAuthentication = () => {
    getAccessToken(userInfo)
      .then((resp) => resp)
      .then((data) => {
        authUserUsingToken(data)
          .then((resp) => resp)
          .then((data) => setUserData(data));
        setIsLoginOpen(false);
        localStorage.setItem("accessToken", data);
      });
  };

  return (
    <div className="dark-screen">
      <div className="login-container">
        <button className="close-login" onClick={() => setIsLoginOpen(false)}>
          <IoIosClose />
        </button>
        <p className="login-title">
          <FaUnlock />
          Login
          <FaUnlock />
        </p>
        <div className="text-field-place">
          <FaUser className="text-field-icon" />
          <input
            type="text"
            placeholder="Your username here..."
            onChange={(e) =>
              setUserInfo({ ...userInfo, username: e.target.value })
            }
          />
        </div>
        <div className="text-field-place">
          <RiLockPasswordFill className="text-field-icon" />
          <input
            type="password"
            placeholder="Your password here..."
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
            }
          />
        </div>
        <button className="login-btn" onClick={getAuthentication}>
          Submit
        </button>
        <p className="register">
          No account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
