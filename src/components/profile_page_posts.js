import React,  { useEffect,useState } from 'react';

import Followcomp from './followcomp';
import nopost from '../Images/nopost.png'
import Post from './post';

import './components.css'
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";

import Footer from "./footer";
import profilebg from "../Images/profile_bg.png";
import profilep from "../Images/profilep.png";
import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Profilepagecommon from './profile_page_common';




export default function Profilepagegames() {
  const { _id } = useParams();
  const a = useContext(pContext);

  const {invite, checkfollow, checkfollowstate,teamname, getteaminfo, playerinfo, getplayerinfo, follow, getinfo,followerIngameName,followerRealName,getfollowerslist,followersarray, getfollowinglist,followingarray ,teamnamein, getotherpost,otherpostsarray } = a;

  useEffect(() => {
    getplayerinfo(_id);
    checkfollow(_id);
    getotherpost(_id)
    getinfo()
   getteaminfo()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const RealName = playerinfo.RealName;
  // console.log("infostate",infostate)
  // console.log("playerinfo",playerinfo)
  const IngameName = playerinfo.IngameName;
  console.log("teamname teamname",teamname)
  // const followerRealName = infostate[0].RealName;
  // const followerIngameName = infostate[0].IngameName;
  const _userid=playerinfo.user;
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const handlec =async () => {
    setLoading2(true);
    try {
      await follow(_id,RealName,IngameName,followerRealName,followerIngameName);
    } catch (error) {
      // Handle error if necessary
    } finally {
      setLoading2(false);
    }


   
  };
  const handleinvite = async() => {
    setLoading3(true);
    try {
      await invite(_userid,RealName,IngameName,followerRealName,followerIngameName,teamnamein);
    } catch (error) {
      // Handle error if necessary
    } finally {
      setLoading3(false);
    }


    
  };
  // about,contact,contact2,text,education , skill1, skill2, skill3, playerid, location, tournament1, tournament2,  infoid
  
  const game = playerinfo.game;
  const followersCount = playerinfo.followersCount;
  const followingCount = playerinfo.followingCount;
  const profilePictureUrl=playerinfo.profilePictureUrl;
  profilebg=playerinfo.bgPictureUrl;







const [openFollowers, setOpenFollowers] = useState(false);
const [openAllies, setOpenAllies] = useState(false);
;const handleClickToOpenFollowers = () => {
  setOpenFollowers(true);
  getfollowerslist(_id);

};const handleClickToOpenAllies = () => {
  setOpenAllies(true);
  getfollowinglist(_id);
};
const handleClose = () => {

  setOpenFollowers(false)
  setOpenAllies(false);

};




  return (
    <>
      <div 
      className=" bg-[#000000] w-full h-[100vh] overflow-y-scroll ">
      
      <Profilepagecommon loading2={loading2} loading3={loading3} profilebg={profilebg} profilePictureUrl={profilePictureUrl} handlec={handlec} checkfollowstate={checkfollowstate} handleinvite={handleinvite} handleClickToOpenFollowers={handleClickToOpenFollowers} handleClickToOpenAllies={handleClickToOpenAllies}  IngameName={IngameName} RealName={RealName} followersCount={followersCount} followingCount={followingCount} />



        <div className=" bg-gradient-to-r from-[#0a0a0a] to-[#0fafb813] h-[3rem] flex  items-center justify-center">
          <div className="bg-[#09090900] w-[90%] h-[2.8rem] flex justify-evenly">
            <Link
              className="border-r-[2px]  border-[#222222] shadow-b-inner shadow-[#B4FF16] w-full flex justify-center items-center"
              to={`/profile/${_id}`}
            >
              {" "}
              <div className=" w-full flex justify-center text-[#656565]  text-[3.5vw]">
                {game}
              </div>
            </Link>

            <Link
              className="border-r-[2px]  border-r-[#222222] w-full flex justify-center items-center"
              to={`/profile/about/${_id}`}
            >
              {" "}
              <div className=" text-[#656565] text-[3.5vw] ">About</div>
            </Link>
            <Link
              className=" w-full flex justify-center items-center  border-b-[2px] border-b-[#B4FF16]"
              to={`/profile/posts/${_id}`}
            >
              {" "}
              <div className="border-[#222222] text-[#B4FF16] w-full flex justify-center text-[#656565]  text-[3.5vw]">
                Posts
              </div>
            </Link>
          </div>
        </div>

     
   



        <div className="w-full flex flex-col justify-center items-center bg-[#000000]   ">



        {otherpostsarray.length === 0 ? (
                   <div className="h-[10rem] flex justify-center items-center">
                   <div className=" flex-col items-center h-[5rem]">
                   <img className="w-[4rem]" src={nopost}  alt="img" ></img>
                   <div className="text-[1rem] text-[#7a7a7a]">No posts</div>
                   </div>
                   </div>
                ) : (

                  otherpostsarray.map((post, index) => (
                    <Post key={index} likes={post.likesCount} postid={post._id} postimg={post.PostUrl} profile={post.profilephoto}  description={post.description} name={post.IngameName} realname={post.RealName} data={post} />
                  ))


                )
                
                }

<div className="h-[15vh]"></div>


{/*           
        <div className="h-[10rem] flex justify-center items-center">
<div className=" flex-col items-center h-[5rem]">
<img className="w-[4rem]" src={nopost} alt="img" ></img>
<div className="text-[1rem] text-[#7a7a7a]">No posts</div>
</div>
</div> */}









       

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







          
        

       
        </div>
      </div>

      <Footer />
    </>
   
  );
}
