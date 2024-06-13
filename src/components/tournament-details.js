import React from 'react'
import { Link, useParams } from "react-router-dom";
import { pContext } from "../context/profilecontext";
import { useContext,useState,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import accept from "../Images/tick.svg"
import './components.css'
import loadinggif from "../Images/loading.gif";
import Footer from './footer';
import Header from './header';
import { BsGift } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { FcRules } from "react-icons/fc";
import { CgEditBlackPoint } from "react-icons/cg";

import { VscDebugBreakpointFunctionUnverified } from "react-icons/vsc";
import CountdownTimer from './CountdownTimer';
export default function Tournamentdetails() {
  const eventDate = '2024-06-14T13:00:00';

    const {_id} = useParams();
    const a = useContext(pContext);
    const {gettourdetail, registertournament,tourdatailarray,checkregistration,idpass}=a;
    const [loading, setLoading] = useState(true);



    const fetchData = async () => {
        setLoading(true);
        try {
            await  gettourdetail(_id)
         await checkregistration(_id)
    
        } catch (error) {
          // Handle error if necessary
        } finally {
          setLoading(false);
        }
      };



      const fetchData2 = async () => {
        setLoading(true);
        try {
            await  registertournament(_id)
           
    
        } catch (error) {
          // Handle error if necessary
        } finally {
          setLoading(false);
         fetchData();
        }
      };


      useEffect(() => {
        // console.log("chal rha")
        fetchData();
       
      }, []);
      const handleregistration=()=>{
        fetchData2();

      }
  return (
    <div className='text-[#dddddd] font-teachers bg-[#131515] w-full h-[100svh] flex-col justify-center items-center ' >  <ToastContainer />
      {loading && (
            <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1] text-[#eeeeee]'>
              <div className='h-[30vh] bg-[#000000]'></div>
              <img className='w-[100vw]' src={loadinggif} alt="Loading" />
              <div className='h-[30vh] bg-[#000000]'></div>
            </div>
          )}
<Header/>

<div className='w-[90%] h-[10svh]'></div>
<div className='w-[100%] h-[80svh]  flex justify-center items-center  '>
    <div className='w-[90%] h-[80svh] overflow-y-scroll'>

    {idpass && <div className='w-full bg-[#7cef5c75] font-teachers justify-center  flex items-center mt-5 mb-2'>You are Registered<img className="w-[1.5rem] m-1" src={accept}></img></div>}

    <h1 className='flex justify-center font-mochiy-pop text-[#339989]  mt-[1rem]'> {tourdatailarray.org}</h1> 
    <h1 className='flex justify-center text-[#7de2d1] '>({tourdatailarray.game})</h1>

    <h1 className='flex justify-center'>{tourdatailarray.about}</h1>



    {idpass &&  <div className='w-[96%] m-2 p-2  bg-[#7de2d10f] rounded-[10px] flex flex-col justify-center items-center '> <h1 className='flex  items-center text-[#cdcdcd] m-2' ><MdDateRange /><span className=' text-[#7de2d1] mx-2'>Room ID:</span>{tourdatailarray.tournamentid}</h1>
    <h1 className='flex  items-center text-[#cdcdcd] m-2' ><MdDateRange /><span className=' text-[#7de2d1] mx-2'>password:</span>{tourdatailarray.tournamentpass}</h1>  </div> }




    {/* <h1 className='flex justify-center'>{tourdatailarray.registrations}</h1> */}
    <div className='w-full flex flex-col items-center justify-center'>
    <h1 className='flex  items-center text-[#e7e7e7] font-teachers mt-[1rem] text-[0.7rem]'><BsGift /><span className='text-[#7de2d1] text-[1rem] mx-2'>PrizePool </span></h1>
    <table className="random-table">
      <thead>
        <tr>
          <th>Position</th>
          <th>Prize</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1st</td>
          <td>{tourdatailarray.prize1}</td>
        </tr>
        <tr>
          <td>2nd</td>
          <td>{tourdatailarray.prize2}</td>
        </tr>
        <tr>
          <td>3rd</td>
          <td>{tourdatailarray.prize3}</td>
        </tr>
        <tr>
          <td>4th</td>
          <td>{tourdatailarray.prize4}</td>
        </tr>
        <tr>
          <td>5th</td>
          <td>{tourdatailarray.prize5}</td>
        </tr>
      </tbody>
    </table>

    </div>
    


    <div className='w-[96%] m-2 h-[3rem] bg-[#7de2d10f] rounded-[10px] flex justify-center items-center '>
    <h1 className='flex  items-center text-[#cdcdcd]' ><MdDateRange /><span className=' text-[#46dfc6] mx-2 font-teachers'>Registration ends in:</span><CountdownTimer eventTime={eventDate} /></h1></div>


    <div className='w-[96%] m-2 h-[3rem] bg-[#7de2d10f] rounded-[10px] flex justify-center items-center '>
    <h1 className='flex  items-center text-[#cdcdcd]' ><MdDateRange /><span className=' text-[#7de2d1] mx-2'>Time :</span>{tourdatailarray.time}</h1>
    </div>
   

  


    
   


<h1 className='flex w-full justify-center items-center mt-5 text-[#7de2d1]'><FcRules /><span className='mx-1'>Instructions :</span></h1>
    <h1 className='flex justify-center my-1 text-[0.9rem] w-full text-[#bdbdbd] '><VscDebugBreakpointFunctionUnverified style={{color:"#7de2d1"}} />{tourdatailarray.instruction1
    }</h1>
    <h1 className='flex justify-center my-1 text-[0.9rem] w-full text-[#bdbdbd]'><VscDebugBreakpointFunctionUnverified style={{color:"#7de2d1"}} />{tourdatailarray.
instruction2}</h1>
    <h1 className='flex justify-center my-1 text-[0.9rem] w-full text-[#bdbdbd]'><VscDebugBreakpointFunctionUnverified style={{color:"#7de2d1"}} />{tourdatailarray.
instruction3}</h1>


<h1 className='flex justify-center items-center mt-[1rem] text-[#7de2d1]'><FcRules /> <span className='mx-1'>Rules :</span></h1>


    <h1 className='flex  items-center my-1 text-[0.9rem] w-full text-[#bdbdbd]'><VscDebugBreakpointFunctionUnverified style={{color:"#7de2d1"}} />{tourdatailarray.rule1
    }</h1>
    <h1 className='flex  items-center my-1 text-[0.9rem] w-full text-[#bdbdbd]'><VscDebugBreakpointFunctionUnverified style={{color:"#7de2d1"}} />{tourdatailarray.rule2
    }</h1>
    <h1 className='flex items-center my-1 text-[0.9rem] w-full text-[#bdbdbd]'><VscDebugBreakpointFunctionUnverified style={{color:"#7de2d1"}} />{tourdatailarray.rule3
    }</h1>
    <h1 className='flex items-center my-1 text-[0.9rem] w-full text-[#bdbdbd]'>{tourdatailarray.rule4
    }</h1>
    <h1 className='flex items-center my-1 text-[0.9rem] w-full text-[#bdbdbd]'>{tourdatailarray.rule5
    }</h1>

    
 
<div  className='w-[100%] h-[4rem] mb-5 flex justify-center items-center'> {!idpass &&  <button
                   
                   onClick={handleregistration}
                   class="border-[#7de2d1] bg-[#339989] flex justify-center items-center border-[1px] rounded-[10px] w-[90%] h-[3rem] text-[#020202] font-mochiy-pop "
                 >
                   Register Now
                 </button>}

                 </div>

    </div>

</div>
   <Footer/>
    </div>
  )
}
