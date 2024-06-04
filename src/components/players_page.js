import React, { useEffect, useState, useContext } from 'react';
import Footer from './footer';
import Header from './header';
import Player from './player';
import loadinggif from '../Images/loading.gif';
import { pContext } from "../context/profilecontext";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";

export default function Players() {
  const a = useContext(pContext);
  const { getplayers, users } = a;

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Adjust the page size as needed

  useEffect(() => {
    fetchData();
  }, [page]); 

  const fetchData = async () => {
    setLoading(true);
    try {
      await getplayers(page); // Assuming getPlayers is a function to fetch players with pagination support
    } catch (error) {
      // Handle error if necessary
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <div className='flex flex-col w-full h-[100svh]'>
        <Header />
        <div className='flex flex-col flex-wrap items-center overflow-y-scroll w-full h-[100svh] bg-[#000000] text-[#ffffff]'>
          {loading && (
            <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1]'>
              <div className='h-[30vh] bg-[#000000]'></div>
              <img className='w-[100vw]' src={loadinggif} alt="Loading" />
              <div className='h-[30vh] bg-[#000000]'></div>
            </div>
          )}
          <div className='w-[98vw] mt-[10vh] mb-[12vh] flex flex-wrap justify-evenly'>
            {users.map((value) => (
              <Player
                key={value._id}
                id={value._id}
                player={value.IngameName}
                realname={value.RealName}
                game={value.game}
                trophy={value.trophy}
                porfileimg={value.profilePictureUrl}
                followingCount={value.followingCount}
                followersCount={value.followersCount}
                skill={value.skill2}
              />
            ))}

<div className="flex justify-center mt-4 w-[100%]">
            <button onClick={handlePrevPage} disabled={page === 1 } className="px-4 py-2 flex items-center text-[#828282] rounded-md"><FaCaretLeft style={{color:"#4cff6d"}} />Previous</button>
            <button onClick={handleNextPage} disabled={users.length<10} className=" px-4 py-2 flex items-center text-[#828282] rounded-md">Next <FaCaretRight style={{color:"#4cff6d"}} /></button>
          </div>
          </div>
         
        </div>
        <Footer />
      </div>
    </>
  );
}
