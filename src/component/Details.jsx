// import { axios } from "../utils/Axios";
 //import { useState } from "react";
 import { useParams } from "react-router-dom";


function Details(){
    // const [data,setdata]=useState();
     const {slug,character,group,subGroup}=useParams();
    // console.log(p);
// console.log(name);
//     const getSingleData=async()=>{
//         try{
//             const {data}=await axios.get(`emojis?access_key=298a43173d335457959e6be2a609eafbed0cb99e`);
//             console.log(data);
//             setdata(data);
//         }
//         catch(error)
//         {
//             console.log(error);
//         }
//     }

//     useEffect(()=>{
//         getSingleData();
//         console.log("single data",data);
//     })
    return (
        <div className="flex items-center justify-center h-screen w-full bg-red-50 ">
            <div className="bg-red-100 h-[50vh]  md:h-[50vh] lg:h-[70vh] w-[80vw] md:w-[50vw] lg:w-[30vw] flex flex-col items-center justify-center">
                <h1 className="p-10 scale-125 hover:scale-150 cursor-pointer text-9xl group-hover:scale-110 pt-4 text-center overflow-hidden " >{character}</h1>
                <div className="mt-16">
                <h1 className="capitalize text-2xl font-semibold">Name - {slug}</h1>
                <h1 className="capitalize text-xl">Group - {group}</h1>
                <h2 className="capitalize text-xl">subGroup - {subGroup}</h2>
                </div>
            </div>
        </div>
    );
}

export default Details;