import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";


import reject from "../Images/reject.svg"
import Followcomp from './followcomp';
import { FaRegEdit } from "react-icons/fa";
import Footer from "./footer";
import profilebg from "../Images/profile_bg.png";
import profilep from "../Images/profilep.png";
import settings from "../Images/Settings.svg";
import cross from "../Images/cross.svg";
import profilealt from '../Images/profile2.png';

import posticon from "../Images/posticon.svg";

import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoCamera } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function Ownprofilepage() {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const a = useContext(pContext);

  const infoid = localStorage.getItem("infoid");
  const { _idd } = useParams();
  const {  ownid, getinfo,infostate, updateinfo ,followersarray,followingarray, getfollowinglist,getfollowerslist,fetchProfilePicture,Profilepic,bgpic} = a;
  const _id = ownid;
  useEffect(() => {
    getinfo();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const logoutfun = () => {
    navigate("/");
    localStorage.setItem("token", "");
  };
  // const [addedskill, setaddedskill] = useState(" ");
  const [ text,setText] = useState(" ");
  const [ contact1,setContact1] = useState(" ");
  const [ contact2,setContact2] = useState(" ");
  const [ education,setEducation] = useState(" ");
  const [  residence,setResidence] = useState(" ");

 

  const [openText, setOpenText] = useState(false);
  const [openContact1, setOpenContact1] = useState(false);
  const [openContact2, setOpenContact2] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openResidence, setOpenResidence] = useState(false);
  const [openFollowers, setOpenFollowers] = useState(false);
  const [openAllies, setOpenAllies] = useState(false);

  const handleClickToOpenText = () => {
    setOpenText(true);
  };
  const handleClickToOpenEducation = () => {
    setOpenEducation(true);
  };const handleClickToOpenResidence = () => {
    setOpenResidence(true);
  };const handleClickToOpenContact1 = () => {
    setOpenContact1(true);

  };const handleClickToOpenContact2 = () => {
    setOpenContact2(true);

  };const handleClickToOpenFollowers = () => {
    setOpenFollowers(true);
    getfollowerslist(_idd);

  };const handleClickToOpenAllies = () => {
    setOpenAllies(true);
    getfollowinglist(_idd);
  };

  const handleSubmitText = () => {
    updateinfo(
      " ",
      " ",
      " ",
      text,
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      infoid
    );
    setOpenText(false);
  };

  const handleSubmitEducation = () => {
    updateinfo(
      " ",
      " ",
      " ",
      " ",
      education,
      " ",
      " ",
      " ",
      " ",
      " ",
      infoid
    );
    setOpenEducation(false);
  };
  const handleSubmitContact1 = () => {
    updateinfo(
      " ",
      contact1,
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
    setOpenContact1(false);
  };
  const handleSubmitContact2 = () => {
    updateinfo(
      " ",
      " ",
      contact2,
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      infoid
    );
    setOpenContact2(false);
  };
  const handleSubmitResidence = () => {
    updateinfo(
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      residence,
      " ",
      " ",
      infoid
    );
    setOpenResidence(false);
  };
  const handleClose = () => {
    setOpenText(false);
    setOpenContact2(false);
    setOpenContact1(false);
    setOpenEducation(false);
    setOpenResidence(false);
    setOpenFollowers(false);
    setOpenAllies(false);
  };

  // const handlec=()=>{
  // }

  return (
    <>
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
                  to={`/followers/${_id}`}
                  className=" border-[1px] font-teachers border-[#00fbff20] bg-[#00fbff09]  w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] glass3 "
                >
                  <div>Followers</div>
                  <div>{value.followersCount}</div>
                </div>

                <div
                onClick={handleClickToOpenAllies}
                  className=" border-[1px] font-teachers border-[#00fbff20] bg-[#00fbff09] w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] glass3 "
                >
                  <div>Allies</div>
                  <div>{value.followingCount}</div>
                </div>

                <div className=" border-[1px] font-teachers border-[#00fbff20] bg-[#00fbff09]  w-[30%] h-[3rem] flex flex-col justify-center items-center text-[#a7a7a7] rounded-[10px] text-[3.5vw] glass3 ">
                  <div>Tournaments</div>
                  <div>0</div>
                </div>
              </div>
            </div>
          </div>
























          

          <div className="bg-[#00fbff09] h-[3rem] flex  items-center justify-center ">
            <div className="bg-[#09090900] w-[90%] h-[2.8rem] flex justify-evenly">
              <Link
                className="border-r-[2px]  border-[#222222]  shadow-b-inner shadow-[#B4FF16] w-full flex justify-center items-center"
                to="/profile"
              >
                {" "}
                <div className=" w-full flex justify-center text-[#656565] text-[3.5vw]">
                  {value.game}
                </div>
              </Link>



              <Link
                className="border-r-[2px]  border-r-[#222222] border-b-[2px] border-b-[#B4FF16] w-full flex justify-center items-center"
                to="/profile/about"
              >
                {" "}
                <div className="  text-[#B4FF16] text-[3.5vw] font-mochiy-pop ">About</div>
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















{/*             
            <div
              key={value.key}
              className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] "
            >

              <div className="flex h-[4rem]">
                <div className="text-[#37c5b0]   font-teachers  text-[1.1rem] ml-7 mt-2 w-[20%] flex items-center">
                  General
                </div>

                <div className="w-[80%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <Button
                      className="w-[3rem] mr-4"
                      variant="outlined"
                      color="primary"
                      onClick={handleClickToOpenText}
                    >
                      +
                    </Button>
                    <Dialog open={openText} onClose={handleClose}>
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
                          name="text"
                          id="text"
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          margin="dense"
                          label=""
                          fullWidth
                          variant="standard"
                        />
                      </DialogContent>
                      <DialogActions className="bg-[#aeff00]">
                        <Button
                          className="w-[100%] "
                          onClick={handleSubmitText}
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
                {value.text}
              </div>
            </div> */}



 <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[40%] font-teachers text-[#37c5b0]   text-[1rem] ml-7 mt-2 flex items-center">
                  About
                </div>
                <div className="w-[60%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <button
                      className="w-[1.5rem] text-[#f8f8f8]"
                   
                      onClick={handleClickToOpenText}
                    >
                     <FaRegEdit/>
                    </button>
                    {openText && (
            <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
                </div>
                <div className="text-[#FFFFFF] text-[4vw]">Write About Yourself</div>
                <textarea
                  className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button
                  onClick={handleSubmitText}
               
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
                {value.text}
              </div>
            </div>

        
















{/* 
            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[20%]  font-teachers text-[#37c5b0]   text-[1.1rem] ml-7 mt-2 flex  items-center">
                  Email
                </div>
                <div className="w-[80%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <Button
                      className="w-[3rem] mr-4"
                      variant="outlined"
                      color="primary"
                      onClick={handleClickToOpenContact1}
                    >
                      +
                    </Button>
                    <Dialog open={openContact1} onClose={handleClose}>
                      <DialogTitle className=" font-mochiy-pop text-[2vw]">
                        {"Add your Email"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Example: abc@gmail.com
                        </DialogContentText>
                        <TextField
                          autoFocus
                          required
                          type="text"
                          name="contact1"
                          id="contact1"
                          value={contact1}
                          onChange={(e) => setContact1(e.target.value)}
                          margin="dense"
                          label=""
                          fullWidth
                          variant="standard"
                        />
                      </DialogContent>
                      <DialogActions className="bg-[#aeff00]">
                        <Button
                          className="w-[100%] bg-[#91ff00]"
                          onClick={handleSubmitContact1}
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
                {value.contact1}
              </div>
            </div>
 */}

<div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[40%] font-teachers text-[#37c5b0]   text-[1rem] ml-7 mt-2 flex items-center">
                  Email
                </div>
                <div className="w-[60%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <button
                      className="w-[1.5rem] text-[#f8f8f8]"
                   
                      onClick={handleClickToOpenContact1}
                    >
                     <FaRegEdit/>
                    </button>
                    {openContact1 && (
            <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
                </div>
                <div className="text-[#FFFFFF] text-[4vw]">Enter your Email</div>
                <textarea
                  className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
                  value={contact1}
                  onChange={(e) => setContact1(e.target.value)}
                />
                <button
                  onClick={handleSubmitContact1}
               
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
                {value.contact1}
              </div>
            </div>
















            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[40%] font-teachers text-[#37c5b0]   text-[1rem] ml-7 mt-2 flex items-center">
                  Phone Number
                </div>
                <div className="w-[60%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <button
                      className="w-[1.5rem] text-[#f8f8f8]"
                   
                      onClick={handleClickToOpenContact2}
                    >
                     <FaRegEdit/>
                    </button>
                    {openContact2 && (
            <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
                </div>
                <div className="text-[#FFFFFF] text-[4vw]">Enter your Phone Number</div>
                <textarea
                  className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
                  value={contact2}
                  onChange={(e) => setContact2(e.target.value)}
                />
                <button
                  onClick={handleSubmitContact2}
               
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
                {value.contact2}
              </div>
            </div>











{/* 
            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[40%] font-teachers text-[#37c5b0]   text-[1rem] ml-7 mt-2 flex items-center">
                  Phone Number
                </div>
                <div className="w-[60%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <Button
                      className="w-[2rem] text-[red]"
                      variant="outlined"
                      color="primary"
                      onClick={handleClickToOpenContact2}
                    >
                      +
                    </Button>
                    <Dialog open={openContact2} onClose={handleClose}>
                      <DialogTitle className=" font-mochiy-pop text-[2vw]">
                        {"Add your Contact Number "}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                        </DialogContentText>
                        <TextField
                          autoFocus
                          required
                          type="text"
                          name="contact2"
                          id="contact2"
                          value={contact2}
                          onChange={(e) => setContact2(e.target.value)}
                          margin="dense"
                          label=""
                          fullWidth
                          variant="standard"
                        />
                      </DialogContent>
                      <DialogActions className="bg-[#aeff00]">
                        <Button
                          className="w-[100%] bg-[#91ff00]"
                          onClick={handleSubmitContact2}
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
                {value.contact2}
              </div>
            </div>


 */}









{/* 
            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[40%] font-teachers text-[#37c5b0]   text-[1rem] ml-7 mt-2 flex items-center">
                  Education
                </div>
                <div className="w-[60%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <Button
                      className="w-[2rem] text-[red]"
                      variant="outlined"
                      color="primary"
                      onClick={handleClickToOpenEducation}
                    >
                      +
                    </Button>
                    <Dialog open={openEducation} onClose={handleClose}>
                      <DialogTitle className=" font-mochiy-pop text-[2vw]">
                        {"Add your current Education"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                        </DialogContentText>
                        <TextField
                          autoFocus
                          required
                          type="text"
                          name="education"
                          id="education"
                          value={education}
                          onChange={(e) => setEducation(e.target.value)}
                          margin="dense"
                          label=""
                          fullWidth
                          variant="standard"
                        />
                      </DialogContent>
                      <DialogActions className="bg-[#aeff00]">
                        <Button
                          className="w-[100%] bg-[#91ff00]"
                          onClick={handleSubmitEducation}
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
                {value.education}
              </div>
            </div> */}


<div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[40%] font-teachers text-[#37c5b0]   text-[1rem] ml-7 mt-2 flex items-center">
                  Education
                </div>
                <div className="w-[60%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <button
                      className="w-[1.5rem] text-[#f8f8f8]"
                   
                      onClick={handleClickToOpenEducation}
                    >
                     <FaRegEdit/>
                    </button>
                    {openEducation && (
            <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
                </div>
                <div className="text-[#FFFFFF] text-[4vw]">Add Your Education</div>
                <textarea
                  className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
                <button
                  onClick={handleSubmitEducation}
               
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
                {value.education}
              </div>
            </div>














{/* 

            <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1 mb-[11vh] border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[40%] font-teachers text-[#37c5b0]   text-[1rem] ml-7 mt-2 flex items-center">
                  Residence
                </div>
                <div className="w-[60%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <Button
                      className="w-[2rem] text-[red]"
                      variant="outlined"
                      color="primary"
                      onClick={handleClickToOpenResidence}
                    >
                      +
                    </Button>
                    <Dialog open={openResidence} onClose={handleClose}>
                      <DialogTitle className=" font-mochiy-pop text-[2vw]">
                        {"Add your current Address"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                        </DialogContentText>
                        <TextField
                          autoFocus
                          required
                          type="text"
                          name="residence"
                          id="residence"
                          value={residence}
                          onChange={(e) => setResidence(e.target.value)}
                          margin="dense"
                          label=""
                          fullWidth
                          variant="standard"
                        />
                      </DialogContent>
                      <DialogActions className="bg-[#aeff00]">
                        <Button
                          className="w-[100%] bg-[#91ff00]"
                          onClick={handleSubmitResidence}
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
                {value.location}
              </div>
            </div> */}

            
<div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1 mb-[11vh]  border-[1px]  border-[#262626] ">
              <div className="flex h-[4rem]">
                <div className="w-[40%] font-teachers text-[#37c5b0]   text-[1rem] ml-7 mt-2 flex items-center">
                 Residence
                </div>
                <div className="w-[60%] flex justify-end mr-4">
                  <div className=" flex items-center">
                    <button
                      className="w-[1.5rem] text-[#f8f8f8]"
                   
                      onClick={handleClickToOpenResidence}
                    >
                     <FaRegEdit/>
                    </button>
                    {openResidence && (
            <div  className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
                </div>
                <div className="text-[#FFFFFF] text-[4vw]">Add Your Address</div>
                <textarea
                  className="bg-[#1a1a1a] text-[#FFFFFF] p-[0.5rem] mt-[0.5rem] rounded-[5px] w-full"
                  value={residence}
                  onChange={(e) => setResidence(e.target.value)}
                />
                <button
                  onClick={handleSubmitResidence}
               
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
                {value.location}
              </div>
            </div>




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
{followersarray.map((value)=>(
                <Followcomp key={value.id} RealName={value.followerRealName} IngameName={value.followerIngameName} />
                ))}
</div>


                      </DialogContent>
                    </Dialog>
                 */}











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











































            {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2">Tournaments</div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
{value.tournament1}
            </div>
            <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
            {value.tournament2}
            </div>
            
          </div> */}

            {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2">Metrics</div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
             <span className="text-[#b4b4b4]  font-normal text-[3.5vw]"> Player ID -</span> 243565545667
            </div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
             <span className="text-[#b4b4b4]  font-normal text-[3.5vw]">Gmail -</span> abc@gmail.com
            </div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
             <span className="text-[#b4b4b4]  font-normal text-[3.5vw]">Contact -</span> 9352403045
            </div>
          </div> */}

            {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2">Season 17</div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
             <span className="text-[#b4b4b4]  font-normal text-[3.5vw]"> KD -</span> 5.4
            </div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
             <span className="text-[#b4b4b4]  font-normal text-[3.5vw]">Match Played -</span> 567
            </div>
            <div className="text-[#959595] m-3 font-thin text-[3vw] from-inherit ">
             <span className="text-[#b4b4b4]  font-normal text-[3.5vw]"> Matches won -</span> 108
            </div>
          </div> */}

            {/* 
          <div className="w-[90%] mt-1 pb-2 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3  mt-2">Team</div>
            <div className="text-[#959595] m-3 mb-3 font-medium text-[3.5vw] from-inherit flex h-[3rem]">
              <img className="w-[15vw] h-[15vw] mb-[2px]  border-[2px] border-[#222222] rounded-[10px]" src={team}></img>
              <div className="h-[3rem]">
                <div className="text-[#959595] ml-3 mb-2 font-medium text-[3.8vw] from-inherit">
                  Slayers
                </div>
                <div className="text-[#959595] ml-3 font-thin text-[2.5vw] from-inherit">
                  March 2023 - Present{" "}
                </div>
              </div>
            </div> */}

            {/* <div className="text-[#959595] m-3 mt-5  mb-5 font-medium text-[3.5vw] from-inherit flex h-[3rem]">
              <img className="w-[15vw] h-[15vw]  border-[2px] border-[#222222] rounded-[10px]" src={team2}></img>
              <div className="h-[3rem]">
                <div className="text-[#959595] ml-3 mb-2 font-medium text-[3.8vw] from-inherit">
                  Soul
                </div>
                <div className="text-[#959595] ml-3 font-thin text-[2.5vw] from-inherit">
                  April 2021 - March 2023
                </div>
              </div>
            </div>
          </div> */}

            {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2">Organisation</div>
            <div className="text-[#959595] m-3 mb-7 font-medium text-[3.5vw] from-inherit flex h-[3rem]">
              <img className="w-[15vw] h-[15vw] mb-5 border-[2px] border-[#222222] rounded-[10px]" src={team0}></img>
              <div className="h-[3rem]">
                <div className="text-[#959595] ml-3 mb-2 font-medium text-[3.8vw] from-inherit">
                  URExETC
                </div>
                <div className="text-[#959595] ml-3 font-thin text-[2.5vw] from-inherit">
                  March 2023 - Present{" "}
                </div>
              </div>
            </div>
          </div> */}

            {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
            <div className="text-[#ffffff] ml-3 mt-2 flex">Social Media </div>
            <div className="flex m-5" >
            <img className="w-[7vw] h-[7vw] mr-5" src={insta}></img>
            <img className="w-[8vw] h-[7vw]" src={yt}></img>
            </div>
          </div>
           */}
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
}
