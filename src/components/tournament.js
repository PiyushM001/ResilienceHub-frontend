import React from 'react'
import './components.css'
import { LuMapPin } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { MdOutlineGames } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaTrophy } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import profile from '../Images/profile.svg';
import './components.css'
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
export default function Tournament(props) {
  const eventDate = '2024-06-14T13:00:00';
  return (
    <Link to={`/tournament/details/${props.id}`} className='w-[90%] bg-[#2b2c28]  m-2 rounded-[5px] border-[1px] border-[#383838] glass2 '>





      <div className= '   bg-[#2b2c28]  h-[4rem] rounded-t-[5px] flex  '>


        <div className='w-[22%] h-[4rem] flex justify-center items-center '><img className='w-[3rem] h-[3rem] border-[1px] border-[#222222] rounded-[8px] ' src={props.orgimg}></img></div>
        <div className='w-[50%] flex flex-col justify-center border-b-[2px] border-[#222222] '>
          <div className='text-[#ffffff] font-mochiy-pop text-[3.3vw] font-thin h-[30%]'>{props.org}</div>
          <div className=' font-medium text-[60%] h-[30%] flex items-center text-[#339989]'>{props.description}</div>
          </div>
        <div className='w-[30%] flex justify-center items-center '> 
        <div className='flex justify-center items-center text-[#f4f4f4] bg-[#339989] p-2  w-[70%] h-[40%] font-mochiy-pop rounded-[10px] text-[3.3vw]'>{props.entryfee}</div>
        </div>

      </div>








      <div className='bg-[#2b2c28]  h-[3rem] flex'>
        <div className='w-[33%] flex justify-center items-center text-[#339989] font-medium text-[3.3vw] ml-3 '><div className='  border-[#818181] w-full flex justify-center items-center'><FaTrophy /><span className='mx-1'>Prizepool:</span></div><div className='border-r-[2px]  border-[#222222] w-full flex  '>{props.prizepool}</div></div>
        <div className='w-[33%] flex justify-center items-center text-[#339989] font-medium text-[3.3vw]  '><div className='border-r-[2px] border-l-[2px]  border-[#7e7e7e] w-full flex justify-center'>{props.registrations}<span className='mx-1'>Registrations</span> </div></div>
        <div className='w-[33%] flex justify-center items-center text-[#339989] font-medium text-[3.3vw] '><IoMdTime /><span className='mx-1'><CountdownTimer eventTime={eventDate} /></span></div>


      </div>
      
<div className='w-full h-[2.5rem] flex items-center bg-[#7de2d1] rounded-b-[5px]'>
  <div className='w-[25%] flex justify-center items-center font-medium text-[#000000] text-[3.5vw] '><MdOutlineGames style={{margin:"3px"}} />{props.game}</div>
  <div className='w-[25%] flex justify-center items-center font-medium text-[#060606] text-[3.5vw] '><IoPerson style={{margin:"3px"}}  />{props.solo}</div>
  <div className='w-[25%] flex justify-center items-center font-medium text-[#000000] text-[3.5vw] '><LuMapPin style={{margin:"3px"}}  />{props.map}</div>
  <div className='w-[25%] flex justify-center items-center font-medium text-[#000000] text-[3.5vw] '><IoMdInformationCircleOutline style={{margin:"3px"}}  />{props.info}</div>

</div>
    
    </Link>
  )
}
