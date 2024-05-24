import React from "react";
import Exercise1 from "./components/Exercise1";
import UpdatePizza from "./components/UpdatePizza";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";


const App = () => {
  return (
    <div>
        <Exercise1/>
        <UpdatePizza/>
        <Cart/>
        {/* <ExpandableText/> */}
    </div>
  );
};

export default App;
