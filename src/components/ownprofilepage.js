import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import './components.css'

import loadinggif from '../Images/loading.gif';
import { FaRegEdit } from "react-icons/fa";
import { RiMenuAddFill } from "react-icons/ri";
import profilealt from '../Images/profile2.png';
import { IoCamera } from "react-icons/io5";

import Footer from "./footer";
import profilebg from "../Images/profile_bg.png";
import profilep from "../Images/profilep.png";
import settings from "../Images/Settings.svg";
import cross from "../Images/cross.svg";

import posticon from "../Images/posticon.svg";
import reject from "../Images/reject.svg"
import Followcomp from './followcomp';

import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function Ownprofilepage() {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const a = useContext(pContext);
  const [loading, setLoading] = useState(false);

  const infoid = localStorage.getItem("infoid");

  const {  ownid, getinfo, infostate, updateinfo,getfollowerslist,followersarray,followingarray, getfollowinglist,fetchProfilePicture ,Profilepic,bgpic} = a;
  


  const fetchData = async () => {
    setLoading(true);
    try {
      await getinfo();
      // await fetchProfilePicture(infoid)
       // Assuming getPlayers is a function to fetch players with pagination support
    } catch (error) {
      // Handle error if necessary
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
    
   
  }, []);

  const logoutfun = () => {
    navigate("/");
    localStorage.setItem("token", "");
  };
  const [addedskill, setaddedskill] = useState(" ");
  const [ about,setabout] = useState(" ");
  const [ device,setDevice] = useState(" ");
  const [ playerid,setPlayerid] = useState(" ");
  const [ addedtournament,setAddedTournament] = useState(" ");

  const [open, setOpen] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openDevice, setOpenDevice] = useState(false);
  const [openPlayerid, setOpenPlayerid] = useState(false);
  const [openTournament, setOpenTournament] = useState(false);


  const [openFollowers, setOpenFollowers] = useState(false);
  const [openAllies, setOpenAllies] = useState(false);
  ;const handleClickToOpenFollowers = () => {
    setOpenFollowers(true);
    getfollowerslist(infoid);

  };const handleClickToOpenAllies = () => {
    setOpenAllies(true);
    getfollowinglist(infoid);
  };



  const handleClickToOpen = () => {
    setOpen(true);
  };
  const handleClickToOpenAbout = () => {
    setOpenAbout(true);
  };const handleClickToOpenDevice = () => {
    setOpenDevice(true);
  };const handleClickToOpenPlayerid = () => {
    setOpenPlayerid(true);

  };const handleClickToOpenTournament = () => {
    setOpenTournament(true);

  }

  const handleSubmitskills = () => {
    updateinfo(
      " ",
      " ",
      " ",
      " ",
      " ",
      addedskill,
      " ",
      " ",
      " ",
      " ",
      infoid
    );
    setOpen(false);
  };

  const handleSubmitAbout = () => {
    updateinfo(
      about,
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      infoid
    );
    setOpenAbout(false);
  };
  const handleSubmitDevice = () => {
    updateinfo(
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      device,
      infoid
    );
    setOpenDevice(false);
  };
  const handleSubmitPlayerid = () => {
    updateinfo(
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      playerid,
      " ",
      " ",
      " ",
      infoid
    );
    setOpenPlayerid(false);
  };
  const handleSubmitTournament = () => {
    updateinfo(
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      addedtournament,
      " ",
      infoid
    );
    setOpenTournament(false);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenAbout(false);
    setOpenPlayerid(false);
    setOpenDevice(false);
    setOpenTournament(false)
    setOpenFollowers(false)
    setOpenAllies(false);

  };

  // const handlec=()=>{
  // }

  return (
    <>

{loading && (
            <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000]'>
              <div className='h-[30vh] bg-[#000000]'></div>
              <img className='w-[100vw]' src={loadinggif} alt="Loading" />
              <div className='h-[30vh] bg-[#000000]'></div>
            </div>
          )}
      {infostate.map((value) => (
        <div className="bg-gradient-to-r from-[#000000] to-[#000000] w-full h-[100svh] overflow-y-scroll">
          <ToastContainer />
          <Transition
            show={isOpen}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-50"></div>
          </Transition>

          {/* Sliding menu */}
          <Transition
            show={isOpen}
            enter="transform transition duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed inset-y-0 right-0 flex flex-col w-64 shadow-xl bg-[#0c0c0c]  z-[2]">
              {/* Your menu content here */}
              <div className="w-[100%] flex justify-end ">
                <img
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-[1.7rem] m-3"
                  src={cross}
                  alt="img"
                ></img>
              </div>
              <div className="w-[100%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
                <div className="h-[5rem] w-[100%] flex justify-center  items-center">
                  <button
                    onClick={logoutfun}
                    className="  text-[#828282] text-[5vw]"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </Transition>
          <div>

            <div className="bg-[#000000] relative flex flex-col items-end">
              <div className="pro2"><img className="w-[100vw] h-[6rem]" src={value.bgPictureUrl} alt="Upload Background "></img></div>
              <Link to="/post/bg" style={{color:"#f5f5f5"}} className="bg-[#686868] rounded-[100%] w-[1.5rem] h-[1.5rem] flex justify-center items-center  mt-[-2rem] mr-[1rem]"  ><IoCamera /></Link>
            </div>

            <div className="flex h-[4rem] relative items-center">
              <div className="absolute left-0 bottom-0 flex h-[7rem] ">
                <div className="pro h-[7rem] w-[7rem] rounded-[100%] ml-4">                <img className="w-[7rem] h-[7rem] rounded-[100%]  border-[2px] border-[#4ddcf5]" src={value.profilePictureUrl} alt={profilealt}></img>
</div>
                <Link to="/post/Profile" style={{color:"#f5f5f5"}} className="bg-[#686868] rounded-[100%] w-[1.5rem] h-[1.5rem] flex justify-center items-center mt-[5rem] ml-[-1.3rem]"  ><IoCamera /></Link>
              </div>
              <div className="w-[40%]"></div>
              <div className="flex w-[60%] justify-end ">
                {/* <Link className="m-2" to="/ProfileForm">
                  <img src={editicon}></img>
                </Link> */}

                <Link
                  className="  flex justify-center items-center "
                  to="/post"
                >
                  <img className="w-[1.2rem]" src={posticon} alt="img"></img>
                </Link>
                <div className=" mr-[1rem] ml-[1rem] flex justify-center items-center ">
                  <img
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-[1.2rem]"
                    src={settings}
                    alt="img"
                  ></img>
                </div>

                {/* <div className="flex justify-center items-center text-[#000000] bg-[#B4FF16] border-[#B4FF16] border-[2px] w-[30%] h-[50%] font-medium  rounded-[10px] text-[3vw] p-[3px] mr-[10px]">
                follow
              </div>
              <div className="flex justify-center items-center text-[#ffffff] border-[#B4FF16] border-[2px] w-[30%] h-[50%] font-medium rounded-[10px] text-[3vw] p-[3px]">
                message
              </div> */}
              </div>

              <div></div>
            </div>
          </div>

          <div className="">
            <div>
              <div className="text-[#ffffff] font-mochiy-pop text-[5vw] font-thin ml-[5vw]">
                {value.IngameName}
              </div>
              <div className=" font-medium text-[60%] h-[30%] flex items-center text-[#656565] ml-[5vw]">
                {value.RealName}
              </div>
            </div>







































            <div className="flex  h-[5rem] justify-evenly items-center ">
              <div className="flex w-[94%] h-[4rem] justify-evenly items-center">


                <div
                 onClick={handleClickToOpenFollowers}
                  className=" font-teachers bg-[#272727]  w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] "
                >
                  <div>Endorsing</div>
                  <div>{value.followersCount}</div>
                </div>



                <div
                 onClick={handleClickToOpenAllies}

                  className=" font-teachers bg-[#272727]  w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] "
                >
                  <div>Appreciations</div>
                  <div>{value.followingCount}</div>
                </div>

                <div className=" font-teachers bg-[#272727]  w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] ">
                  <div>People Helped</div>
                  <div>0</div>
                </div>
              </div>
            </div>
          </div>






































































          <div className="bg-gradient-to-r from-[#0a0a0a] to-[#0fafb813] h-[3rem] flex  items-center justify-center ">
            <div className="bg-[#09090900] w-[90%] h-[2.8rem] flex justify-evenly">
              <Link
                className="border-r-[2px]  border-[#222222] border-b-[2px] border-b-[#B4FF16] shadow-b-inner shadow-[#B4FF16] w-full flex justify-center items-center"
                to="/profile"
              >
                {" "}
                <div className=" w-full flex justify-center font-mochiy-pop text-[#B4FF16] text-[3.5vw]">
                  About 
                </div>
              </Link>

              <Link
                className="border-r-[2px]  border-r-[#222222] w-full flex justify-center items-center"
                to="/profile/about"
              >
                {" "}
                <div className=" text-[#656565] text-[3.5vw] ">{value.game}</div>
              </Link>
              <Link
                className=" w-full flex justify-center items-center "
                to="/profile/posts"
              >
                {" "}
                <div className="border-[#222222] w-full flex  justify-center text-[#656565]  text-[3.5vw]">
                  Blogs
                </div>
              </Link>
            </div>
          </div>








          <div className="w-full flex flex-col justify-center items-center bg-[#0a0a0a00]   ">












            
            <div
              key={value.key}
              className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] "
            >

              <div className="flex h-[4rem]">
                <div className="text-[#dadada]   font-teachers  text-[1.1rem] ml-7 mt-2 w-[20%] flex items-center">
                  About
                </div>

                <div className="w-[80%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <button
                      className="w-[1.5rem] text-[#e9e9e9]"
                     
                      onClick={handleClickToOpenAbout}
                    >
                     <FaRegEdit/>
                    </button>
                    {openAbout && (
            <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
                </div>
                <div className="text-[#FFFFFF] text-[4vw]">Edit About</div>
                <textarea
                  className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
                  value={about}
                  onChange={(e) => setabout(e.target.value)}
                />
                <button
                  onClick={handleSubmitAbout}
               
                  className="bg-[#4ddcf5] text-[#000000] mt-[1rem] p-[0.5rem] rounded-[5px] w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          )}

                  </div>
                </div>




              </div>
             <div className="text-[#959595] ml-7 mb-3 mr-4  font-thin text-[4vw] font-teachers from-inherit ">
                {value.about}
              </div>
            </div>






















            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[90%]  font-teachers text-[#dadada]   text-[1.1rem] ml-7 mt-2 flex  items-center">
                  NGO's Registered Website
                </div>
                <div className="w-[80%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <button
                      className="w-[1.5rem] text-[#ececec]"
                    
                      onClick={handleClickToOpenDevice}
                    >
                      <FaRegEdit/>
                    </button>
                    {openDevice && (
            <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
                </div>
                <div className="text-[#FFFFFF] text-[4vw]">Add Website's url</div>
                <textarea
                  className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                />
                <button
                  onClick={handleSubmitDevice}
               
                  className="bg-[#4ddcf5] text-[#000000] mt-[1rem] p-[0.5rem] rounded-[5px] w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
                  </div>
                </div>
              </div>

              <div className="text-[#959595] font-teachers m-3 ml-7 font-light text-[3.5vw] from-inherit ">
                {value.device}
              </div>
            </div>

















            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[40%] font-teachers text-[#dadada]   text-[1rem] ml-7 mt-2 flex items-center">
                  Helpline-Number
                </div>
                <div className="w-[60%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <button
                      className="w-[1.5rem] text-[#f8f8f8]"
                   
                      onClick={handleClickToOpenPlayerid}
                    >
                     <FaRegEdit/>
                    </button>
                    {openPlayerid && (
            <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
                </div>
                <div className="text-[#FFFFFF] text-[4vw]">Add Helpline Number</div>
                <textarea
                  className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
                  value={playerid}
                  onChange={(e) => setPlayerid(e.target.value)}
                />
                <button
                  onClick={handleSubmitPlayerid}
               
                  className="bg-[#4ddcf5] text-[#000000] mt-[1rem] p-[0.5rem] rounded-[5px] w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
                  </div>
                </div>
              </div>

              <div className="text-[#959595] font-teachers m-3 ml-7 font-light text-[3.5vw] from-inherit ">
                {value.playerid}
              </div>
            </div> 







        
























            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="w-full flex  h-[4rem]">
                <div className="text-[#dadada]   font-teachers text-[1rem] ml-7  w-[80%] flex items-center">
                NGO Members
                </div>

                <div className=" flex items-center mr-4">
                  <button
                    className=" text-[#fbfbfb]"
                    
                    onClick={handleClickToOpen}
                  >
                   <RiMenuAddFill/>
                  </button>
                  {/* <Dialog open={open} onClose={handleClose}>
                    <DialogTitle className=" font-mochiy-pop text-[2vw]">
                      {"What is your Speciality"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Example: Assaulter,IGL etc...
                      </DialogContentText>
                      <TextField
                        autoFocus
                        required
                        type="text"
                        name="addedskill"
                        id="addedskill"
                        value={addedskill}
                        onChange={(e) => setaddedskill(e.target.value)}
                        margin="dense"
                        label=""
                        fullWidth
                        variant="standard"
                      />
                    </DialogContent>
                    <DialogActions className="bg-[#aeff00]">
                      <button
                        className="w-[100%] bg-[#91ff00]"
                        onClick={handleSubmitskills}
                        color="red"
                        autoFocus
                      >
                        Save
                      </button>
                    </DialogActions>
                  </Dialog> */}
                  {open && (
            <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
                </div>
                <div className="text-[#FFFFFF] text-[4vw]">Add Name of NGO Member</div>
                <textarea
                  className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
                  value={addedskill}
                  onChange={(e) => setaddedskill(e.target.value)}
                />
                <button
                  onClick={handleSubmitskills}
               
                  className="bg-[#4ddcf5] text-[#000000] mt-[1rem] p-[0.5rem] rounded-[5px] w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
                </div>
              </div>
              {value.skill2.map((val) => (
                <div className="text-[#c4c4c4] font-teachers w-[80%] m-3 ml-7 h-[2rem] flex items-center font-light text-[14px] from-inherit border-b-[1px] border-[#2222228e]">
                  {val.skill}
                </div>
              ))}
              {/* <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
             {value.skill1}
            </div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
            {value.skill1}
            </div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
            {value.skill3}
            </div> */}
            </div>





















            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1 mb-[11vh] border-[1px]  border-[#262626] ">
              <div className="w-full flex h-[4rem]">
                <div className="text-[#dadada]   text-[1rem] ml-7  w-[80%] flex items-center">
                 Social Impact
                </div>

                <div className=" flex items-center mr-4">
                  <button
                    className=" text-[#f8f8f8]"
                    onClick={handleClickToOpenTournament}
                  >
                    <RiMenuAddFill/>
                  </button>
                  {/* <Dialog open={openTournament} onClose={handleClose}>
                    <DialogTitle >
                      {"Add your Achievements"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Example: BGIS 2023 (Runner up)
                      </DialogContentText>
                      <TextField
                        autoFocus
                        required
                        type="text"
                        name="addedTournament"
                        id="addedTournament"
                        value={addedtournament}
                        onChange={(e) => setAddedTournament(e.target.value)}
                        margin="dense"
                        label=""
                        fullWidth
                        variant="standard"
                      />
                    </DialogContent>
                    <DialogActions className="bg-[#aeff00]">
                      <button
                        className="w-[100%] "
                        onClick={handleSubmitTournament}
                        
                        autoFocus
                      >
                        Save
                      </button>
                    </DialogActions>
                  </Dialog> */}
                    {openTournament && (
            <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
                </div>
                <div className="text-[#FFFFFF] text-[4vw]">Add </div>
                <textarea
                  className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
                  value={addedtournament}
                  onChange={(e) => setAddedTournament(e.target.value)}
                />
                <button
                  onClick={handleSubmitTournament}
               
                  className="bg-[#4ddcf5] text-[#000000] mt-[1rem] p-[0.5rem] rounded-[5px] w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
                  
                </div>
              </div>
              {value.tournament2.map((val) => (
                <div className="text-[#c4c4c4] font-teachers w-[80%] m-3 ml-7 h-[2rem] flex items-center font-light text-[14px] from-inherit border-b-[1px] border-[#2222228e]">
                  {val.tournament}
                </div>
              ))}
              
            </div>














            
                 
                    {/* <Dialog open={openFollowers} onClose={handleClose} >
                      <DialogTitle className="  w-[80vw] bg-[#020909] border-[#23757560] text-[#ebebeb] border-t-[1px]  border-l-[1px] border-r-[1px] ">
                        <div className="flex">
                          <div className="w-[90%]">Followers</div>
                          <img onClick={handleClose} className="w-[10%]" src={reject} alt="img"></img>
                        </div>
                      </DialogTitle>


                      <DialogContent className=" bg-[#020909] border-[#23757560]  border-b-[1px]  border-l-[1px] border-r-[1px] w-[80vw] h-[60vh]  ">
                 
                        <div className="w-full ">
{followersarray.map((value)=>(
                <Followcomp key={value.id} RealName={value.followerRealName} IngameName={value.followerIngameName} />
                ))}
</div>


                      </DialogContent>
                    </Dialog> */}
                
                {openFollowers && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
                </div>
                <div className="w-[70vw] h-[50vh]">{followersarray.map((value)=>(
                <Followcomp key={value.id} RealName={value.followerRealName} IngameName={value.followerIngameName} />
                ))}</div>
                
              </div>
            </div>
                    )}



                    {openAllies && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
                </div>
                <div className="w-[70vw] h-[50vh]">{followingarray.map((value)=>(
                <Followcomp key={value.id} RealName={value.RealName} IngameName={value.IngameName} />
                ))}</div>
                
              </div>
            </div>
                    )}

{/* 
                    <Dialog open={openAllies} onClose={handleClose} >
                      <DialogTitle className="  w-[80vw] bg-[#020909] border-[#23757560] text-[#ebebeb] border-t-[1px]  border-l-[1px] border-r-[1px] ">
                        <div className="flex">
                          <div className="w-[90%]">Allies</div>
                          <img onClick={handleClose} className="w-[10%]" src={reject} alt="img"></img>
                        </div>
                      </DialogTitle>


                      <DialogContent className=" bg-[#020909] border-[#23757560]  border-b-[1px]  border-l-[1px] border-r-[1px] w-[80vw] h-[60vh]  ">
                 
                        <div className="w-full ">
{followingarray.map((value)=>(
                <Followcomp key={value.id} RealName={value.RealName} IngameName={value.IngameName} />
                ))}
</div>


                      </DialogContent>
                    </Dialog>
                 */}












          </div>
        </div>
      ))}
      <div className="bg-[#ff000000]">
      <Footer />
      </div>
    </>
  );
}













// import React, { useState, useEffect, useContext } from "react";
// import { Transition } from "@headlessui/react";
// import './components.css'
// import loadinggif from '../Images/loading.gif';
// import profilealt from '../Images/profile2.png';
// import { IoCamera } from "react-icons/io5";
// import Footer from "./footer";
// import profilebg from "../Images/profile_bg.png";
// import profilep from "../Images/profilep.png";
// import settings from "../Images/Settings.svg";
// import cross from "../Images/cross.svg";
// import posticon from "../Images/posticon.svg";
// import reject from "../Images/reject.svg";
// import Followcomp from './followcomp';
// import { pContext } from "../context/profilecontext";
// import { useNavigate, Link, useParams } from "react-router-dom";
// import { ToastContainer } from "react-toastify";

// export default function Ownprofilepage() {
//   let navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const a = useContext(pContext);
//   const [loading, setLoading] = useState(false);

//   const infoid = localStorage.getItem("infoid");
//   const { ownid, getinfo, infostate, updateinfo, getfollowerslist, followersarray, followingarray, getfollowinglist, fetchProfilePicture, Profilepic, bgpic } = a;

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       await getinfo();
//     } catch (error) {
//       // Handle error if necessary
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const logoutfun = () => {
//     navigate("/");
//     localStorage.setItem("token", "");
//   };

//   const [addedskill, setaddedskill] = useState(" ");
//   const [about, setabout] = useState(" ");
//   const [device, setDevice] = useState(" ");
//   const [playerid, setPlayerid] = useState(" ");
//   const [addedtournament, setAddedTournament] = useState(" ");

//   const [open, setOpen] = useState(false);
//   const [openAbout, setOpenAbout] = useState(false);
//   const [openDevice, setOpenDevice] = useState(false);
//   const [openPlayerid, setOpenPlayerid] = useState(false);
//   const [openTournament, setOpenTournament] = useState(false);
//   const [openFollowers, setOpenFollowers] = useState(false);
//   const [openAllies, setOpenAllies] = useState(false);

//   const handleClickToOpenFollowers = () => {
//     setOpenFollowers(true);
//     getfollowerslist(infoid);
//   };

//   const handleClickToOpenAllies = () => {
//     setOpenAllies(true);
//     getfollowinglist(infoid);
//   };

//   const handleClickToOpen = () => {
//     setOpen(true);
//   };

//   const handleClickToOpenAbout = () => {
//     setOpenAbout(true);
//   };

//   const handleClickToOpenDevice = () => {
//     setOpenDevice(true);
//   };

//   const handleClickToOpenPlayerid = () => {
//     setOpenPlayerid(true);
//   };

//   const handleClickToOpenTournament = () => {
//     setOpenTournament(true);
//   };

//   const handleSubmitskills = () => {
//     updateinfo(
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       addedskill,
//       " ",
//       " ",
//       " ",
//       " ",
//       infoid
//     );
//     setOpen(false);
//   };

//   const handleSubmitAbout = () => {
//     updateinfo(
//       about,
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       infoid
//     );
//     setOpenAbout(false);
//   };

//   const handleSubmitDevice = () => {
//     updateinfo(
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       device,
//       infoid
//     );
//     setOpenDevice(false);
//   };

//   const handleSubmitPlayerid = () => {
//     updateinfo(
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       playerid,
//       " ",
//       " ",
//       " ",
//       infoid
//     );
//     setOpenPlayerid(false);
//   };

//   const handleSubmitTournament = () => {
//     updateinfo(
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       " ",
//       addedtournament,
//       " ",
//       infoid
//     );
//     setOpenTournament(false);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setOpenAbout(false);
//     setOpenPlayerid(false);
//     setOpenDevice(false);
//     setOpenTournament(false);
//     setOpenFollowers(false);
//     setOpenAllies(false);
//   };

//   return (
//     <>
//       {loading && (
//         <div className='absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000]'>
//           <div className='h-[30vh] bg-[#000000]'></div>
//           <img className='w-[100vw]' src={loadinggif} alt="Loading" />
//           <div className='h-[30vh] bg-[#000000]'></div>
//         </div>
//       )}
//       {infostate.map((value) => (
//         <div className="bg-gradient-to-r from-[#000000] to-[#000000] w-full h-[100vh] overflow-y-scroll">
//           <ToastContainer />
//           <Transition
//             show={isOpen}
//             enter="transition-opacity duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black opacity-50"></div>
//           </Transition>

//           {/* Sliding menu */}
//           <Transition
//             show={isOpen}
//             enter="transform transition duration-300"
//             enterFrom="translate-x-full"
//             enterTo="translate-x-0"
//             leave="transform transition duration-300"
//             leaveFrom="translate-x-0"
//             leaveTo="translate-x-full"
//           >
//             <div className="fixed inset-y-0 right-0 flex flex-col w-64 shadow-xl bg-[#0c0c0c]  z-[2]">
//               <div className="w-[100%] flex justify-end ">
//                 <img
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="w-[1.7rem] m-3"
//                   src={cross}
//                   alt="img"
//                 ></img>
//               </div>
//               <div className="w-[100%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
//                 <div className="h-[5rem] w-[100%] flex justify-center  items-center">
//                   <button
//                     onClick={logoutfun}
//                     className="  text-[#828282] text-[5vw]"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </Transition>
//           <div>
//             <div className="bg-[#000000] relative flex flex-col items-end">
//               <div className="pro2"><img className="w-[100vw] h-[6rem]" src={value.bgPictureUrl} alt="Upload Background "></img></div>
//               <Link to="/post/bg" style={{color:"#f5f5f5"}} className="bg-[#686868] rounded-[100%] w-[1.5rem] h-[1.5rem] flex justify-center items-center  mt-[-2rem] mr-[1rem]"  ><IoCamera /></Link>
//             </div>

//             <div className="flex h-[4rem] relative items-center">
//               <div className="absolute left-0 bottom-0 flex h-[7rem] ">
//                 <div className="pro h-[7rem] w-[7rem] rounded-[100%] ml-4">
//                   <img className="w-[7rem] h-[7rem] rounded-[100%]  border-[2px] border-[#4ddcf5]" src={value.profilePictureUrl} alt={profilealt}></img>
//                 </div>
//                 <Link to="/post/Profile" style={{color:"#f5f5f5"}} className="bg-[#686868] rounded-[100%] w-[1.5rem] h-[1.5rem] flex justify-center items-center mt-[5rem] ml-[-1.3rem]"  ><IoCamera /></Link>
//               </div>
//               <div className="w-[40%]"></div>
//               <div className="flex w-[60%] justify-end ">
//                 <Link className="  flex justify-center items-center " to="/post">
//                   <img className="w-[1.2rem]" src={posticon} alt="img"></img>
//                 </Link>
//                 <div className=" mr-[1rem] ml-[1rem] flex justify-center items-center ">
//                   <img onClick={() => setIsOpen(!isOpen)} className="w-[1.2rem]" src={settings} alt="img"></img>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-end justify-center mt-[0rem]">
//               <div className="text-[#FFFFFF] text-[4vw]  flex justify-center items-center">{value.fname} {value.lname}</div>
//             </div>

//             <div className="flex justify-center items-center mt-[0.5rem] ">
//               <div className="text-[#b4b4b4] text-[3vw] flex justify-center items-center">@{value.gamertag}</div>
//             </div>
//           </div>

//           {/* Follow/Following */}
//           <div className="bg-[#000000] flex justify-between items-center mt-[1.5rem] px-[2rem]">
//             <div className="text-[#828282] text-[2.5vw]">Follower's</div>
//             <div className="text-[#828282] text-[2.5vw]">Allies</div>
//           </div>

//           <div className="bg-[#000000] flex justify-between items-center mt-[0rem] px-[2rem]">
//             <div className="text-[#4ddcf5] text-[4vw]">{value.followers.length}</div>
//             <div className="text-[#4ddcf5] text-[4vw]">{value.following.length}</div>
//           </div>

//           <div className="bg-[#000000] flex justify-between items-center mt-[0rem] px-[2rem]">
//             <div onClick={handleClickToOpenFollowers} className="text-[#828282] text-[2.5vw] underline decoration-[#828282]">View Followers</div>
//             <div onClick={handleClickToOpenAllies} className="text-[#828282] text-[2.5vw] underline decoration-[#828282]">View Allies</div>
//           </div>

//           <div className="px-[1rem]">
//             {/* About */}
//             <div className="bg-[#0c0c0c] rounded-[5px]  p-[0.5rem] mt-[2rem]">
//               <div className="flex justify-between items-center">
//                 <div className="text-[#FFFFFF] text-[4vw]">About</div>
//                 <button onClick={handleClickToOpenAbout} className="text-[#4ddcf5] text-[4vw]">Edit</button>
//               </div>
//               <div className="text-[#828282] text-[3vw] mt-[0.5rem]">{value.about}</div>
//             </div>

//             {/* Games */}
//             <div className="bg-[#0c0c0c] rounded-[5px]  p-[0.5rem] mt-[2rem]">
//               <div className="flex justify-between items-center">
//                 <div className="text-[#FFFFFF] text-[4vw]">Games</div>
//                 <button onClick={handleClickToOpen} className="text-[#4ddcf5] text-[4vw]">Add</button>
//               </div>
//               <div className="text-[#828282] text-[3vw] mt-[0.5rem]">{value.skills.join(", ")}</div>
//             </div>

//             {/* Player ID */}
//             <div className="bg-[#0c0c0c] rounded-[5px]  p-[0.5rem] mt-[2rem]">
//               <div className="flex justify-between items-center">
//                 <div className="text-[#FFFFFF] text-[4vw]">Player ID</div>
//                 <button onClick={handleClickToOpenPlayerid} className="text-[#4ddcf5] text-[4vw]">Edit</button>
//               </div>
//               <div className="text-[#828282] text-[3vw] mt-[0.5rem]">{value.playerid}</div>
//             </div>

//             {/* Device */}
//             <div className="bg-[#0c0c0c] rounded-[5px]  p-[0.5rem] mt-[2rem]">
//               <div className="flex justify-between items-center">
//                 <div className="text-[#FFFFFF] text-[4vw]">Device</div>
//                 <button onClick={handleClickToOpenDevice} className="text-[#4ddcf5] text-[4vw]">Edit</button>
//               </div>
//               <div className="text-[#828282] text-[3vw] mt-[0.5rem]">{value.device}</div>
//             </div>

//             {/* Tournament */}
//             <div className="bg-[#0c0c0c] rounded-[5px]  p-[0.5rem] mt-[2rem]">
//               <div className="flex justify-between items-center">
//                 <div className="text-[#FFFFFF] text-[4vw]">Tournament</div>
//                 <button onClick={handleClickToOpenTournament} className="text-[#4ddcf5] text-[4vw]">Add</button>
//               </div>
//               <div className="text-[#828282] text-[3vw] mt-[0.5rem]">{value.tournament}</div>
//             </div>
//           </div>

//           {/* Followcomp */}
//           {openFollowers && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
//               <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
//                 <div className="flex justify-end">
//                   <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
//                 </div>
//                 <Followcomp data={followersarray} />
//               </div>
//             </div>
//           )}

//           {openAllies && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
//               <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
//                 <div className="flex justify-end">
//                   <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
//                 </div>
//                 <Followcomp data={followingarray} />
//               </div>
//             </div>
//           )}

//           {/* Edit dialogs */}
//           {open && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
//               <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
//                 <div className="flex justify-end">
//                   <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
//                 </div>
//                 <div className="text-[#FFFFFF] text-[4vw]">Add Skills</div>
//                 <input
//                   type="text"
//                   className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
//                   value={addedskill}
//                   onChange={(e) => setaddedskill(e.target.value)}
//                 />
//                 <button
//                   onClick={handleSubmitskills}
//                   className="bg-[#4ddcf5] text-[#000000] mt-[1rem] p-[0.5rem] rounded-[5px] w-full"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}

//           {openAbout && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
//               <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
//                 <div className="flex justify-end">
//                   <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
//                 </div>
//                 <div className="text-[#FFFFFF] text-[4vw]">Edit About</div>
//                 <textarea
//                   className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
//                   value={about}
//                   onChange={(e) => setabout(e.target.value)}
//                 />
//                 <button
//                   onClick={handleSubmitAbout}
//                   className="bg-[#4ddcf5] text-[#000000] mt-[1rem] p-[0.5rem] rounded-[5px] w-full"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}

//           {openPlayerid && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
//               <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
//                 <div className="flex justify-end">
//                   <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
//                 </div>
//                 <div className="text-[#FFFFFF] text-[4vw]">Edit Player ID</div>
//                 <input
//                   type="text"
//                   className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
//                   value={playerid}
//                   onChange={(e) => setplayerid(e.target.value)}
//                 />
//                 <button
//                   onClick={handleSubmitPlayerid}
//                   className="bg-[#4ddcf5] text-[#000000] mt-[1rem] p-[0.5rem] rounded-[5px] w-full"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}

//           {openDevice && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
//               <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
//                 <div className="flex justify-end">
//                   <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
//                 </div>
//                 <div className="text-[#FFFFFF] text-[4vw]">Edit Device</div>
//                 <input
//                   type="text"
//                   className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
//                   value={device}
//                   onChange={(e) => setdevice(e.target.value)}
//                 />
//                 <button
//                   onClick={handleSubmitDevice}
//                   className="bg-[#4ddcf5] text-[#000000] mt-[1rem] p-[0.5rem] rounded-[5px] w-full"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}

//           {openTournament && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
//               <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
//                 <div className="flex justify-end">
//                   <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
//                 </div>
//                 <div className="text-[#FFFFFF] text-[4vw]">Add Tournament</div>
//                 <input
//                   type="text"
//                   className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
//                   value={tournament}
//                   onChange={(e) => settournament(e.target.value)}
//                 />
//                 <button
//                   onClick={handleSubmitTournament}
//                   className="bg-[#4ddcf5] text-[#000000] mt-[1rem] p-[0.5rem] rounded-[5px] w-full"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profilecomp;
