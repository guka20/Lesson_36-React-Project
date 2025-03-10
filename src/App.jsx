import React, { useState } from "react";
import MyRouters from "./MyRouters";
import { OfferModal } from "./components";
const App = () => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div>
      {!isHidden && <OfferModal setIsHidden={setIsHidden} />}
      <MyRouters />
    </div>
  );
};

export default App;
