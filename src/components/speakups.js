import React, { useState, useEffect, useContext, useCallback } from 'react';
import Footer from './footer';
import { ToastContainer, toast } from 'react-toastify';
import { pContext } from "../context/profilecontext";
import Header from './header';
import Loginas from './loginas';
import Post from './post';
import loadinggif from '../Images/loading.gif';
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import Speakupcomp from './speakupcomp';

export default function Speakups() {
  const { getspeakups,speakuparray } = useContext(pContext);
  const [loginstate, setloginstate] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

const getspeakupfun= async ()=>{
  setLoading(true);
    try {
      await getspeakups();

    } catch (error) {
      // Handle error if necessary
    } finally {
      setLoading(false);
    }

}
useEffect(() => {
  getspeakupfun();
}, [page]); 



  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <div className='bg-[#000000] h-[100svh] '>
      {loading && (
            <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[10]'>
              <div className='h-[30vh] bg-[#000000]'></div>
              <img className='w-[100vw]' src={loadinggif} alt="Loading" />
              <div className='h-[30vh] bg-[#000000]'></div>
            </div>
          )}
      
        <div className='flex flex-col h-[100vh]  w-full'>
          <ToastContainer />
          <Header />
          <div className='posts-container overflow-y-scroll'>
            <div className='w-full h-[10vh]'></div>
            {speakuparray.map((post, index) => (
              <Speakupcomp key={index} id={post._userid}  postId={post._id} time={post.date}   description={post.description} name={post.IngameName}  />
            ))}
                        
                        <div className="flex justify-center mt-4 w-[100%]">
            <button onClick={handlePrevPage} disabled={page === 1 } className="px-4 py-2 flex items-center text-[#828282] rounded-md"><FaCaretLeft style={{color:"#4cff6d"}} />Previous</button>
            <button onClick={handleNextPage} disabled={speakuparray.length<10} className=" px-4 py-2 flex items-center text-[#828282] rounded-md">Next <FaCaretRight style={{color:"#4cff6d"}} /></button>
          </div>
          <div className='w-[100%] h-[12vh]'></div>


          </div>
       
          <Footer />
        </div>
     
      {/* {!loginstate && <Loginas />} */}
    </div>
  );
}
