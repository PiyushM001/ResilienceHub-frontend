import React, { useEffect, useState, useContext, useCallback } from 'react';
import './components.css';
import { Link } from 'react-router-dom';
import { IconButton, InputBase } from '@material-ui/core';
import profile from '../Images/profile2.png';
import chat from '../Images/chat-icon.svg';
import profilep from "../Images/profilep.png";
import { pContext } from "../context/profilecontext";
import bell from '../Images/notification-icon.svg';
import searchicon from '../Images/Searchicon.png';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';

export default function Header() {
  let location = useLocation();
  let path = location.pathname;
  
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

  return (
    <div className='flex w-full h-[10vh] absolute top-0 bg-[#000000] justify-evenly items-center headerbg z-[10] min-[500px]:w-[500px]'>
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
          <InputBase
            placeholder="Search players..."
            className="bg-[#373737] rounded-[5px] text-[#ffffff] pl-3 ml-1"
            value={query}
            onChange={handleSearchChange}
            style={{ color: 'white', paddingLeft: '10px' }}
          />
          <IconButton style={{ color: 'white' }}>
            <img className='w-[1rem]' src={searchicon} alt="Search" />
          </IconButton>
        </div>
      ) : (
        <div className='text-[#ffffff] w-[55%] font-mochiy-pop'>MyAllies</div>
      )}

      <Link to="/notification">
        <div style={{ position: 'relative' }}>
          <img className='w-[5vw]' src={bell} alt="Notifications" />
          {NotificationCount > 0 && (
            <span className='notification-badge w-[12px] h-[12px] bg-[red] rounded-[100%] text-[#fbfbfb] text-[10px] absolute top-[-2px] right-[-2px] flex justify-center items-center '>{NotificationCount}</span>
          )}
        </div>
      </Link>

      <img className='w-[7vw]' src={chat} alt="Chat" />
    </div>
  );
}
