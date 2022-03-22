import React, { useState, useEffect } from "react";
import PdfInfoCard from "./PdfInfoCard";
import samplepdfs from "../components/API/pdf";
import sample_notes from "../components/API/sample_notes";
import axios from "axios";
import PdfPreview from "./PdfPreview";
import "../components/Layouts/notes.css";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import NotesPopup from "./NotesPopup";

export default function Notes({ course, sem }) {
  //states
 
  const [displayPopup, setdisplayPopup] = useState(false);
  const [subjectNotes, setsubjectNotes] = useState("");
  const [pdfName, setpdfName] = useState("");
  const navigate = useNavigate();

  const sendFileLink = (Course) => {
    for (var i = 0; i < samplepdfs.length; i++) {
      if (samplepdfs[i].NotesId === Course) {
        // console.log(samplepdfs[i]);
        return samplepdfs[i];
      }
    }
  };



  

  useEffect(async () => {
    try {
      if (!localStorage.getItem("userInfo")) {
        navigate("/auth");
      }
    } catch (error) {
      navigate("/auth");
    }
  }, []);

  const openPopup = (sub) => {
    setdisplayPopup(true);
    sample_notes.forEach((ele)=>{

      if(ele.CourseName===sub){
        setsubjectNotes(ele)
      }
    })
    console.log(displayPopup);
  };
  return (
    <div>
      {displayPopup ? (
        <NotesPopup subjectNotes={subjectNotes} setdisplayPopup={setdisplayPopup} />
      ) : (
        <div>
          
            <div>
            <Header color={"rgba(254,68,101,0.8)"}/>
              <h1 className="text-white text-center p-4">Courses</h1>
              <div className="buttons">
            {/* <button value="" className="head-btn">
              CSE
            </button>
            <button value="" className="head-btn">
              DSAI
            </button>
            <button value="" className="head-btn">
              ECE
            </button> */}
            <div className="inputBox">
              <input type="search" className="mx-2 mb-3 border rounded-pill" placeholder="subject name"/>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="inputBox">
              <input type="search" className="mx-2 mb-3 border rounded-pill" placeholder="Institute name"/>
            </div>
            {/* <div className="inputBox">
              <input type="search" className="mx-2 mb-3 border rounded-pill" placeholder="Course-code"/>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div> */}
            <div className="labels mb-3">
            <label for="branch" className="label-name mx-1">
              <span className="text-light">Branch</span>
              <select name="branch" id="branch">
                <option value="all">All</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="CSE">DSAI</option>
              </select>
            </label>
            <label for="semester" className="label-name mx-1">
              <span className="text-light">Sem:</span>
              <select name="semester" id="semester">
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4" selected>4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </label>
            </div>
          </div>

          <div className="container">
            <div className="search-info">
              {/* <h2 className="text-center text-white">{course}</h2> */}
              <ol className="breadcrumb justify-content-center justify-content-md-start mx-md-5">
                <li className="breadcrumb-item">Institute:<span className="h5">all</span></li>
                <li className="breadcrumb-item">Branch:<span className="h5">all</span></li>
                <li className="breadcrumb-item">Subject:<span className="h5">all</span></li>
                <li className="breadcrumb-item">Semester:<span className="h5">all</span></li>
              </ol>
              {/* <h3 className="text-white text-sm-left mt-4">{"semester - 4"}</h3> */}
            </div>
                <div className="notes-selection">
                  <div className="chapter-card">
                    {sample_notes.map((ele, idx) => {
                      return (
                        <SubjectCard
                          subject={ele.CourseName}
                          openPopup={openPopup}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          

          <Footer />
        </div>
      )}
    </div>
  );
}

const SubjectCard = ({ subject, openPopup }) => {
  return (
    <div className="pdf-info-card chapters justify-content-center" onClick={()=>openPopup(subject)}>
      {/* <div className="chapters"> */}

      <p className="chapter-title text-center fw-bold display-5">{subject}</p>

      {/* </div> */}
    </div>
  );
};
