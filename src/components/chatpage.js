import React, { useEffect, useState, useContext,useRef } from 'react';
import { pContext } from "../context/profilecontext";
import loadinggif from '../Images/loading.gif';
import pp from '../Images/org.png';
import Chatcomp from './chatcomp';
import io from 'socket.io-client';
import { IoIosSend } from "react-icons/io";
import Footer from './footer';
const MyRealName = localStorage.getItem("realname");
const infoid = localStorage.getItem("infoid");

const time = new Date().toLocaleTimeString(); // Update to get current time
// const port = "https://thrive-backend-o6k3.onrender.com"
// const socket = io('http://localhost:5000'); 

const socket = io('https://thrive-backend-o6k3.onrender.com'); 
// const socket = io(process.env.REACT_APP_port);

export default function Chatpage() {
  const a = useContext(pContext);
  const {
    getteaminfo,
    teamarray,
    createteam,
    checkteam,
    teamnamein,
    chatfun,
    chatarray,
    getChats,
    setChatArray,
  } = a;

  const teamname = "team7";
  const [msg, setmsg] = useState("");
  const [loading, setLoading] = useState(true);
const [chatarray2,setchatarray2]=useState(chatarray)
const [showFooter, setShowFooter] = useState(true);
const chatRef = useRef(null);


  const fetchData = async () => {
    try {
      await  getteaminfo();
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching chats:', error);
    } finally {
    
      chatRef.current?.scrollIntoView()
    }
  };

  useEffect(() => {
    setLoading(true);
     fetchData();
     chatRef.current?.scrollIntoView() 
     setchatarray2(chatarray)

    socket.emit("joinRoom", teamnamein); // Join the room for the team

    socket.on("newMessage", (message) => {
      setchatarray2((chatarray) => [...chatarray, message]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

useEffect(()=>{    
  chatRef.current?.scrollIntoView() 


 },[chatarray2])


  const handleChat = () => {

    const messageData = {
      teamname: teamnamein,
      userId: infoid,
      userRealName: MyRealName,
      time: time,
      message: msg
    };
    // Send message to the server
    socket.emit("sendMessage", messageData);
    setmsg(""); // Clear the input after sending a message
  };

  const handleInputFocus = () => {
    setShowFooter(false); // Hide the footer when input is focused
  };

  return (
    <div className='bg-[#000000] h-[100svh] w-full'>
      {loading && (
        <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000]'>
          <div className='h-[30vh] bg-[#000000]'></div>
          <img className='w-[100vw]' src={loadinggif} alt='Loading' />
          <div className='h-[30vh] bg-[#000000]'></div>
        </div>
      )}

      {!loading && (
        <div className='flex flex-col items-center w-[100vw] h-[100svh] bg-[#000000]'>
          <div className='bg-[#323232] h-[10svh] w-full flex justify-center items-center glass3 mb-1 headerbg'>
            <div className='w-[3.5rem]'>
              <img className='w-[80%] border-[2px] border-[#717171] rounded-[100%]' src={pp} alt='Profile' />
            </div>
            <div className='w-[70%] flex-col justify-center'>
              <div className='text-[#ffffff] font-mochiy-pop text-[4vw] w-[80%]'>{teamnamein}</div>
              <div className='flex text-[#9c9c9c] text-[3.2vw] font-teachers'>
                {teamarray.map((value) => (
                  <div className='mr-1' key={value.id}>{value.followerIngameName}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#d35151] w-[95%]">
            <div    className='h-[70svh] w-full overflow-y-scroll text-[#c7c7c7]'>
              {   chatarray2.map((val) => (
                <Chatcomp key={val.id} name={val.userRealName} msg={val.message} time={val.time} />
              ))}
              <div ref={chatRef} className=' '></div>
            </div>

            <div className='h-[10svh]  bg-[#b3a7a7] flex justify-center items-center'>
              <div className='w-[95%] bg-[#000000] h-full flex items-center'>
                <input
                  placeholder='Start chatting'
                  value={msg}
                  onFocus={handleInputFocus} // Hide footer when input is focused
                  onBlur={() => setShowFooter(true)}
                  onChange={(e) => setmsg(e.target.value)}
                  className='bg-[#111112] pl-2 w-[90%] rounded-[10px] h-[75%] text-[#dadada] border-[#7a7a7a] rounded-r-[0px] border-[1px]'
                />
                <button className='p-2 pl-3 pr-3 rounded-[5px] h-[75%] border-[#dfdfdf] rounded-l-[0px] border-r-[1px] border-t-[1px] border-b-[1px] text-[#a8a8a8] font-mochiy-pop' onClick={handleChat}><IoIosSend /></button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showFooter && <Footer/> }
      
    </div>
  );
}
