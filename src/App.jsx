import React, { useContext, useState } from "react";
import MyRouters from "./MyRouters";
import { OfferModal, LoginModal } from "./components";
import { IsLoginOpenContext } from "./Contexts/IsLoginOpen";
const App = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { isLoginOpen } = useContext(IsLoginOpenContext);
  return (
    <div>
      {isLoginOpen && <LoginModal />}
      {!isHidden && <OfferModal setIsHidden={setIsHidden} />}
      <MyRouters />
    </div>
  );
};

export default App;
