import React from "react";
import notesImg from "./images/notes-img.png";
import linkImg from "./images/link.png";
import mentorImg from "./images/mentor.png";
import "./home.css";
import { Link } from "react-router-dom";
import Header from "../Layouts/Header";
import bg from "./images/bground.jpg";
import Footer from "../Layouts/Footer";

export default function Home() {
  return (
    <>
      <div className="home-bg-box">
        <Header />
        <div id="get_started">
          <div id="getstarted_box">
            <div id="content">
              <h1 className="animate__animated animate__fadeInDown text-white text-center">
                Welcome to Vidkarya !
              </h1>
              <br />
              <p className="animate__animated animate__fadeIn welcome-para">
                Hello users, Your one stop learning destination is here.
                Vidkarya is built to meet the most demanding needs of college
                students having well-configured resources that will boost your
                learning. We will be providing you with everything needed, from
                notes to mentors for solving academic queries. So, if you want
                to be good at multidisciplinary aspects, Vidkarya will empower
                you.
              </p>
              <br />

              <a href="#first-page" className="btn" id="getstarted_btn">
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div id="first-page">
          <div id="elements">
            <h1 className="text-center pg-heading">Resources</h1>
            <hr />
            <Link to="/notes">
              <div className="col-lg-6 col-md-6 features notes" id="notes">
                <h1>
                  <a>
                    <img
                      src={notesImg}
                      alt=""
                      className="feature-icon d-inline-block align-text-top"
                    />
                  </a>
                  Notes
                </h1>
              </div>
            </Link>

            <Link to="/links">
              <div className="col-lg-6 features " id="links">
                <h1 className="features">
                  Links
                  <img
                    src={linkImg}
                    alt=""
                    className="feature-icon d-inline-block align-text-top"
                    style={{ height: "115px", width: "115px" }}
                  />
                </h1>
              </div>
            </Link>

            <Link to="/mentors">
              <div className="col-lg-6  col-md-6 features" id="mentors">
                <h1 className="features">
                  <img
                    src={mentorImg}
                    alt=""
                    className="feature-icon mentors-icon d-inline-block align-text-top"
                    style={{ height: "115px", width: "115px" }}
                  />
                  Mentors
                </h1>
              </div>
            </Link>
          </div>

          <div id="vision">
            <div id="vision-heading">
              <img src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-vision-design-thinking-wanicon-lineal-color-wanicon.png" />
              Vision
            </div>
            <div
              id="testimonial-carousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h2 className=" vision-text">
                    Guiding you in your engineering journey.
                  </h2>
                </div>
                <div className="carousel-item">
                  <h2 className="testimonial-text vision-text">
                    Our dream is to augment this project so that it can reach
                    every engineering graduate.
                  </h2>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonial-carousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonial-carousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
  