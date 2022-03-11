import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


export default function Verify() {
  const { search } = useLocation();
  const navigate = useNavigate();

  const { userId ,reason } = queryString.parse(search);
  console.log(userId);
 
  useEffect(() => {
    const verifyUser = async () => {
      console.log("HI From FrontEnd");
      try {
        const { data } = await axios.post("http://vidkarya-backend-98.herokuapp.com/verify", {
          userId,reason
        });
        console.log("2 Hi From FrontEnd")
        console.log(data);
        if (data) {
          localStorage.setItem("userInfo", JSON.stringify(data));
          
          console.log("verified sucessfully");
          toast.success("verification succesfull you can visit the website now")
          navigate("/auth");
        } else {
          console.log("error... in response data");
          toast.error("error in verification try again!!")
          //navigate("/auth");
        }
      } catch (error) {
        console.log("error in verification ", error.message);
        toast.error("error in verification try again!!") 
        //navigate("/auth");
      }
    };

    verifyUser();
  }, []);

  return (
    <div>
      <h1> user verification - team vidkarya</h1>
      <ToastContainer position="top-center"/>
    </div>
  );
}
