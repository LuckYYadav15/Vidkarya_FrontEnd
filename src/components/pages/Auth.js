import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";
import axios from "axios";
import { signInwithGoogle } from "../../auth/google_auth";

export default function Auth() {

  const navigate = useNavigate();

  useEffect(() => {
    
    if(localStorage.getItem('userInfo')){
     // console.log("yes");
      navigate('/');
    }
  }, []);
  
  const [loginBg, setloginBg] = useState("");
  

  const [isLogin, setisLogin] = useState(true);
  const [userLoginInfo, setuserLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [userSignupInfo, setuserSignupInfo] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    setuserLoginInfo({ ...userLoginInfo, [name]: val });
  };

  const handleSignupChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    setuserSignupInfo({ ...userSignupInfo, [name]: val });
  };

  //login data post to backend

  const postLoginData = async () => {
    const { email, password } = userLoginInfo;

    //console.log(userLoginInfo);
    if (!email || !password) {
      console.log("errror");
      toast.error("fill all the fields before login!!");
      return;
    }
    try {
      const res = await axios.post("https://vidkarya-backend-98.herokuapp.com/user/login", {
        email,
        password,
      });
      console.log(res);
      if (res) {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        navigate("/");
        toast.success(" login successful !!!! ");
      }
    } catch (error) {
      toast.error("wrong credencials /error in varication try again !!!! ");
    }
  };

  //posting sign up data

  const postSignupData = async () => {
    const { userName, email, password, confirmPassword } = userSignupInfo;

    if (!email || !password || !confirmPassword || !userName) {
      toast.error("fill all the fields before sign up!!");
      return;
    }
    if (password != confirmPassword){
      toast.error(
        "Confirm Password dosen't Matches"
      );
      return;
    }
    if(!email.includes('@iiitdwd.ac.in')){
      toast.error("enter a valid iiit dharwad email id...");
      return;

    }

    try {

      const res = await axios.post("https://vidkarya-backend-98.herokuapp.com/user/sign_up", {
        userName,
        email,
        password,
        confirmPassword,
      });

      if (res) {
        console.log(res);
        toast.info(
          "sent the varification email to your registered email address !!"
        );
        setuserSignupInfo({
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      toast.error("error in sign up!!");

      console.log("error in sign in!", error.message);
    }
  };

  //on forgot password click function
  const handleForgotPass = async(req ,res)=>{

    const {email} = userLoginInfo;
    if(!email){
      toast.error("enter the email field please!!");
      return;
    }

    try {
      const {data} = await axios.post("https://vidkarya-backend-98.herokuapp.com/Forgot_Password/email_verify" ,{
        email:userLoginInfo.email
      })

      if(data){
        toast.info("varification mail sent to your registered email address!!");
      }else{
      toast.error("error in varification!!");

      }
    } catch (error) {
      toast.error("error in varification!!");
      console.log(error.message);
      
    }
  }

 

  return (
    <>
      <section className="auth-section">
        <div className="box auth-box">
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="square" />
          <div className="container-box">
            <div className="container-fluid">
              <img
                src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
                alt=""
                width="65"
                className="web-icon d-inline-block align-text-top"
              />
              <a className="heading navbar-brand ms-1" id="brandtext" href="">
                <div id="brand-name" href="#first-page">
                  <p>Vidkarya</p>
                </div>
                <div>
                  <h6 id="slogan1">Education with Excellence </h6>
                </div>
              </a>
            </div>
            <div className="form login">
              <div className="heading-login">
                <button className={`btn-lgn ${loginBg}`} onClick={() =>{
                  setisLogin(true);
                  setloginBg("login-active");
                  
                }}>
                  Log-in
                </button>
                <button className={`btn-snp ${loginBg===""?"login-active":""}`} onClick={() =>{
                  setisLogin(false);
                  setloginBg("");
                }}>
                  Sign-up
                </button>
              </div>

              {isLogin ? (
                <div id="login" className="login-box ">
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={userLoginInfo.email}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={userLoginInfo.password}
                      onChange={handleLoginChange}
                      required
                    />
                  </div>

                  <div className="inputBox">
                    <button type="submit" onClick={postLoginData}>
                      Login
                    </button>
                  </div>
                  <div className="inputBox">
                    <button type="button" className="btn-login " onClick={()=>{
                      navigate('/google-auth')
                    }}>
                      <i className="fab fa-google"></i>
                      Google
                    </button>
                    <button className="btn-danger " onClick={handleForgotPass}>Forgot Password</button>                  
                </div>

                </div>
              ) : (
                <div id="signup ">
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="Username"
                      name="userName"
                      value={userSignupInfo.userName}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={userSignupInfo.email}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={userSignupInfo.password}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <input
                      type="password"
                      placeholder="Confirm password"
                      name="confirmPassword"
                      value={userSignupInfo.confirmPassword}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>
                  <div className="inputBox">
                    <button
                      type="submit"
                      className="m-2"
                      onClick={postSignupData}
                    >
                      Signup
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" />
    </>
  );
}