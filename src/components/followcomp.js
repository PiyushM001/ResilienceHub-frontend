import React from "react";
import './components.css'

import profile from "../Images/profileimg.png";
export default function Followcomp(props) {
  return (
    <div className=" border-[1px] border-[#00fbff23] bg-[#272727] rounded-[10px] h-[5rem]  flex items-center relative mt-3   ">
      <div className=" w-[4rem] h-[4rem]  flex items-center ">
        <img className=" rounded-[10px]   border-[#0fb0b8b1] ml-2 " src={profile}></img>
      </div>
      {/* <h1 className="text-[re]" >  {props.id}</h1>
    <h1> {props.RealName}</h1>
    <h1> {props.IngameName}</h1> */}
      
      <div className="w-[90%] ">
        <div className="text-[#aeaeae] text-[3.5vw] font-mochiy-pop  font-thin ml-[6vw] m-1">
          {props.IngameName}
        </div>
        <div className=" font-teachers text-[3vw] h-[30%] flex items-center text-[#656565] ml-[6vw]">
          {props.RealName}
        </div>
      </div>
    </div>
  );
}
