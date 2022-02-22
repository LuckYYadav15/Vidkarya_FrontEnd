import React, { useState,useEffect } from "react";
import PdfInfoCard from "./PdfInfoCard";
import samplepdfs from "../components/API/pdf";
import PdfPreview from "./PdfPreview";
import "../components/Layouts/notes.css";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { Link, Navigate , useNavigate } from "react-router-dom";


export default function Notes({ course, sem }) {
  //states
  const [displayPdf, setdisplayPdf] = useState(false);
  const [pdfName, setpdfName] = useState("");
  const navigate = useNavigate();
  
  const sendFileLink = (Course) => {
    for(var i = 0;i < samplepdfs.length; i++ ){
      if(samplepdfs[i].NotesId === Course){
        // console.log(samplepdfs[i]);
        return samplepdfs[i];
      }
    }
  }

  const handleShowPdf = (file) => {
    console.log(file);
    console.log(displayPdf);
    setpdfName(file);
    if (displayPdf) {
      setdisplayPdf(false);
    } else {
      setdisplayPdf(true);
    }
  };

  const handleCancelPdfShow = () => {
    setdisplayPdf(false);
  };

  useEffect(async() => {
    try {
      
      if(!localStorage.getItem('userInfo')){
          
        navigate('/auth')
      }
      
    } catch (error) {
      navigate('/auth')
    }
  }, []);

  return (
    <>
    {!displayPdf ? (
      <div>
      <Header/>
            <h1 className="text-white text-center p-4">Courses</h1>
          <div className="buttons">
            <button value="" className="head-btn">
              CSE
            </button>
            <button value="" className="head-btn">
              DSAI
            </button>
            <button value="" className="head-btn">
              ECE
            </button>
            <label for="semester" className="label-name">
              <span className="text-white">Sem:</span>
              <select name="semester" id="semester">
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

          <div className="container mt-5">
            <div className="row">
              <h2 className="text-center text-white">{course}</h2>
              <h3 className="text-white text-sm-left mt-4">{"semester - 4"}</h3>
            </div>
            <div className="notes-selection">
              <div className="chapter-card">
                {samplepdfs.map((ele, idx) => {
                  return (
                      <PdfInfoCard
                        subject={ele.CourseName}
                        name={ele.NotesId}
                        date = {ele.DateOfUpload}
                        auther = {ele.Showtag}
                        handleShowPdf={handleShowPdf}
                      />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PdfPreview
          displayPdf={displayPdf}
          pdfName={pdfName}
          handleCancelPdfShow={handleCancelPdfShow}
          fileLink = {sendFileLink}
        />
      )}
      <Footer/>
      
    </>
  );
}
