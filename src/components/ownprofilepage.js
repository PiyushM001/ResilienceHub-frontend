import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import './components.css'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import loadinggif from '../Images/loading.gif';


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
        <div className="bg-gradient-to-r from-[#000000] to-[#000000] w-full h-[100vh] overflow-y-scroll">
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
                  className=" border-[1px] font-teachers border-[#00fbff23] bg-[#00fbff09]  w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] glass3"
                >
                  <div>Followers</div>
                  <div>{value.followersCount}</div>
                </div>



                <div
                 onClick={handleClickToOpenAllies}

                  className=" border-[1px] font-teachers border-[#00fbff23] bg-[#00fbff09]  w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] glass3"
                >
                  <div>Allies</div>
                  <div>{value.followingCount}</div>
                </div>

                <div className=" border-[1px] font-teachers border-[#00fbff20] bg-[#00fbff09]  w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] glass3">
                  <div>Tournaments</div>
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
                  {value.game}
                </div>
              </Link>

              <Link
                className="border-r-[2px]  border-r-[#222222] w-full flex justify-center items-center"
                to="/profile/about"
              >
                {" "}
                <div className=" text-[#656565] text-[3.5vw] ">About</div>
              </Link>
              <Link
                className=" w-full flex justify-center items-center "
                to="/profile/posts"
              >
                {" "}
                <div className="border-[#222222] w-full flex  justify-center text-[#656565]  text-[3.5vw]">
                  Posts
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
                <div className="text-[#37c5b0]   font-teachers  text-[1.1rem] ml-7 mt-2 w-[20%] flex items-center">
                  About
                </div>

                <div className="w-[80%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <Button
                      className="w-[3rem] mr-4"
                      variant="outlined"
                      color="primary"
                      onClick={handleClickToOpenAbout}
                    >
                      +
                    </Button>
                    <Dialog open={openAbout} onClose={handleClose}>
                      <DialogTitle className=" font-mochiy-pop text-[2vw]">
                        {" Write About yourself"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                         Make your profile attractive
                        </DialogContentText>
                        <TextField
                          autoFocus
                          required
                          type="text"
                          name="about"
                          id="about"
                          value={about}
                          onChange={(e) => setabout(e.target.value)}
                          margin="dense"
                          label=""
                          fullWidth
                          variant="standard"
                        />
                      </DialogContent>
                      <DialogActions className="bg-[#aeff00]">
                        <Button
                          className="w-[100%] "
                          onClick={handleSubmitAbout}
                          color="red"
                          autoFocus
                        >
                          Save
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>




              </div>
             <div className="text-[#959595] ml-7 mb-3 mr-4  font-thin text-[4vw] font-teachers from-inherit ">
                {value.about}
              </div>
            </div>














            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[20%]  font-teachers text-[#37c5b0]   text-[1.1rem] ml-7 mt-2 flex  items-center">
                  Device
                </div>
                <div className="w-[80%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <Button
                      className="w-[3rem] mr-4"
                      variant="outlined"
                      color="primary"
                      onClick={handleClickToOpenDevice}
                    >
                      +
                    </Button>
                    <Dialog open={openDevice} onClose={handleClose}>
                      <DialogTitle className=" font-mochiy-pop text-[2vw]">
                        {"Add your Device"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Example:Iqoo Neo 6 (90 FPS)
                        </DialogContentText>
                        <TextField
                          autoFocus
                          required
                          type="text"
                          name="device"
                          id="device"
                          value={device}
                          onChange={(e) => setDevice(e.target.value)}
                          margin="dense"
                          label=""
                          fullWidth
                          variant="standard"
                        />
                      </DialogContent>
                      <DialogActions className="bg-[#aeff00]">
                        <Button
                          className="w-[100%] bg-[#91ff00]"
                          onClick={handleSubmitDevice}
                          color="red"
                          autoFocus
                        >
                          Save
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>

              <div className="text-[#959595] font-teachers m-3 ml-7 font-light text-[3.5vw] from-inherit ">
                {value.device}
              </div>
            </div>

















            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[40%] font-teachers text-[#37c5b0]   text-[1rem] ml-7 mt-2 flex items-center">
                  Player-Id
                </div>
                <div className="w-[60%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <Button
                      className="w-[2rem] text-[red]"
                      variant="outlined"
                      color="primary"
                      onClick={handleClickToOpenPlayerid}
                    >
                      +
                    </Button>
                    <Dialog open={openPlayerid} onClose={handleClose}>
                      <DialogTitle className=" font-mochiy-pop text-[2vw]">
                        {"Add your Game ID  "}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                        </DialogContentText>
                        <TextField
                          autoFocus
                          required
                          type="text"
                          name="playerid"
                          id="playerid"
                          value={playerid}
                          onChange={(e) => setPlayerid(e.target.value)}
                          margin="dense"
                          label=""
                          fullWidth
                          variant="standard"
                        />
                      </DialogContent>
                      <DialogActions className="bg-[#aeff00]">
                        <Button
                          className="w-[100%] bg-[#91ff00]"
                          onClick={handleSubmitPlayerid}
                          color="red"
                          autoFocus
                        >
                          Save
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </div>

              <div className="text-[#959595] font-teachers m-3 ml-7 font-light text-[3.5vw] from-inherit ">
                {value.playerid}
              </div>
            </div>

            {/* 


          <div className=' flex justify-center'>
          
          <Button variant="outlined" color="primary"
              onClick={handleClickToOpen}>
              + 
          </Button>
          <Dialog open={open} onClose={handleSubmitskills} >
              <DialogTitle className='text-[red] font-mochiy-pop'>{"Add your Skill"}</DialogTitle>
              <DialogContent>
                  <DialogContentText>
                      Example: Assaulter,Team work,IGL etc...
                  </DialogContentText>
                  <TextField
          autoFocus
          required
          type="text" name="addedskill" id="addedskill" value={addedskill} onChange={e => setaddedskill(e.target.value)}
          margin="dense"
          label=""
          fullWidth
          variant="standard"
        />
              </DialogContent>
              <DialogActions className='bg-[#aeff00]'>
                  <Button className='w-[100%] bg-[#91ff00]' onClick={handleSubmitskills}
                      color="red" autoFocus>
                      Save
                  </Button>
              </DialogActions>
          </Dialog>
      </div>


        */}
























            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="w-full flex  h-[4rem]">
                <div className="text-[#37c5b0]   font-teachers text-[1rem] ml-7  w-[80%] flex items-center">
                Speciality
                </div>

                <div className=" flex items-center mr-4">
                  <Button
                    className="w-[3rem] mr-4"
                    variant="outlined"
                    color="primary"
                    onClick={handleClickToOpen}
                  >
                    +
                  </Button>
                  <Dialog open={open} onClose={handleClose}>
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
                      <Button
                        className="w-[100%] bg-[#91ff00]"
                        onClick={handleSubmitskills}
                        color="red"
                        autoFocus
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog>
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
                <div className="text-[#37c5b0]   text-[1rem] ml-7  w-[80%] flex items-center">
                  Achievements
                </div>

                <div className=" flex items-center mr-4">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleClickToOpenTournament}
                  >
                    +
                  </Button>
                  <Dialog open={openTournament} onClose={handleClose}>
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
                      <Button
                        className="w-[100%] "
                        onClick={handleSubmitTournament}
                        
                        autoFocus
                      >
                        Save
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
              {value.tournament2.map((val) => (
                <div className="text-[#c4c4c4] font-teachers w-[80%] m-3 ml-7 h-[2rem] flex items-center font-light text-[14px] from-inherit border-b-[1px] border-[#2222228e]">
                  {val.tournament}
                </div>
              ))}
              
            </div>














            
                 
                    <Dialog open={openFollowers} onClose={handleClose} >
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
                    </Dialog>
                






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
                












          </div>
        </div>
      ))}
      <div className="bg-[#ff000000]">
      <Footer />
      </div>
    </>
  );
}
