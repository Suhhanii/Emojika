import { useState } from "react";
import { Link } from "react-router-dom";

function Home(){
    const images=[
        'src/assets/Property 1=Frame 35.jpg',
        'src/assets/Property 1=Frame 36.jpg',
        'src/assets/Property 1=Frame 37.jpg'
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () =>
         { setCurrentIndex((prevIndex) =>
           (prevIndex + 1) % images.length);
         };
    
    return(
<div>
      <nav className="w-full bg-stone-950 items-center flex justify-center pt-10 pb-20">
      <div className="w-[24%] py-4 px-8 bg-zinc-100 flex justify-between rounded">
        <div className="h-full rounded w-[10%] bg-zinc-500 mr-10" style={{ minHeight: '25px'}}></div>
        <Link className="text-xl"  to="/Emojis">Emojis ➚</Link>
        <Link className="text-xl" to="/About" >About</Link>
      </div>
      </nav>

    <div className="h-screen w-full bg-stone-950 relative">
      <img className="w-full h-screen " src="src\assets\Hero_section.png" alt="" />
      <h1 className="hover:scale-125 absolute bottom-[20%] right-[25%]  m-4 text-white text-4xl ">👀</h1>
      <h1 className="hover:scale-125 absolute bottom-[20%] right-[30%]  m-4 text-white text-4xl ">💣</h1>
      <h1 className="hover:scale-125 absolute bottom-[28%] right-[25%]  m-4 text-white text-4xl ">👅</h1>
      <h1 className="hover:scale-125 absolute bottom-[26%] right-[32%]  m-4 text-white text-4xl ">🐵</h1>
      <h1 className="hover:scale-125 absolute bottom-[20%] right-[34%]  m-4 text-white text-4xl ">👻</h1>
      <h1 className="hover:scale-125 absolute bottom-[30%] right-[28%]  m-4 text-white text-4xl ">😁</h1>
    </div>
   

    <img  className="h-full w-full " src="src\assets\Frame 28.jpg" alt="" />

    <div className="h-screen w-full">
      <img  className="h-screen w-full" src="src\assets\Frame 36.jpg" alt="" />
    </div>


 <div className="h-screen w-full relative ">
      <div className="flex items-center  justify-center">
      <h1 className=" py-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Welcome to Emojika</h1>
      <img className="h-[30vh] w-[20vw]" src="src\assets\image 17.jpg" alt="" />
      </div>
   
  <div className="w-full h-[50vh] text-center overflow-hidden">
    <div className="w-full h-full text-center overflow-hidden ">
       <img className=" w-full h-full object-fit  " src={images[currentIndex]} alt="" />
    </div>
  </div>
  <div className="text-center mt-15">
      <button className="text-2xl border border-zinc-900 px-4 py-2 rounded" onClick={()=>handleNext()}>Move ➜
      </button>
  </div>
  <h1 className="absolute  top-[72%] right-[2%] h-[5%] w-[10%]"><img src="src\assets\Cone.jpg" alt="" /></h1>
  <h1 className="absolute top-[0%] left-[0%] h-[5%] w-[10%]"><img src="src\assets\Cone_01 2.jpg" alt="" /></h1>
 </div>
  

  <div className="h-screen w-full text-white overflow-hidden bg-zinc-950">
    <h1 className="text-[26vw] text-center">
    <span className=" hover:text-[28vw] cursor-pointer">E</span>
    <span className=" hover:text-[28vw] cursor-pointer">m</span>
    <span className=" hover:text-[28vw] cursor-pointer">o</span>
    <span className=" hover:text-[28vw] cursor-pointer">j</span>
    <span className=" hover:text-[28vw] cursor-pointer">i</span>
    <span className=" hover:text-[28vw] cursor-pointer">k</span>
    <span className=" hover:text-[28vw] cursor-pointer">a</span>
    </h1>
  </div>

</div>
    );
}
export default Home;