// import React,  { useEffect,useState } from 'react';

// import reject from "../Images/reject.svg"
// import Followcomp from './followcomp';


// import './components.css'
// // import Dialog from "@material-ui/core/Dialog";
// // import DialogTitle from "@material-ui/core/DialogTitle";
// // import DialogContent from "@material-ui/core/DialogContent";

// import Footer from "./footer";
// import profilebg from "../Images/profile_bg.png";
// import profilep from "../Images/profilep.png";
// import { pContext } from "../context/profilecontext";
// import { useContext } from "react";
// import { Link, useParams } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import Profile_page_common from './profile_page_common';




// export default function Othersaboutprofile() {
//   const { _id } = useParams();
//   const a = useContext(pContext);

//   const {invite, checkfollow, checkfollowstate,teamname, getteaminfo,teamnamein, playerinfo, getplayerinfo, follow,getinfo,followerIngameName,followerRealName,getfollowerslist,followersarray, getfollowinglist,followingarray  } = a;

//   useEffect(() => {
//     // console.log("chal rha")
//     getplayerinfo(_id);
//     checkfollow(_id);
    
//     getinfo()
//    getteaminfo()
//     // eslint-disable-line react-hooks/exhaustive-deps
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   const RealName = playerinfo.RealName;
//   // console.log("infostate",infostate)
//   // console.log("playerinfo",playerinfo)
//   const IngameName = playerinfo.IngameName;
//   console.log("teamname teamname",teamname)
//   // const followerRealName = infostate[0].RealName;
//   // const followerIngameName = infostate[0].IngameName;
//   const _userid=playerinfo.user;


//   const [loading2, setLoading2] = useState(false);
//   const [loading3, setLoading3] = useState(false);
//   const handlec =async () => {
//     setLoading2(true);
//     try {
//       await follow(_id,RealName,IngameName,followerRealName,followerIngameName);
//     } catch (error) {
//       // Handle error if necessary
//     } finally {
//       setLoading2(false);
//     }


   
//   };
//   const handleinvite = async() => {
//     setLoading3(true);
//     try {
//       await invite(_userid,RealName,IngameName,followerRealName,followerIngameName,teamnamein);
//     } catch (error) {
//       // Handle error if necessary
//     } finally {
//       setLoading3(false);
//     }


    
//   };
//   // about,contact,contact2,text,education , skill1, skill2, skill3, playerid, location, tournament1, tournament2,  infoid
  
//   const game = playerinfo.game;
//   const followersCount = playerinfo.followersCount;
//   const followingCount = playerinfo.followingCount;
// const text=playerinfo.text;
// const contact1=playerinfo.contact1;
// const contact2=playerinfo.contact2;
// const education=playerinfo.education;
// const location=playerinfo.location;
// const profilePictureUrl=playerinfo.profilePictureUrl;
// profilebg=playerinfo.bgPictureUrl;





// const [openFollowers, setOpenFollowers] = useState(false);
// const [openAllies, setOpenAllies] = useState(false);
// ;const handleClickToOpenFollowers = () => {
//   setOpenFollowers(true);
//   getfollowerslist(_id);

// };const handleClickToOpenAllies = () => {
//   setOpenAllies(true);
//   getfollowinglist(_id);
// };
// const handleClose = () => {

//   setOpenFollowers(false)
//   setOpenAllies(false);

// };




//   return (
//     <>
//       <div 
//       className=" bg-[#000000] w-full h-[100vh] overflow-y-scroll ">
//       <Profile_page_common loading2={loading2} loading3={loading3} profilebg={profilebg} profilePictureUrl={profilePictureUrl} handlec={handlec} checkfollowstate={checkfollowstate} handleinvite={handleinvite} handleClickToOpenFollowers={handleClickToOpenFollowers} handleClickToOpenAllies={handleClickToOpenAllies}  IngameName={IngameName} RealName={RealName} followersCount={followersCount} followingCount={followingCount} />



//         <div className=" bg-gradient-to-r from-[#0a0a0a] to-[#0fafb813] h-[3rem] flex  items-center justify-center">
//           <div className="bg-[#09090900] w-[90%] h-[2.8rem] flex justify-evenly">
//             <Link
//               className="border-r-[2px]  border-[#222222]  shadow-b-inner shadow-[#B4FF16] w-full flex justify-center items-center"
//               to={`/other/${_id}`}
//             >
//               {" "}
//               <div className=" w-full flex justify-center text-[#656565]  text-[3.5vw]">
//                 {game}
//               </div>
//             </Link>

//             <Link
//               className="border-r-[2px]  border-r-[#222222] border-b-[2px] border-b-[#B4FF16] w-full flex justify-center items-center"
//               to={`/other/about/${_id}`}
//             >
//               {" "}
//               <div className="  text-[#B4FF16] text-[3.5vw] ">About</div>
//             </Link>
//             <Link
//               className=" w-full flex justify-center items-center "
//               to={`/other/posts/${_id}`}
//             >
//               {" "}
//               <div className="border-[#222222] w-full flex justify-center text-[#656565]  text-[3.5vw]">
//                 Posts
//               </div>
//             </Link>
//           </div>
//         </div>



     
   



//         <div className="w-full flex flex-col justify-center items-center bg-[#0a0a0a] mb-5  ">



          
//         <div  className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626]    ">
//             <div className="text-[#37c5b0] text-[1.1rem] font-teachers ml-7 mt-2">General</div>
//             <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4 mr-3 font-thin text-[4vw] from-inherit ">
//             {text}
//             </div>
//           </div>
//           <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626]     ">
//             <div className="text-[#37c5b0] text-[1.1rem] font-teachers ml-7 mt-2">Email</div>
//             <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4  mr-3 font-light text-[3.5vw] from-inherit ">
//               {contact1}
//             </div>
//           </div>


//           <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1   border-[1px]  border-[#262626]     ">
//             <div className="text-[#37c5b0] ml-7 mt-2">Phone Number</div>
//             <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4  mr-3   font-light text-[3.5vw] from-inherit ">
//               {contact2}
//             </div>
//           </div>

//           <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1   border-[1px]  border-[#262626]     ">
//             <div className="text-[#37c5b0] ml-7 mt-2">Education</div>
//             <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4  mr-3   font-light text-[3.5vw] from-inherit ">
//               {education}
//             </div>
//           </div>

//           <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1 mb-1  border-[1px]  border-[#262626]     ">
//             <div className="text-[#37c5b0] ml-7 mt-2">Location</div>
//             <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4  mr-3   font-light text-[3.5vw] from-inherit ">
//               {location}
//             </div>
//           </div>

//           {/* <div
//             key={key}
//             className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] "
//           >
          
//           </div> */}
//           {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
//             <div className="text-[#ffffff] ml-5 mt-2">Device</div>
//             <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
//               {device}
//             </div> */}
//           {/* </div> */}
//           {/* <div className="w-[90%] mt-1 bg-[#0c0c0c] border-b-[1px] border-[#222222] ">
//             <div className="text-[#ffffff] ml-5 mt-2">Player-ID</div>
//             <div className="text-[#959595] m-3 font-light text-[3.5vw] from-inherit ">
//               {playerid}
//             </div>
//           </div> */}































         









// {/* 
//           <Dialog open={openFollowers} onClose={handleClose} >
//                       <DialogTitle className="  w-[80vw] bg-[#020909] border-[#23757560] text-[#ebebeb] border-t-[1px]  border-l-[1px] border-r-[1px] ">
//                         <div className="flex">
//                           <div className="w-[90%]">Followers</div>
//                           <img onClick={handleClose} className="w-[10%]" src={reject} alt="img" ></img>
//                         </div>
//                       </DialogTitle>


//                       <DialogContent className=" bg-[#020909] border-[#23757560]  border-b-[1px]  border-l-[1px] border-r-[1px] w-[80vw] h-[60vh]  ">
                 
//                         <div className="w-full ">
// {followersarray.map((value)=>(
//                 <Followcomp key={value.id} RealName={value.followerRealName} IngameName={value.followerIngameName} />
//                 ))}
// </div>


//                       </DialogContent>
//                     </Dialog>
                






//                     <Dialog open={openAllies} onClose={handleClose} >
//                       <DialogTitle className="  w-[80vw] bg-[#020909] border-[#23757560] text-[#ebebeb] border-t-[1px]  border-l-[1px] border-r-[1px] ">
//                         <div className="flex">
//                           <div className="w-[90%]">Allies</div>
//                           <img onClick={handleClose} className="w-[10%]" src={reject} alt="img" ></img>
//                         </div>
//                       </DialogTitle>


//                       <DialogContent className=" bg-[#020909] border-[#23757560]  border-b-[1px]  border-l-[1px] border-r-[1px] w-[80vw] h-[60vh]  ">
                 
//                         <div className="w-full ">
// {followingarray.map((value)=>(
//                 <Followcomp key={value.id} RealName={value.RealName} IngameName={value.IngameName} />
//               ))}
// </div>


//                       </DialogContent>
//                     </Dialog> */}
                


//                 {openFollowers && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
//               <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
//                 <div className="flex justify-end">
//                   <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
//                 </div>
//                 <div className="w-[70vw] h-[50vh]">{followersarray.map((value)=>(
//                 <Followcomp key={value.id} RealName={value.followerRealName} IngameName={value.followerIngameName} />
//                 ))}</div>
                
//               </div>
//             </div>
//                     )}



//                     {openAllies && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
//               <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
//                 <div className="flex justify-end">
//                   <button onClick={handleClose} className="text-[#4ddcf5]">Close</button>
//                 </div>
//                 <div className="w-[70vw] h-[50vh]">{followingarray.map((value)=>(
//                 <Followcomp key={value.id} RealName={value.RealName} IngameName={value.IngameName} />
//                 ))}</div>
                
//               </div>
//             </div>
//                     )}






          
  
//         </div>
//       </div>

//       <Footer />
//     </>
   
//   );
// }



import React, { useEffect, useState } from "react";
import Followcomp from "./followcomp";
import "./components.css";
import loadinggif from "../Images/loading.gif";
import Footer from "./footer";

import { pContext } from "../context/profilecontext";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Profilepagecommon from "./profile_page_common";






export default function Othersaboutprofile() {

    const {_id} = useParams();
      const [loading, setLoading] = useState(true);

      const a = useContext(pContext);
      const [loading2,setLoading2] = useState(false);
      const [loading3, setLoading3] = useState(false);

      const {
        invite,
        tournamentarray,
        skillsarray,
        checkfollow,
        checkfollowstate,
        teamnamein,
        getteaminfo,
        playerinfo,
        getplayerinfo,
        follow,
        getinfo,
        followerIngameName,
        followerRealName,
        getfollowerslist,
        followersarray,
        getfollowinglist,
        followingarray,
      } = a;
    
      const fetchData = async () => {
        setLoading(true);
        try {
          await getplayerinfo(_id);
        } catch (error) {
          // Handle error if necessary
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        // console.log("chal rha")
        fetchData();
        checkfollow(_id);
    
        getinfo();
        getteaminfo();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
      const RealName = playerinfo.RealName;
    
      const IngameName = playerinfo.IngameName;
      const _userid = playerinfo.user;
    
      const handlec = async () => {
        setLoading2(true);
        try {
          await follow(
            _id,
            RealName,
            IngameName,
            followerRealName,
            followerIngameName
          );
        } catch (error) {
          // Handle error if necessary
        } finally {
          setLoading2(false);
        }
      };
      const handleinvite = async () => {
        setLoading3(true);
        try {
          await invite(
            _userid,
            RealName,
            IngameName,
            followerRealName,
            followerIngameName,
            teamnamein
          );
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
      const device = playerinfo.device;
      const about = playerinfo.about;
      const profilePictureUrl = playerinfo.profilePictureUrl;
     const profilebg = playerinfo.bgPictureUrl;
    
      const playerid = playerinfo.playerid;
    
      const [openFollowers, setOpenFollowers] = useState(false);
      const [openAllies, setOpenAllies] = useState(false);
      const handleClickToOpenFollowers = () => {
        setOpenFollowers(true);
        getfollowerslist(_id);
      };
      const handleClickToOpenAllies = () => {
        setOpenAllies(true);
        getfollowinglist(_id);
      };
      const handleClose = () => {
        setOpenFollowers(false);
        setOpenAllies(false);
      };


  return (
    <div className="w-full h-[100svh] bg-[#000000]  ">
     about page this is
      {loading && (
        <div className="absolute w-full inset-0 opacity-90 fill-neutral-950 z-[1000]">
          <div className="h-[30vh] bg-[#000000]"></div>
          <img className="w-[100vw]" src={loadinggif} alt="Loading" />
          <div className="h-[30vh] bg-[#000000]"></div>
        </div>
      )}
      <div className=" bg-[#000000] w-full h-[100vh] overflow-y-scroll ">
        <Profilepagecommon
          loading2={loading2}
          loading3={loading3}
          profilebg={profilebg}
          profilePictureUrl={profilePictureUrl}
          handlec={handlec}
          checkfollowstate={checkfollowstate}
          handleinvite={handleinvite}
          handleClickToOpenFollowers={handleClickToOpenFollowers}
          handleClickToOpenAllies={handleClickToOpenAllies}
          IngameName={IngameName}
          RealName={RealName}
          followersCount={followersCount}
          followingCount={followingCount}
        />

        <div className=" bg-gradient-to-r from-[#0a0a0a] to-[#0fafb813] h-[3rem] flex  items-center justify-center">
          <div className="bg-[#09090900] w-[90%] h-[2.8rem] flex justify-evenly">
            <Link
              className="border-r-[2px]  border-[#222222] border-b-[2px] border-b-[#B4FF16] shadow-b-inner shadow-[#B4FF16] w-full flex justify-center items-center"
              to={`/other/${_id}`}
            >
              {" "}
              <div className=" w-full flex justify-center text-[#656565]  text-[3.5vw]">
                {game}
              </div>
            </Link>

            <Link
              className="border-r-[2px]  border-r-[#222222] w-full flex justify-center items-center"
              to={`/other/about/${_id}`}
            >
              {" "}
              <div className="  text-[#B4FF16] text-[3.5vw] ">About</div>
            </Link>
            <Link
              className=" w-full flex justify-center items-center "
              to={`/other/posts/${_id}`}
            >
              {" "}
              <div className="border-[#222222] w-full flex justify-center text-[#656565]  text-[3.5vw]">
                Posts
              </div>
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center bg-[#0a0a0a]   ">
          <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626]    ">
            <div className="text-[#4aeed5] text-[1.1rem] font-teachers ml-7 mt-2">
              About
            </div>
            <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4 mr-3 font-thin text-[4vw] from-inherit ">
              {about}
            </div>
          </div>
          <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1  border-[1px]  border-[#262626]     ">
            <div className="text-[#37c5b0]  text-[1.1rem] font-teachers ml-7 mt-2">
              Player-ID
            </div>
            <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4  mr-3 font-light text-[3.5vw] from-inherit ">
              {playerid}
            </div>
          </div>
          <div className="w-[100%]  bg-gradient-to-r from-[#000000] to-[#0fafb813] mt-1   border-[1px]  border-[#262626]     ">
            <div className="text-[#37c5b0]  ml-7 mt-2">Device</div>
            <div className="text-[#959595] font-teachers  mt-2 ml-7 mb-4  mr-3   font-light text-[3.5vw] from-inherit ">
              {device}
            </div>
          </div>

          <div className="w-[100%] mt-1   bg-gradient-to-r from-[rgb(0,0,0)] to-[#0fafb813]  border-[1px]  border-[#262626]  pb-5   ">
            <div className="w-full flex mt-3 ">
              <div className="text-[#37c5b0]  text-[1rem] ml-7   flex items-center">
                Speciality
              </div>
            </div>
            {skillsarray.map((val) => (
              <div className="text-[#c4c4c4] font-teachers w-[80%] m-3 ml-7  h-[2rem] flex items-center font-light text-[14px] from-inherit border-b-[1px] border-[#2222228e] ">
                {val.skill}
              </div>
            ))}
          </div>

          <div className="w-[100%] mt-1 mb-[11vh]  bg-gradient-to-r from-[rgb(0,0,0)] to-[#0fafb813]  border-[1px]  border-[#262626] pb-5    ">
            <div className="w-full flex mt-3 ">
              <div className="text-[#37c5b0]  text-[1rem] ml-7   flex items-center">
                Achievements
              </div>
            </div>
            {tournamentarray.map((val) => (
              <div className="text-[#c4c4c4] font-teachers  w-[80%] m-3 ml-7 h-[2rem] flex items-center font-light text-[14px] from-inherit border-b-[1px] border-[#2222228e] ">
                {val.tournament}
              </div>
            ))}
          </div>

          {openFollowers && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">
                    Close
                  </button>
                </div>
                <div className="w-[70vw] h-[50vh]">
                  {followersarray.map((value) => (
                    <Followcomp
                      key={value.id}
                      RealName={value.followerRealName}
                      IngameName={value.followerIngameName}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {openAllies && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
              <div className="bg-[#0c0c0c] rounded-[10px] p-[1rem]">
                <div className="flex justify-end">
                  <button onClick={handleClose} className="text-[#4ddcf5]">
                    Close
                  </button>
                </div>
                <div className="w-[70vw] h-[50vh]">
                  {followingarray.map((value) => (
                    <Followcomp
                      key={value.id}
                      RealName={value.RealName}
                      IngameName={value.IngameName}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
