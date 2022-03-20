import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./mentorRegister.css";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import Header from "../Layouts/Header";
import { Link, Navigate, useNavigate } from "react-router-dom";



export default function MentorRegister() {

  const { search } = useLocation();
  const { id } = queryString.parse(search);
  const navigate = useNavigate();
  useEffect(async () => {
    try {

      if (!localStorage.getItem('userInfo')) {

        navigate('/auth')
      }

    } catch (error) {
      navigate('/auth')
    }
  }, []);
  const [mentorData, setmentorData] = useState({
    name: "",
    email: "",
    mentorId: id,
    mentorNumber: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setmentorData({ ...mentorData, [name]: value });
  };

  const postMentorData = async () => {
    const { name, email, mentorId, mentorNumber } = mentorData;
    //console.log(mentorData);
    try {
      const res = await axios.post("https://vidkarya-backend-98.herokuapp.com/mentor/register", {
        name,
        email,
        mentorId,
        mentorNumber,
      });
      // function temp
      if (res) {
        toast.success("mentor registered successfully!!");
        const timer = setTimeout(() => {
          navigate("/mentors");
        }, 2500);
      } else {
        toast.error("error in registering mentor");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Mentor Already Exists !!");
      const timer = setTimeout(() => {
        navigate("/mentors");
      }, 3000);
    }
  };

  return (
    <>
      <Header color={"rgba(3,7,42,0.7)"}/>
      <section className="main-container">
        <div className="mentor-container" id="mentor-form">
          <div className="title"><h1>Mentor contact form</h1></div>
          <div className="field">
            <input type="text" id="name" name="name" value={mentorData.name} onChange={handleInputChange} maxlength="32" placeholder=" " required />
            <span>Username</span>
          </div>
          <div className="field">
            <input type="email" id="email" name="email" value={mentorData.email} onChange={handleInputChange} required placeholder=" " pattern="\S+.*" />
            <span>User Email</span>
          </div>
          <div className="field">
            <input type="text" id='mentor' name="mentorId" value={id} maxlength="32" placeholder=" " required />
            <span>Mentor id</span>
          </div>
          <div className="field">
            <input type="text" minlength="10" name="mentorNumber" value={mentorData.mentorNumber} onChange={handleInputChange} maxlength="10" placeholder=" " required />
            <span>user Mobile no</span>
          </div>
          <div className="button-form">
            <button id="btn-mentor" onClick={postMentorData}>Submit</button>
          </div>
        </div>
      </section>

      <ToastContainer position="top-center" />
    </>
  );
}
