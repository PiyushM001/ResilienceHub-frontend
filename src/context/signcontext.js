import React from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const sContext = createContext();
// const port = "https://thrive-backend-o6k3.onrender.com"
// const port = process.env.REACT_APP_PORT;
// const port ="http://localhost:5000"

const port = "https://thrive-backend-o6k3.onrender.com"


export default function Signcontext(props) {
  // const host = "localhost:5000";

  let navigate = useNavigate();

  

  //  const getinfo= async ()=>{

  //   const response = await fetch(`${port}/getinfo", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwMmM5YTU3MGE0YTA1NGZmODI1ZWQzIn0sImlhdCI6MTcxMTQ1ODcyNX0.fTVwowRgkobizEMqqrKyC689psJMg-aqZgQt26UIZGI"
  //     },

  //   });
  //   const data = await response.json()
  //   console.log(data)
  //   setinfostate(data)
  // }

  const signin = async (email, password, confirmpassword) => {
    const response = await fetch(`${port}/signin `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, confirmpassword }),
    })
      .then(async (response) => {
        const st = await response.text();
        if (response.ok) {
          toast.success("Signed up Successful");
          localStorage.setItem("token", st);
          navigate("/aftersignupform")
        } else {
          toast.error(st);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
        console.log(err);
      });

  
  };
  const otpfun = async (email) => {
   
    const response = await fetch(`${port}/signin/send-otp `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then(async (response) => {
        const st = await response.text();
        if (response.ok) {
          toast.success(st);
    
        } else {
          toast.error(st);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
        console.log(err);
      });

  
  };


  const login = async (email, password) => {

    const response = await fetch(`${port}/login `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then( async (response) => {
        const st = await response.text();
        const parsedResponse = JSON.parse(st);
        const tokenWithQuotes = `"${parsedResponse.token}"`
        const nameWithQuotes = `"${parsedResponse.realname}"`

        console.log(tokenWithQuotes,"st console")
        if (response.ok) {
          toast.success("Login Successful");
          localStorage.setItem("token", tokenWithQuotes);
          localStorage.setItem("realname", nameWithQuotes);

          navigate("/")
        } else {
          toast.error(st);
        }
        // toast(res.json())
      })
      .catch((err) => {
        toast(err);
        console.log(err);
      });

  
  };



  return (
    <sContext.Provider value={{ signin,login,otpfun }}>
      {props.children}
    </sContext.Provider>
  );
}
