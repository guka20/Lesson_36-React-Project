import { AuthDataContext } from "@/Contexts/AuthData";
import React, { useContext } from "react";

const Profile = () => {
  const { userData } = useContext(AuthDataContext);
  return (
    <>
      {userData !== null ? (
        <div>
          <img src={userData.image} alt="" />
          <hr />
          <h1>
            {userData.firstName} - {userData.lastName}
          </h1>
          <hr />
          <p>
            {userData.gender} - {userData.age}
          </p>
        </div>
      ) : (
        <div>Wrong page</div>
      )}
    </>
  );
};

export default Profile;
