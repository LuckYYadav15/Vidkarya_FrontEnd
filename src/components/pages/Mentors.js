import React,{useEffect} from "react";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";
import mentorsDetalis from "../API/mentors";
import mentorDefault from "./images/image-default-dp.jpg";
import github from "./images/github.png";
import meet from "./images/meet.png";
import "./mentors.css";
import { Link, Navigate , useNavigate } from "react-router-dom";

export default function Mentors() {
  const navigate = useNavigate();
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
    <div>
      <div className="mentors-bg-box">
        <Header color={"rgba(254,68,101,0.8)"}/>
        <div id="mentorbox">
          <h1 className="text-center mt-3">Mentors</h1>
          <div className="row justify-content-sm-center">
            {mentorsDetalis.map((mentor, idx) => {
              return <MentorCard mentors={mentor} key={idx} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
const MentorCard = ({ mentors }) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-8">
        <div className="card h-101 mentor-cards">
          <img
            src={mentors.imgSrc}
            className="card-img-top mentorpic"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" key={mentors.Name}>{mentors.Name}</h5>
            <p className="card-text" key={mentors.Discription}>
            {mentors.Discription}
            </p>
          </div>
          <ul className="list-group list-group-flush listitems">
            <li className="list-group-item list-text" key={mentors.Achivement1}>{mentors.Achivement1}</li>
            <li className="list-group-item list-text" key={mentors.Achivement2}>{mentors.Achivement2}</li>
            <li className="list-group-item list-text" key={mentors.Achivement3}>{mentors.Achivement3}</li>
          </ul>
          <div className="card-body">
            <Link to={`/mentor/register?id=${mentors.id}`}>
              <button href="#" className="btn btn-outline-dark">
                Apply here
              </button>
            </Link>
            <a href={mentors.github_link}>
              {" "}
              <img className="github-icon" src={github} alt="github icon" />
            </a>
            <a href="#">
              {" "}
              <img className="meet-icon" src={meet} alt="meet icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
