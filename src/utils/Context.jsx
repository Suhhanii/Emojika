import { createContext, useEffect, useState } from "react";
import axios from "./Axios";

export const ProductContext= createContext(null);

const Context=(props)=>{

  const [product,setproduct]=useState("");

  const [endpoint, setEndpoint] = useState("emojis"); 

  const getProducts = async () => {
    try {
      const { data } = await axios(`${endpoint}?access_key=298a43173d335457959e6be2a609eafbed0cb99e`);
      //console.log(data); 
      setproduct(data);  
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(()=>{
   // console.log("end point in use effect context",endpoint);
   getProducts();
  },[endpoint]);

 

  return(
    <ProductContext.Provider value={[product,setEndpoint]}>
        {props.children}
    </ProductContext.Provider>
  );
}
export default Context;