import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

function AllDetails(){

    const [products]=useContext(ProductContext);
    // const result= products?.result || [];
    // console.log(result);
    //console.log(products);
    return (products?
       
        <div className="w-full h-fit bg-red-300 flex flex-col items-center justify-center">
            <div className="w-[80%] h-fit  flex flex-col items-center flex-wrap justify-center">
            {products.map((p,i)=> 
                <div key={i} className=" rounded border border-2 border-black w-[70%] h-fit p-4 bg-red-50 my-4 justify-between flex items-center">
                <h1 className="text-8xl hover:scale-110 w-[40%] text-center">{p.character}</h1>
                <div className="w-[70%] ">
                <h1 className="text-xl w-full font-semibold capitalize">Name - {p.slug}</h1>
                <h1 className="text-xl w-full font-semibold capitalize">Group - {p.group}</h1>
                <h1 className="text-xl w-full font-semibold capitalize">subGroup - {p.subGroup}</h1>
                </div>
               </div>)}
            </div>

        </div>:<Loading/>
    );
}
export default AllDetails;