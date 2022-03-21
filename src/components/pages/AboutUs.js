import React from "react";
import bg from "./images/aboutus_bg.jpg";
import github from "./images/github.png";
import linkedin from "./images/linkedin-logo.png";
import team from "../API/team";
import dummyimg from "./images/image-default-dp.jpg";
import "./about.css";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

export default function AboutUs() {
  return (
    <>
      <div className="about-bg-box">
        {/* <img src={team[0].details.imgSrc} alt ="..."/> */}

        <Header color={"rgba(3,7,42,0.7)"} />
        <div className="about-page">
          <div className="card text-center animate__animated animate__pulse topcard aboutus">
            <div className="card-header" style={{ fontSize: "xx-large" }}>
              AboutUS
            </div>
            <p className="card-title">
              We are group of students from IIIT Dharwad, 2020-24 batch. The
              project aims to provide students access to necessary support
              during their Engineering journey.
            </p>
            <div className="card-footer text-muted">Education with Excellence</div>
          </div>
          <div className="card text-center animate__animated animate__pulse topcard founder">
            <div className="card-header" style={{ fontSize: "xx-large" }}>
              Founder's Message
            </div>
            <div className="card-row">
              <div className="card-body ">
                <div className="content">
                  <div className="card-img">
                    <img src="images/Lucky.jpg" />
                  </div>
                </div>
                <div className="content">
                  <h5 className="card-title">Lucky Yadav</h5>
                  <p className="card-text">CSE, 2nd Year.</p>
                  <div style={{ width: "100%", display: "inline-block" }}>
                    <a href="https://github.com/LuckYYadav15" target="_blank">
                      {" "}
                      <img
                        className="socialicon"
                        src={github}
                        alt="github icon"
                      />
                    </a>
                    <a href="https://www.linkedin.com/in/lucky-yadav-19b403232/" target="_blank">
                      {" "}
                      <img
                        className="socialicon"
                        src={linkedin}
                        alt="linkedin icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <p className="card-title p-2 text-justify">
                We present to you Vidkarya the only Educational Hub for
                engineering graduates. The team has worked really hard to snap
                the idea into reality and it's my immense pleasure to lead such
                a dedicated team. So enjoy the wonderful experience and
                appreciate the under-mentioned Developers.
              </p>
            </div>
          </div>
          <div className="row" id="teamcardbox">
            <div className="card-header">Our Team</div>
            {team.map((ele, idx) => {
              return (
                <>
                  <div className="card-header role-heading" key={ele.team_id}>
                    {ele.team_id}
                  </div>
                  {ele.details.map((det, idx) => {
                    return (
                      <>
                        <div
                          className="col-sm-6 col-lg-4  teamcards"
                          key={det.dev_id}
                        >
                          <div className=" cardbody ">
                            <div className="card-img">
                              <div className="content" key={det.image}>
                                <img src={det.image} />
                              </div>
                            </div>

                            <div className="card-body ">
                              <div className="content">
                                <h5 className="card-title" key={det.dev_name}>
                                  {det.dev_name}
                                </h5>
                                <p className="card-text" key={det.Achivement1}>
                                  {det.Achivement1}
                                </p>
                                <a
                                  href={det.github}
                                  target="_blank"
                                  key={det.github}
                                >
                                  {" "}
                                  <img
                                    className="socialicon"
                                    src={github}
                                    alt="github icon"
                                  />
                                </a>
                                <a
                                  href={det.linkden}
                                  target="_blank"
                                  key={det.linkden}
                                >
                                  {" "}
                                  <img
                                    className="socialicon"
                                    src={linkedin}
                                    alt="linkedin icon"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
