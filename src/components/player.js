import React from 'react'
import './components.css'
import { MdGamepad } from "react-icons/md";
import { LuSwords } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import profilebg from '../Images/profile_bg.png'
import profilep from '../Images/profilep.png'
import trophyp from '../Images/trophyp.svg'
import { Link } from 'react-router-dom';

export default function Player(props) {
  return (
    <>
    <Link to={`/other/${props.id}`} className='w-[10.5rem] mt-4 '>
      <div className='w-[100%] h-[12.4rem]  bg-gradient-to-b from-[#000000] to-[#0fb0b81b] rounded-[10px] border-[1px] border-[#2c2c2c] glass3 '>
        <div className='relative h-[5rem]'>
        <img className='rounded-t-[10px] w-[100%] h-[3.8rem]'  src={profilebg}  alt="img" ></img>
        <div className='absolute w-[100%] h-[0rem] flex justify-center items-center pl-2 bg-[red]'><div className=' h-[5rem] border-[#787878] border-[1px] w-[5rem] pro rounded-[100%] flex justify-center items-center mb-[1rem] '><img className=' rounded-[100%]  ' src={props.porfileimg}></img></div>
</div>
</div>

<div className='w-[100%] flex flex-col justify-end items-center mt-[1rem]'>
    <div className='text-[#ffffff] font-mochiy-pop text-[3vw] font-thin text-[#4cf8fb]' >{props.player}</div>
    <div className=' font-medium text-[60%] h-[30%] flex items-center font-teachers text-[#b3b3b3] '>{props.realname}</div>
  </div>
       

  <div className=' h-[1.2rem] flex items-center pl-2 text-[10px] font-teachers text-[#828282]'>
 <div className='w-[1rem]'><MdGamepad style={{color:"#da4bfd"}} /></div>
    Game:
        <div className='w-[66%] flex  items-center text-[#656565] text-[10px] font-medium   '><div className=' w-full flex pl-2'>{props.game}</div></div>


      </div>


      <div className=' h-[1.2rem] font-teachers flex items-center pl-2 text-[10px] font-tea text-[#828282]'>
     <div className='w-[1rem]'><LuSwords style={{color:"#4cff6d"}}/></div> 
    Speciality:
       {props.skill.slice(0,1).map((v)=>(<div className='text-[#656565] font-teachers text-[10px] pl-2'>{v.skill}</div>))} 


      </div>

<div className='w-full h-[1.2rem] flex justify-center items-center font-teachers'>
{/* <div className='flex justify-center items-center text-[#656565] border-[#B4FF16] border-[0.6px] w-[50%] h-[1.5rem] font-medium rounded-[10px] text-[3vw] p-[3px]'>Follow</div> */}
<div className='flex text-[10px] w-full pl-2 text-[#828282]'>
<div className='w-[1rem]'><FaUserFriends style={{color:"#4efff6"}}/></div> 

  <div className='w-[50%] flex pl-1'>Followers :{props.followersCount}</div>
  <div className='w-[1rem]'><FaUserFriends style={{color:"#4efff6"}}/></div> 

  <div className='w-[50%]'>Allies : {props.followingCount} </div>
  </div>
</div>


      </div>
    </Link></>
  )
}
