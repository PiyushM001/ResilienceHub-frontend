import React, { useState } from "react";
import { createContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// require('dotenv').config();
// const host = process.env.port
export const pContext = createContext();
// const port = process.env.REACT_APP_PORT;
const port ="http://localhost:5000"
// const port = "https://thrive-backend-o6k3.onrender.com"

export default function Profilecontext(props) {
  // const localtoken2 = localStorage.getItem("token");
  // const localtoken = localtoken2.match(/"(.*?)"/)[1];

  const [followbtntext, setfollowbtntext] = useState("Follow");
  const localtoken2 = localStorage.getItem("token");
  let localtoken;

  if (localtoken2) {
    const matchResult = localtoken2.match(/"(.*?)"/);
    if (matchResult && matchResult.length > 1) {
      localtoken = matchResult[1];
    }
  }
  // const [localtoken,setlocaltoken]=useState(localStorage.getItem(""))
  // if(!localtoken === ""){
  //   const localtoken2 = localtoken.match(/"(.*?)"/)[1];
  //   console.log("localtokengdgrgergergerg",localtoken)
  //   setlocaltoken(localtoken2)
  // }
  // const host = "localhost:5000";
  const aa = [];
  const [followersarray, setfollowersarray] = useState(aa);
  const bb = [];
  const [followingarray, setfollowingarray] = useState(bb);
  const cc = [];
  const [notificationarray, setnotificationarray] = useState(cc);
  const dd = [];
  const [teamarray, setteamarray] = useState(dd);
  const info = [];
  const [infostate, setinfostate] = useState(info);
  const userinfo = [];
  const infoplayer = [];
  const infoplayer2 = [];
  const skillarr = [];
  const tournamentarr = [];
  const chatarr=[];
  const [chatarray,setchatarray]=useState(chatarr);
  const [skillsarray, setskillsarray] = useState(skillarr);
  const [tournamentarray, settournamentarray] = useState(tournamentarr);
const [checkteam,setcheckteam]= useState(" ");
  const [users, setusers] = useState(userinfo);
  const [playerinfo, setplayerinfo] = useState(infoplayer);
  const [playerinfo2, setplayerinfo2] = useState(infoplayer2);
  const [ownid, setownid] = useState("");
  const [teamnamein, setteamnamein] = useState(" ");
  const [followerRealName, setfollowerRealName] = useState("");
  const [followerIngameName, setfollowerIngameName] = useState("");
  const [checkfollowstate, setcheckfollowstate] = useState("Follow");
  const [NotificationCount, setNotificationCount] = useState(0);
  const [Profilepic, setProfilepic] = useState(0);
  const [bgpic, setbgpic] = useState(0);
  const [postsarray, setpostsarray] = useState([]);
  const [mypostsarray, setmypostsarray] = useState([]);
  const [otherpostsarray, setotherpostsarray] = useState([]);
  const [tourarray, settourarray] = useState([]);
  const [tourdatailarray, settourdetailarray] = useState([]);
  const [speakuparray, setspeakuparray] = useState([]);
  const [idpass,setidpass]=useState(true);

  let navigate = useNavigate();

  const getinfo = async () => {
    const response = await fetch(`${port}/getinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
        // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwNDI3NjExMDllMDkwZDFiN2RiMTRhIn0sImlhdCI6MTcxMTU0ODI1N30.QvddnhBp70FoZklQktEulbxCabHz6xKhRxiEBBnZU2A"
        // "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYxMTQzYTY4YTdkZDhmNmJiM2Y2NDhmIn0sImlhdCI6MTcxMjQ3MTc4N30.Sorq9yPPBLVBw8HgIAYU7uV1ojwri6ckKAOUDihUZqw"
      },
    }).catch((err) => {
      toast(err);
    });
    const data = await response.json();
    setinfostate(data);
    setownid(data[0]._id);
    // setownid(data[0]._id)
    localStorage.setItem("infoid", data[0]._id);
    localStorage.setItem("MyGameName", data[0].IngameName);
    setfollowerRealName(data[0].RealName);
    setfollowerIngameName(data[0].IngameName);
  };


  const getspeakups = async () => {
    const response = await fetch(`${port}/speakup`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      
      },
    }).catch((err) => {
      toast(err);
    });
    const data = await response.json();
    setspeakuparray(data);
   
  };





  const getteaminfo = async () => {
    const response = await fetch(`${port}/getteaminfo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
    }).catch((err) => {
      toast(err);
    });
    const data = await response.json();
     setteamnamein(data[0].teamname);
     console.log("g",data[0].teamname);

    setteamarray(data[0].team);
  };

  
  const getpost = async (page) => {
    const response = await fetch(`${port}/getposts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({page}),
    }).catch((err) => {
      toast(err);
    });
    const data = await response.json();
    setpostsarray(data)
    console.log("datagetpiost",data)
  };

  const getmypost = async (infoid) => {
    const response = await fetch(`${port}/getposts/my`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({infoid}),
    }).catch((err) => {
      toast(err);
    });
    const data = await response.json();
    setmypostsarray(data)
    
  };

  const getotherpost = async (userid) => {
    const response = await fetch(`${port}/getposts/other`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({userid}),
    }).catch((err) => {
      toast(err);
    });
    const data = await response.json();
    setotherpostsarray(data)
    
  };
  // const getplayerinfo= async (_id)=>{

  //   const response = await fetch(`${port}/getplayerinfo", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({_id})
  //   });

  //   const playerdata = await response.json()
  //   setplayerinfo(playerdata)

  // }

  const getplayerinfo = async (_id) => {
    const response = await fetch(`${port}/getplayerinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });
    const data = await response.json();
    setplayerinfo(data);
    setskillsarray(data.skill2);
    settournamentarray(data.tournament2);
  };




  const post = async (IngameName, RealName, photo, description) => {
    const response = await fetch(`${port}/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({ IngameName, RealName, photo, description }),
    })
      .then(async (response) => {
        const x = await response.json();

        if (response.ok) {
          console.log("sdgf", x.photo.data);
          toast.success("submission Successful");
        } else {
          toast.error("sdgds");
        }
      })
      .catch((err) => {
        toast(err);
      });
  };

  // const getposts= async ( IngameName , RealName ,photo,description )=>{
  //   const response = await fetch(`${port}/post`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "token":localtoken
  //     },
  //     body: JSON.stringify({IngameName , RealName ,photo,description})
  //   }) .then(async (response) => {
  //     const x = await response.json();

  //     // const st = await response.text();
  //     if (response.ok) {
  //       toast.success("submission Successful");
  //       //  localStorage.setItem("infoid", x._id);
  //     //  navigate("/")
  //     } else {
  //       toast.error("sdgds");
  //     }
  //     // toast(res.json())
  //   })
  //   .catch((err) => {
  //     toast(err);
  //   });}

  // const getChats = async (teamname) => {
  //   const response = await fetch(`${port}/getChats`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ teamname}),
  //   }).catch((err) => {
  //     toast(err);
  //   });
  //   const data = await response.json();
  //   // console.log("lun",data[0].chat)
  // setchatarray(data[0].chat);
  // };



  const getChats = async () => {
    const response = await fetch(`${port}/getChats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
    }).catch((err) => {
      toast(err);
    });
    const data = await response.json();
    console.log("data",data.chatinfo[0].chat)
    console.log("dataw222",data.information.team)

    //  setteamnamein(data[0].teamname);
     setchatarray(data.chatinfo[0].chat);
     setteamnamein(data.information.teamname);
    setteamarray(data.information.team);

  };










  const createinfo = async (IngameName, RealName, game) => {
    const response = await fetch(`${port}/createinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({ IngameName, RealName, game }),
    })
      .then(async (response) => {
        const x = await response.json();
       
        // const st = await response.text();
        if (response.ok) {
          toast.success("submission Successful");
          
          localStorage.setItem("infoid", x._id);
          localStorage.setItem("realname", x.RealName);

          navigate("/");
        } else {
          toast.error(x);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
      });
  };




  

  const createteam = async (teamname) => {
    const response = await fetch(`${port}/createteam`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({ teamname }),
    })
      .then(async (response) => {
        const x = await response.json();

        // const st = await response.text();
        if (response.ok) {
          toast.success("submission Successful");
          localStorage.setItem("teamid", x._id);
// getteaminfo();
        } else {
          toast.error("Something Went Wrong");
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
      });
  };









  

  const updateinfo = async (
    about,
    contact1,
    contact2,
    text,
    education,
    addedskill,
    playerid,
    location,
    addedtournament,
    device,
    infoid
  ) => {
    // API Call
    const response = await fetch(`${port}/updateinfo`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({
        about,
        contact1,
        contact2,
        text,
        education,
        addedskill,
        playerid,
        location,
        addedtournament,
        device,
        infoid,
      }),
    })
      .then(async (response) => {
        const y = await response.json();
        getinfo();
        // const st = await response.text();
        if (response.ok) {
          toast.success("info updated");
        } else {
          toast.error(response.text());
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
      });
  };










  
  const like = async (
   infoid,postid
  ) => {
    // API Call
    const response = await fetch(`${port}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({
        infoid,postid
      }),
    })
      .then(async (response) => {
       
        const p = await response.text();

        if (response.ok) {
        
         toast.success(p);
        } else {
          toast.error(p);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
      });
  };











  const follow = async (
    _id,
    RealName,
    IngameName,
    followerRealName,
    followerIngameName
  ) => {
    // API Call
    const response = await fetch(`${port}/follow`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({
        _id,
        RealName,
        IngameName,
        followerRealName,
        followerIngameName,
      }),
    })
      .then(async (response) => {
        // const st = await response.text();
        // console.log("yedekh kedfhdfhdfhfghdshgdfshdf",response.text())
        const p = await response.text();

        if (response.ok) {
          getplayerinfo(_id);
          checkfollow(_id);
          // toast.success(p);
        } else {
          toast.error(p);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
      });
  };

  const chatfun = async (
    teamname,
    userId,
    userRealName,
    time,
    message
  ) => {
    // API Call
    const response = await fetch(`${port}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({
        teamname,
        userId,
        userRealName,
        time,
        message
      }),
    })
      .then(async (response) => {
        // const st = await response.text();
        // console.log("yedekh kedfhdfhdfhfghdshgdfshdf",response.text())
        const p = await response.text();

        if (response.ok) {
        
        } else {
          toast.error(p);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
      });
  };






  const checkfollow = async (_id) => {
    // API Call
    const response = await fetch(`${port}/checkfollow`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({ _id }),
    })
      .then(async (response) => {
        // const st = await response.text();
        // console.log("yedekh kedfhdfhdfhfghdshgdfshdf",response.text())
        const p = await response.text();

        if (response.ok) {
          getplayerinfo(_id);
          setcheckfollowstate(p);
        } else {
          toast.error(p);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
      });
  };











  const invite = async (
    _userid,
    RealName,
    IngameName,
    followerRealName,
    followerIngameName,
    teamname
  ) => {
    // API Call
    const response = await fetch(`${port}/invite`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({
        _userid,
        RealName,
        IngameName,
        followerRealName,
        followerIngameName,
        teamname,
      }),
    })
      .then(async (response) => {
        // const st = await response.text();
        // console.log("yedekh kedfhdfhdfhfghdshgdfshdf",response.text())
        const p = await response.text();

        if (response.ok) {
          // getplayerinfo(_userid);
          toast.success(p);
        } else {
          toast.error(p);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
      });
  };










  const acceptinvite = async (
    _userid,
    RealName,
    IngameName,
    followerRealName,
    followerIngameName,
    teamname
  ) => {
    // API Call
    const response = await fetch(`${port}/team`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({
        _userid,
        RealName,
        IngameName,
        followerRealName,
        followerIngameName,
        teamname
      }),
    })
      .then(async (response) => {
        // const st = await response.text();
        // console.log("yedekh kedfhdfhdfhfghdshgdfshdf",response.text())
        const p = await response.text();

        if (response.ok) {
          getplayerinfo(_userid);
          toast.success(p);
        } else {
          toast.error(p);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
      });
  };













  const ignoreinvite = async (
    _userid,
    RealName,
    IngameName,
    followerRealName,
    followerIngameName
  ) => {
    // API Call
    const response = await fetch(`${port}/ignoreinvite`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({
        _userid,
        RealName,
        IngameName,
        followerRealName,
        followerIngameName,
      }),
    })
      .then(async (response) => {
        const p = await response.text();

        if (response.ok) {
          getplayerinfo(_userid);
          toast.success(p);
        } else {
          toast.error(p);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
      });
  };












  const getfollowerslist = async (_id) => {
    const response = await fetch(`${port}/getplayerinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });
    const data = await response.json();
    // console.log("upar",data);
    setfollowersarray(data.followers);
  };












  const getfollowinglist = async (_id) => {
    const response = await fetch(`${port}/getplayerinfo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    });
    const data = await response.json();
    // console.log("upar",data);
    setfollowingarray(data.following);
  };












  const getnotification = async (_id) => {
    const response = await fetch(`${port}/getnotification`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
    });
    const data = await response.json();
    // console.log("notifi",data.invitinguser);
    setnotificationarray(data[0].invitinguser);
    console.log(data[0].invitinguser,"inviting use")
     setNotificationCount(data[0].NotificationCount)
  };







//   const getteam = async (_id) => {
//     const response = await fetch(`${port}/getnotification`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",

//       },
//       body: JSON.stringify({ _id }),
//     });
//     const data = await response.json();
//     setteamarray(data);
// setcheckteam(data.teamname)
//   };




  // const createinfo= async ( text , playerid , device)=>{

  //   const response = await fetch(`${port}/createinfo", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwMmM5YTU3MGE0YTA1NGZmODI1ZWQzIn0sImlhdCI6MTcxMTQ1ODcyNX0.fTVwowRgkobizEMqqrKyC689psJMg-aqZgQt26UIZGI"
  //     },
  //     body: JSON.stringify({text , playerid , device})
  //   });
  //   const forminfo = await response.json()

  //   setinfostate(infostate.concat(forminfo))
  // }













  // const getplayers = async () => {
  //   const response = await fetch(`${port}/getplayers`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   setusers(data);
  // };


  const getplayers = async (page,query = '') => {
    const response = await fetch(`${port}/getplayers?page=${page}&q=${query}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setusers(data);
  };
  
  // const getplayers = async (page = 1, pageSize = 10, query = '') => {
  //   try {
  //     const response = await fetch(`${port}/getplayers?page=${page}&pageSize=${pageSize}&q=${query}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     setusers(data);
  //   } catch (error) {
  //     console.error("Error fetching players:", error);
  //     // Handle error if necessary
  //   }
  // };
  

  const fetchProfilePicture = async (userId) => {
    try {
      const response = await fetch(`${port}/cloud/profile-picture/${userId}`);
      
      if (response.ok) {
        const data = await response.json();
        setProfilepic(data.url)
        setbgpic(data.url2)
      } else {
        console.error('Error fetching profile picture', response.statusText);
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error('Error fetching profile picture', error);
      throw error;
    }
  };



  const gettour = async () => {
    const response = await fetch(`${port}/gettournaments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
              },
    }).catch((err) => {
      toast(err);
    });
    const data = await response.json();
    settourarray(data);
  
  };
  const gettourdetail = async (_id) => {
    const response = await fetch(`${port}/gettournaments/detail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
              },
              body: JSON.stringify({ _id })
    }).catch((err) => {
      toast(err);
    });
    const data = await response.json();
    settourdetailarray(data);
  
  };
  const  registertournament= async (_id) => {
    const response = await fetch(`${port}/gettournaments/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({ _id })
    }).catch((err) => {
      toast(err);
    });
    const data = await response.text();
    if (response.ok) {
      toast.success(data)
    }else{
    toast.warning(data);
    // await  gettourdetail(_id)
  }

  };
  const   checkregistration= async (_id) => {
    const response = await fetch(`${port}/gettournaments/checkregistration`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localtoken,
      },
      body: JSON.stringify({ _id })
    }).catch((err) => {
      toast(err);
    });
    const data = await response.text();
    if (response.ok) {
      setidpass(true)
      // toast.success(data)
    }else{
      setidpass(false)
    }

  };
  
  


  // const followerRealName = infostate[0].RealName;
  //   const followerIngameName = infostate[0].IngameName;
  // getfollowinglist,getfollowerslist
  return (
    <pContext.Provider
      value={{
        chatfun,speakuparray,getspeakups,
        checkregistration,
        gettourdetail,
        idpass,
        registertournament,
        tourdatailarray,
        tourarray,
        gettour,
        mypostsarray,
        otherpostsarray,
        like,
        Profilepic,
        postsarray,
        getpost,
        getmypost,
        getotherpost,
        bgpic,
        NotificationCount,
        fetchProfilePicture,
        getChats,
        chatarray,
        skillsarray,
        tournamentarray,
        getteaminfo,
        ignoreinvite,
        teamnamein,
        checkfollowstate,
        post,
        ownid,
        checkfollow,
        notificationarray,notificationarray,
        teamarray,
        // getteam,
        acceptinvite,
        createteam,
        getnotification,
        invite,
        playerinfo2,
        infostate,
        getinfo,
        getplayerinfo,
        playerinfo,
        createinfo,
        users,
        updateinfo,
        getplayers,
        follow,
        followbtntext,
        followingarray,
        followersarray,
        followerRealName,
        followerIngameName,
        getfollowinglist,
        getfollowerslist,
        checkteam
      }}
    >
      {props.children}
    </pContext.Provider>
  );
}
