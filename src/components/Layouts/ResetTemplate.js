import axios from "axios";
import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import "./resetpassword.css"
export default function ResetTemplate() {


  const { search } = useLocation();
  const navigate = useNavigate();

  const { userId, reason } = queryString.parse(search);

  const [password, setpassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [isemailEntered, setisemailEntered] = useState(false);

  const handleReset = async () => {

    if(password!==confirmPassword){
        toast.error("passwords not matching try again!!")
        return;
    }else if(!password || !confirmPassword){
        toast.error("fill all the fileds properly")
        return;

    }
    try {
      const { data } = await axios.post("https://vidkarya-backend-98.herokuapp.com/forgot_password/verification", {
       userId, password
      });

      if(data){
        toast.success("verification complete!!!");
        localStorage.setItem("userInfo" ,JSON.stringify(data));
        
        navigate('/')
      }
    } catch (error) {
        toast.error("error in varification");
    }
  };

  return (
    <>
      <section className="auth-section">
        <div className="box auth-box">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="container-box">
            <div className="container-fluid">
              {/* <img
                src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
                alt=""
                width="65"
                className="web-icon d-inline-block align-text-top"
              /> */}
              <a className="heading navbar-brand ms-1" id="brandtext" href="">
                <div id="brand-name" href="#first-page">
                  <p>Vidkarya</p>
                </div>
                <div>
                  <h6 id="slogan1">Education with Excellence </h6>
                </div>
              </a>
            </div>
            <div className="form forgot password">
              <div className="inputBox">
                <input
                  className="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
              <div className="inputBox">
                <input
                  className="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required
                />
              </div>
              <div className="inputBox">
                <button className="button btn btn-primary" onClick={handleReset}>
                  Submit
                </button>
              </div>
              {/* <i className="fab fa-google"></i> */}
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center"/>

    </>
  );
}
