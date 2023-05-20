import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import './App.css';


function App() {
  const [showbtn,setShowbtn]=useState(false);

useEffect(()=>{
window.addEventListener("scroll",function(){
  if(window.pageYOffset > 900){
    setShowbtn(true);
  }else{
    setShowbtn(false);
  }
})
},[])

const scrolltopbtn=()=>{
window.scroll({top:0,behavior:"smooth"})
}

  return (
    <>
    <section className='h-[100vh] bg-sky-300 '>part 1</section>
    <section  className='h-[100vh] bg-red-400'>part 2</section>
    <section  className='h-[100vh] bg-blue-600'>part 3</section>
    <section  className='h-[100vh] bg-lime-600'>part 4</section>

    <button onClick={scrolltopbtn}  className={showbtn ?"top active" : "top"}><FaChevronUp /></button>
     
    </>
  );
}

export default App;
