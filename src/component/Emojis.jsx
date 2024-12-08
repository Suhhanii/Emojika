import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import { Link } from "react-router-dom";

function Emojis(){
   
  const categories = [ 
    { label: "😀 Smiley & Emotions", endpoint: "categories/smileys-emotion" }, 
    { label: "💁🏻‍♀️ People & Body", endpoint: "categories/people-body" }, 
    { label: "🍁 Animal & Nature", endpoint: "categories/animals-nature" }, 
    { label: "🍽 Food & Drink", endpoint: "categories/food-drink" }, 
    { label: "⚽️ Activities", endpoint: "categories/activities" },
    { label: "🚗 Travel & Places", endpoint: "categories/travel-places" },
    { label: "⌚️ Objects", endpoint: "categories/objects" }, 
    { label: "🛑 Symbol", endpoint: "categories/symbols" },
    { label: "🚩 Flags", endpoint: "categories/flags" }, ];

    const [products,setEndpoint] =useContext(ProductContext);
    //const results = products;
    
    const [searchQuery, setSearchQuery] = useState("");

  const filteredResults = products.filter((p) =>
    p.unicodeName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  //console.log("results",results);
  //console.log("products",products);
  //console.log("setEndpoint",endpoint);
    return(products? <div className="flex overflow-x-hidden">
        <nav className="w-[30%] lg:w-[18%] shadow-zinc-500/50 shadow-lg overflow-y-scroll h-screen bg-pink-50 py-4 items-center flex flex-col">
            <h1 className="w-[80%%] lg:w-[80%] text-center  py-2 my-4 text-xl lg:text-2xl border border-zinc-950 ">Emojika {"; )"}</h1>
            <div className="w-[90%]">
            {/* <h1 className="ml-4 font-bold text-xl my-2">Categories</h1>
            <h1 className="px-4 py-2 my-2 hover:bg-red-300 rounded-full">😀 Smiley & Emoctions</h1>
            <h1 className="px-4 py-2 my-2 hover:bg-red-300 rounded-full">💁🏻‍♀️ People & Body</h1>
            <h1 className="px-4 py-2 my-2 hover:bg-red-300 rounded-full">🍁 Animal & Nature</h1>
            <h1 className="px-4 py-2 my-2 hover:bg-red-300 rounded-full">🍽 Food & Drink</h1>
            <h1 className="px-4 py-2 my-2 hover:bg-red-300 rounded-full">⚽️ Activities</h1>
            <h1 className="px-4 py-2 my-2 hover:bg-red-300 rounded-full">🚗 Travel & Places</h1>
            <h1 className="px-4 py-2 my-2 hover:bg-red-300 rounded-full">⌚️ Objects</h1>
            <h1 className="px-4 py-2 my-2 hover:bg-red-300 rounded-full">🛑 Symbol</h1>
            <h1 className="px-4 py-2 my-2 hover:bg-red-300 rounded-full">🚩 Flags</h1> */}
            {categories.map((category, i) =>
               ( <h1 key={i} className="px-4 py-2 my-2 hover:bg-red-300 rounded-full cursor-pointer" 
               onClick={() => {setEndpoint(category.endpoint)}} > {category.label} </h1> ))}

            <hr className="border-zinc-900 w-full mt-7"/>
            {/* <h1 className="px-4 py-2 text-xm lg:text-2xl">♥︎ Favourite</h1> */}
            <Link to={"/About"} className="px-4 py-2 text-xm lg:text-2xl">? About</Link>
            </div>
        </nav>
        <div className="h-scrren w-[70%] lg:w-[82%]">
          <nav className="h-[10vh] mt-2 lg:mt-0 lg:h-[15vh] w-full p-6 flex justify-between items-center ">
            <h1 className=" text-semibold text-xl ml-10" >Devices</h1>
            <div className="lg:flex lg:flex-row flex-col w-[50%]">
            <input
                className="w-[90%] mb-2 lg:mb-0 lg:w-[70%] text-xl px-4 bg-zinc-100 mr-10 border-zinc-200 border py-2 rounded h-[5vh] lg:h-[8vh]"
                type="text"
                placeholder="Search"
                value={searchQuery} // Set input value to search query state
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
              />
             <Link to={`/emojis/allDetails`} className="text-semibold text-xl m-4">All Emoji ➚</Link>
            </div>
          </nav>

          
          <div className="h-[85vh] items-center justify-center p-2 lg:p-5 w-full overflow-y-auto flex flex-wrap">
          {filteredResults.map((p,i)=>(
               <Link to={`/emojis/${p.slug}/${p.character}/${p.group}/${p.subGroup}`} key={i}  className="hover:scale-110  bg-red-100 h-[10vh] md:h-[8vh] md:w-[20%] lg:h-[14vh] flex flex-col shadow-lg justify-center items-center w-[30%] lg:w-[8%] rounded-md  m-4 group hover:shadow-2xl transition-shadow duration-300"> 
                   <h1 className="h-[80%] w-full text-6xl group-hover:scale-110 pt-4 text-center overflow-hidden ">{p.character}</h1>
                   {/* <h1 className="text-center text-xm ">cat face with wry smile</h1> */}
                   <h1 className="px-2 h-[20%] w-full text-xs text-center opacity-0 truncate group-hover:opacity-100">{p.slug}</h1>
               </Link>
            
          ))}
          </div>
          
        </div>
    </div>:<Loading/>
    );
}
export default Emojis;