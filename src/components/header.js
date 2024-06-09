import React, { useEffect, useState, useContext, useCallback } from 'react';
import './components.css';
import { Link } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import settings from "../Images/Settings.svg";
import cross from "../Images/cross.svg";
import { MdCall } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
// import { IconButton, InputBase } from '@material-ui/core';
import profile from '../Images/profile2.png';
import chat from '../Images/chat-icon.svg';
import profilep from "../Images/profilep.png";
import { pContext } from "../context/profilecontext";
import bell from '../Images/notification-icon.svg';
import searchicon from '../Images/Searchicon.png';
import _ from 'lodash';
import { ToastContainer, toast } from "react-toastify";

import { useLocation } from 'react-router-dom';

export default function Header() {
  let location = useLocation();
  let path = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const a = useContext(pContext);
  const { getplayers, getnotification,NotificationCount  } = a;
  const [query, setQuery] = useState('');
  const [loginState, setLoginState] = useState();

  useEffect(() => {
   

    const localToken = localStorage.getItem("token");
    if (localToken) {
      setLoginState(true);
    } else {
      setLoginState(false);
    }
  }, []);

  const logoutfun = () => {
   
    localStorage.setItem("token", "");
  };


  const debouncedSearch = useCallback(
    _.debounce((searchQuery) => {
      getplayers(1,searchQuery);
    }, 500), // Adjust the debounce delay as needed
    []
  );

  useEffect(() => {
    if (path === '/players') {
      debouncedSearch(query);
    }
  }, [query, debouncedSearch, path]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };
const toasterr=()=>{
  toast.warning("Chat Feature Will be Available Soon");
}
  return (
    <div className='flex w-full h-[10svh] absolute top-0 bg-[#000000] justify-evenly items-center headerbg z-[10] min-[500px]:w-[500px]'>
      <ToastContainer/>
      
      <Transition
            show={isOpen}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black headerbg opacity-50"></div>
          </Transition>

          <Transition
            show={isOpen}
            enter="transform transition duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed inset-y-0 right-0 flex flex-col w-64 shadow-xl headerbg bg-[#0c0c0c]  z-[2]">
              {/* Your menu content here */}
              <div className="w-[100%] flex justify-end ">
                <img
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-[1.7rem] m-3"
                  src={cross}
                  alt="img"
                ></img>
              </div>
              <div className="w-[100%] mt-1 headerbg bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
                <div className="h-[30svh] w-[100%] flex-col justify-center  items-center">
                  <button
                    onClick={logoutfun}
                    className="  text-[#ffffff] flex items-center text-[5vw] font-teachers pl-10 mb-5"
                  >
                   <IoLogOutOutline />  <span className='mx-2'> Logout</span>
                  </button>
                  <div className=' text-[#ffffff] text-[5vw] font-teachers pl-10 flex-col items-center '>  Contact us  <div className='flex items-center text-[4vw]'><MdCall /> 9352403045</div> <div className='flex items-center text-[4vw]'><MdCall /> 6280070751</div></div>
                </div>
              </div>
            </div>
          </Transition>


      {loginState && (
        <Link className='w-[3.5rem]' to="/profile">
          <img className='w-[80%] rounded-[100%]' src={profile} alt="Profile" />
        </Link>
      )}

      {!loginState && (
        <Link to="/loginas">
          <div className='border-[2px] border-[#B4FF16] rounded-[10px] pl-2 pr-2 pt-1 pb-1 text-[#ffffff] text-[3vw]'>
            Sign up
          </div>
        </Link>
      )}

      {path === "/players" ? (
        <div className='flex items-center bg-[#a7b9b75d] rounded-[5px]  border-2 border-[#2c2c2c] w-[55%]'>
          <input
            placeholder="Search players..."
            className="bg-[#373737] w-[80%] rounded-[5px] text-[#ffffff] pl-3 m-1"
            value={query}
            onChange={handleSearchChange}
            style={{ color: 'white', paddingLeft: '10px' }}
          />
          <button style={{ color: 'white' }}>
            <img className='w-[1rem]' src={searchicon} alt="Search" />
          </button>
        </div>
      ) : (
        <div className='text-[#ffffff] w-[55%] font-mochiy-pop'>TeamUp</div>
      )}

      <Link to="/notification">
        <div style={{ position: 'relative' }}>
          <img className='w-[5vw]' src={bell} alt="Notifications" />
          {NotificationCount > 0 && (
            <span className='notification-badge w-[12px] h-[12px] bg-[red] rounded-[100%] text-[#fbfbfb] text-[10px] absolute top-[-2px] right-[-2px] flex justify-center items-center '>{NotificationCount}</span>
          )}
        </div>
      </Link>

      {/* <img onClick={toasterr} className='w-[7vw]' src={chat} alt="Chat" /> */}
      <img
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-[1.2rem]"
                    src={settings}
                    alt="img"
                  ></img>
    </div>
  );
}
