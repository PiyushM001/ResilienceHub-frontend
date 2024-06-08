import React from 'react'
import './components.css'
import { LuMapPin } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { MdOutlineGames } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import profile from '../Images/profile.svg';
import './components.css'
import { Link } from 'react-router-dom';
export default function Tournament(props) {
  return (
    <Link to={`/tournament/details/${props.id}`} className='w-[90%] bg-gradient-to-b from-[#000000] to-[#0fb0b80a]  m-2 rounded-[10px] border-[1px] border-[#383838] glass2 '>





      <div className= '  bg-gradient-to-l from-[#000000] to-[#0fb0b80a]  h-[4rem] rounded-t-[10px] flex  '>


        <div className='w-[22%] h-[4rem] flex justify-center items-center '><img className='w-[3rem] h-[3rem] border-[1px] border-[#222222] rounded-[8px] ' src={props.orgimg}></img></div>
        <div className='w-[50%] flex flex-col justify-center border-b-[2px] border-[#222222] '>
          <div className='text-[#ffffff] font-mochiy-pop text-[3.3vw] font-thin h-[30%]'>{props.org}</div>
          <div className=' font-medium text-[60%] h-[30%] flex items-center text-[#656565]'>{props.description}</div>
          </div>
        <div className='w-[30%] flex justify-center items-center '> 
        <div className='flex justify-center items-center text-[#000000] bg-[#b5ff16]   w-[70%] h-[40%] font-mochiy-pop rounded-[10px] text-[3.3vw]'>{props.entryfee}</div>
        </div>

      </div>








      <div className='bg-gradient-to-l from-[#000000] to-[#0fb0b80c]  h-[3rem] flex'>
        <div className='w-[41%] flex-col justify-center items-center text-[#656565] font-medium text-[3.3vw]  '><div className='border-r-[2px]  border-[#222222] w-full flex justify-center'>Prize</div><div className='border-r-[2px]  border-[#222222] w-full flex justify-center'>{props.prizepool}</div></div>
        <div className='w-[33%] flex justify-center items-center text-[#656565] font-medium text-[3.3vw]  '><div className='border-r-[2px]  border-[#222222] w-full flex justify-center'>{props.registrations} Registrations</div></div>
        <div className='w-[25%] flex justify-center items-center text-[#656565] font-medium text-[3.3vw] '>{props.timeleft}</div>


      </div>
      
<div className='w-full h-[2.5rem] flex items-center bg-[#0fb0b815]'>
  <div className='w-[25%] flex justify-center items-center font-medium text-[#B4FF16] text-[3.5vw] '><MdOutlineGames style={{margin:"3px"}} />{props.game}</div>
  <div className='w-[25%] flex justify-center items-center font-medium text-[#a7a7a7] text-[3.5vw] '><IoPerson style={{margin:"3px"}}  />{props.solo}</div>
  <div className='w-[25%] flex justify-center items-center font-medium text-[#a7a7a7] text-[3.5vw] '><LuMapPin style={{margin:"3px"}}  />{props.map}</div>
  <div className='w-[25%] flex justify-center items-center font-medium text-[#a7a7a7] text-[3.5vw] '><IoMdInformationCircleOutline style={{margin:"3px"}}  />{props.info}</div>

</div>
    
    </Link>
  )
}
