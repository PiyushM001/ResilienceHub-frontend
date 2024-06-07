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

export default function Home() {
  const { getinfo, getnotification, getteaminfo, getpost, postsarray } = useContext(pContext);
  const [loginstate, setloginstate] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

const getpostfun= async ()=>{
  setLoading(true);
    try {
      await getpost(page);

    } catch (error) {
      // Handle error if necessary
    } finally {
      setLoading(false);
    }

}
useEffect(() => {
  getpostfun();
}, [page]); 


  const fetchInitialData = async () => {
    await getinfo();
    await getteaminfo();
    await getnotification();
   
  };

  useEffect(() => {
   
    fetchInitialData();

    const localtoken = localStorage.getItem("token");
    if (localtoken) {
      setloginstate(true);
      // fetchPosts(page); // Fetch initial posts
    } else {
      setloginstate(false);
    }

    // const handleScroll = () => {
    //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
    //     setPage(prevPage => prevPage + 1);
    //   }
    // };

    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const fetchPosts = useCallback(async (page) => {
  //   setLoading(true);
  //   await getpost(page); // Assuming getpost will update postsarray in the context
  //   setLoading(false);
  // }, [getpost]);



  // useEffect(() => {
  //   if (page > 1) {
  //     fetchPosts(page);
  //   }
  // }, [page, fetchPosts]);
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
      {loginstate && (
        <div className='flex flex-col h-[100vh]  w-full'>
          <ToastContainer />
          <Header />
          <div className='posts-container overflow-y-scroll'>
            <div className='w-full h-[10vh]'></div>
            {postsarray.map((post, index) => (
              <Post key={index} id={post._userid}  likes={post.likesCount} postid={post._id} postimg={post.PostUrl}  profile={post.profilephoto}  description={post.description} name={post.IngameName} realname={post.RealName} data={post} />
            ))}
                        
                        <div className="flex justify-center mt-4 w-[100%]">
            <button onClick={handlePrevPage} disabled={page === 1 } className="px-4 py-2 flex items-center text-[#828282] rounded-md"><FaCaretLeft style={{color:"#4cff6d"}} />Previous</button>
            <button onClick={handleNextPage} disabled={postsarray.length<10} className=" px-4 py-2 flex items-center text-[#828282] rounded-md">Next <FaCaretRight style={{color:"#4cff6d"}} /></button>
          </div>
          <div className='w-[100%] h-[12vh]'></div>


          </div>
       
          <Footer />
        </div>
      )}
      {!loginstate && <Loginas />}
    </div>
  );
}
