import React, { useState } from 'react'
import './components.css'
import { FaHandsHelping } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { AiFillAlert } from "react-icons/ai";
import { LiaBlogSolid } from "react-icons/lia";
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import img from '../Images/Frame 121075512.svg'
import img0 from '../Images/hl.svg'
import img2 from '../Images/Frame 121075517.svg'
import img20 from '../Images/pol.png'

import img3 from '../Images/Frame 121075519.svg'
import img30 from '../Images/pl.svg'

import img4 from '../Images/players.svg'
import img40 from '../Images/tl.svg'

import img5 from '../Images/teamicon.svg'
import img50 from '../Images/teamicon22.svg'

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function Footer() {
  const a = useContext(pContext);
  const {
    teamnamein
  } = a;
  
  let location = useLocation();
  let path = location.pathname;

  return (
    <div className='flex w-full h-[10svh] absolute bottom-[0] bg-[#0e0e0e00] justify-evenly footerbg  z-[10000]  min-[500px]:w-[500px]'>
           <Link to="/ai" className='flex z-[1000000000000000] w-[60px] h-[60px] bg-[#a2f508] rounded-[10px] justify-center items-center absolute top-[-90px] right-6 shadow-lg text-[#000000]'>AI </Link>

    <Link className='flex flex-col items-center text-[#4b4b4b] mt-[1rem]' to="/">{path==="/"?<TiHome  className='text-[#ffffff] text-[2rem]'  />:<TiHome  className='text-[#505050] text-[2rem]'/>}<>Home</> </Link>
      <Link className='flex flex-col items-center text-[#4b4b4b] mt-[1rem]' to="/blogs">{path==="/blogs"?<LiaBlogSolid className='text-[#ffffff] text-[2rem]'  />:<LiaBlogSolid className='text-[#505050] text-[2rem]'/>}<>Blogs</> </Link>
      <Link className='flex flex-col items-center text-[#4b4b4b] mt-[1rem]' to="/ngos">{path==="/ngos"?<FaHandsHelping className='text-[#ffffff] text-[2rem]'  />:<FaHandsHelping  className='text-[#505050] text-[2rem]'/>}<>NGO's</> </Link>
      <Link className='flex flex-col items-center text-[#4b4b4b] mt-[1rem]' to="/speakups">{path==="/speakup"?<AiFillAlert className='text-[#ffffff] text-[2rem]'  />:<AiFillAlert className='text-[#505050] text-[2rem]'/>}<>Voices</> </Link>
      <Link className='flex flex-col items-center ml-[-12px] text-[#4b4b4b] mt-[1rem]' to="/consult">{path==="/consult"?<RiTeamFill  className='text-[#ffffff] text-[2rem]'  />:<RiTeamFill   className='text-[#505050] text-[2rem]'/>}<>Advisors</> </Link>
      {/* <Link className='flex items-center' to="/post"><img className='w-[18vw]' src={path==="/post"?img20:img2}></img></Link> */}

      {/* <Link className='flex items-center' to="/tournaments"><img className='w-[18vw] h-[4rem]' src={path==="/tournaments"?img30:img3} alt="img"></img></Link> */}
      {/* <Link className='flex items-center' to={teamnamein ? "/chatteam" : "/maketeam"}>
  <img className='w-[18vw] h-[4rem]' src={path === "/team" ? img50 : img5} alt="img" />
</Link> */}
    </div>
    
  )
}
