import React from 'react'
import { Link, useParams } from "react-router-dom";
import { pContext } from "../context/profilecontext";
import { useContext,useState,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

import loadinggif from "../Images/loading.gif";
import Footer from './footer';
import Header from './header';
import { BsGift } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { FcRules } from "react-icons/fc";
import { CgEditBlackPoint } from "react-icons/cg";
import { VscDebugBreakpointFunctionUnverified } from "react-icons/vsc";
export default function Tournamentdetails() {
    const {_id} = useParams();
    const a = useContext(pContext);
    const {gettourdetail, registertournament,tourdatailarray}=a;
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        setLoading(true);
        try {
            await  gettourdetail(_id)
         
    
        } catch (error) {
          // Handle error if necessary
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        // console.log("chal rha")
        fetchData();
       
      }, []);
      const handleregistration=()=>{
        console.log("chalr ha")
        registertournament(_id)
      }
  return (
    <div className='text-[#dddddd] font-teachers bg-[#061415] w-full h-[100svh] flex-col justify-center items-center ' >  <ToastContainer />
      {loading && (
        <div className="absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000]">
          <div className="h-[50vh] bg-[#00000000]"></div>
          <img className="w-[100vw]" src={loadinggif} alt="Loading" />
          <div className="h-[20vh] bg-[#000000]"></div>
        </div>
      )}
<Header/>

<div className='w-[90%] h-[10svh]'></div>
<div className='w-[100%] h-[80svh]  flex justify-center items-center  '>
    <div className='w-[90%] h-[80svh] overflow-y-scroll'>


    <h1 className='flex justify-center font-mochiy-pop mt-[1rem]'> {tourdatailarray.org}</h1> 
    <h1 className='flex justify-center text-[#bbff45]'>({tourdatailarray.game})</h1>

    <h1 className='flex justify-center'>{tourdatailarray.about}</h1>

    {/* <h1 className='flex justify-center'>{tourdatailarray.registrations}</h1> */}
    <h1 className='flex  items-center text-[#b5fb45] mt-[1rem]'><BsGift /><span className='text-[#b5fb45] mx-2'>Price:</span> {tourdatailarray.prizepool}</h1>
    <h1 className='flex  items-center text-[#50f1fd]' ><MdDateRange /><span className='  mx-2'>Date:</span>{tourdatailarray.time}</h1>


<h1 className='flex items-center mt-[1rem] text-[#ff4545]'><FcRules /><span className='mx-1'>Instructions :</span></h1>
    <h1 className='flex justify-center my-1'><VscDebugBreakpointFunctionUnverified style={{color:"red"}} />{tourdatailarray.instruction1
    }</h1>
    <h1 className='flex justify-center my-1'><VscDebugBreakpointFunctionUnverified style={{color:"red"}} />{tourdatailarray.
instruction2}</h1>
    <h1 className='flex justify-center my-1'><VscDebugBreakpointFunctionUnverified style={{color:"red"}} />{tourdatailarray.
instruction3}</h1>


<h1 className='flex items-center mt-[1rem] text-[red]'><FcRules /> <span className='mx-1'>Rules :</span></h1>


    <h1 className='flex justify-center my-1'><VscDebugBreakpointFunctionUnverified style={{color:"red"}} />{tourdatailarray.rule1
    }</h1>
    <h1 className='flex justify-center my-1'><VscDebugBreakpointFunctionUnverified style={{color:"red"}} />{tourdatailarray.rule2
    }</h1>
    <h1 className='flex justify-center my-1'><VscDebugBreakpointFunctionUnverified style={{color:"red"}} />{tourdatailarray.rule3
    }</h1>
    <h1 className='flex justify-center my-1'><VscDebugBreakpointFunctionUnverified style={{color:"red"}} />{tourdatailarray.rule4
    }</h1>
    <h1 className='flex justify-center my-1'><VscDebugBreakpointFunctionUnverified style={{color:"red"}} />{tourdatailarray.rule5
    }</h1>

    
 
<div  className='w-[100%] h-[4rem] mb-5 flex justify-center items-center'>   <button
                   
                   onClick={handleregistration}
                   class="border-[#a4f632] flex justify-center items-center border-[1px] rounded-[10px] w-[90%] h-[3rem] text-[#b1ff43] font-mochiy-pop "
                 >
                   Register
                 </button></div>

    </div>

</div>
   <Footer/>
    </div>
  )
}
