import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import nopost from '../Images/nopost.png'

import Followcomp from './followcomp';
import reject from "../Images/reject.svg"
import Post from './post';

import Footer from "./footer";
import profilebg from "../Images/profile_bg.png";
import profilep from "../Images/profilep.png";
import editicon from "../Images/edit-icon.svg";
import settings from "../Images/Settings.svg";
import cross from "../Images/cross.svg";
import profilealt from '../Images/profile2.png';
import posticon from "../Images/posticon.svg";
import plusicon from "../Images/plusicon2.png";

import circle from "../Images/circle.png";
import team0 from "../Images/org.png";
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import team from "../Images/org2.png";
import team2 from "../Images/org3.png";
import yt from "../Images/yt3.png";
import insta from "../Images/insta3.png";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { IoCamera } from "react-icons/io5";
export default function Ownprofilepage() {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const a = useContext(pContext);

  const infoid = localStorage.getItem("infoid");

  const {  ownid, getinfo, infostate, updateinfo,getfollowerslist,followersarray,followingarray, getfollowinglist,mypostsarray,getmypost} = a;
  const _id = ownid;
  useEffect(() => {
    getinfo();
    getmypost(infoid)
  }, []);

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

 
  const [openFollowers, setOpenFollowers] = useState(false);
  const [openAllies, setOpenAllies] = useState(false);
  const [openText, setOpenText] = useState(false);
  const [openContact1, setOpenContact1] = useState(false);
  const [openContact2, setOpenContact2] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openResidence, setOpenResidence] = useState(false);

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

  };
  ;const handleClickToOpenFollowers = () => {
    setOpenFollowers(true);
    getfollowerslist(infoid);

  };const handleClickToOpenAllies = () => {
    setOpenAllies(true);
    getfollowinglist(infoid);
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
    setOpenFollowers(false)
    setOpenAllies(false);
  };

  // const handlec=()=>{
  // }

  return (
    <>
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
                className="border-r-[2px]  border-[#222222]  shadow-b-inner shadow-[#B4FF16] w-full flex justify-center items-center"
                to="/profile"
              >
                {" "}
                <div className=" w-full flex justify-center text-[#656565] text-[3.5vw]">
                  {value.game}
                </div>
              </Link>



              <Link
                className="border-r-[2px]  border-r-[#222222]  w-full flex justify-center items-center"
                to="/profile/about"
              >
                {" "}
                <div className="  text-[3.5vw] text-[#656565] ">About</div>
              </Link>




              <Link
                className=" w-full flex justify-center items-center border-b-[2px] border-b-[#B4FF16] "
                to="/profile/posts"
              >
                {" "}
                <div className="border-[#222222] w-full flex  justify-center text-[#B4FF16] font-mochiy-pop  text-[3.5vw]">
                  Posts
                </div>
              </Link>
            </div>
          </div>








          <div className="w-full flex flex-col justify-center items-center bg-[#0a0a0a00]   ">

          <Link to="/post" className="w-[100%] m-2 h-[7vh] flex justify-center items-center font-mochiy-pop text-[#dadada]  bg-[#0b24284a]"> + Add post </Link>


          {mypostsarray.length === 0 ? (
                   <div className="h-[10rem] flex justify-center items-center">
                   <div className=" flex-col items-center h-[5rem]">
                   <img className="w-[4rem]" src={nopost}  alt="img" ></img>
                   <div className="text-[1rem] text-[#7a7a7a]">No posts</div>
                   </div>
                   </div>
                ) : (

                  mypostsarray.map((post, index) => (
                    <Post key={index} likes={post.likesCount} postid={post._id} postimg={post.PostUrl} profile={post.profilephoto}  description={post.description} name={post.IngameName} realname={post.RealName} data={post} />
                  ))


                )
                
                }

<div className="h-[15vh]"></div>




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
      <Footer />
    </>
  );
}
