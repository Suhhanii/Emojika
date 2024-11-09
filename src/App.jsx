// import { useState } from "react";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Emojis from "./component/Emojis";
import Details from "./component/Details";
import About from "./component/About";
import AllDetails from "./component/AllDetails";
function App(){
  
  return(
    <>
   <nav>
     <Link to="/"></Link>
     <Link to="/emojis"></Link>
     <Link to="/about"></Link>
   </nav>
   <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/emojis" element={<Emojis />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/emojis/allDetails" element={<AllDetails/>}></Route>
        <Route path="/emojis/:slug/:character/:group/:subGroup" element={<Details />}></Route>
   </Routes>
   
  </>
  );
}
export default App;

