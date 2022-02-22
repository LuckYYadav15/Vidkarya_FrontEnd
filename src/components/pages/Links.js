import { useEffect, useState } from "react";
import { Link, Navigate , useNavigate} from "react-router-dom";
import Header from "../Layouts/Header";
import Table from "../Layouts/Table";
import "./Links.css";
import links_data from "../API/links_data";
import Footer from "../Layouts/Footer";
const Links = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(window.innerWidth);
    if(window.innerWidth<=500){
      setischange(true);
    }else if(window.innerWidth>=1000){
      setischange(false);
    }else{
      setischange(true);
    }
  }, [window.innerWidth])

  useEffect(async() => {
    try {
      
      if(!localStorage.getItem('userInfo')){
          
        navigate('/auth')
      }
      
    } catch (error) {
      navigate('/auth')
    }
  }, []);

  useEffect(() => {
    window.location.href = "https://prateekin.github.io/timetable/vidkarya";
  }, []);
  
  const days = [ 
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
  ];
  const [selectedDay, setselectedDay] = useState("monday");
  const [ischange, setischange] = useState(false);
  const [linksData, setlinksData] = useState(links_data[0]);

  const changeTable = (idx) => {
    setselectedDay(days[idx]);
    setischange(true);
    setlinksData(links_data[idx])
  };

  return (
    <>
      <Header />
      <section id="first-page">
        <div id="link-box container">
          <div className="link-header">
            <div className="col">
              <h1 className="text-center mt-3">Links</h1>
            </div>
            {/* <div className="col-5"> */}
              <div className="dropdowns">
                {/* <label
                  htmlFor="section"
                  className="label-name1"
                  id="sec-select"
                >
                  <span>SEC:</span>
                  <select name="section" id="section">
                    <option value="A">A</option>
                    <option value="B">B</option>
                  </select>
                </label> */}
                <label
                htmlFor="day-select"
                className="label-name1"
                for="day-select"
              > 
                <select   onChange={(e)=>{

                  setselectedDay(e.target.value); 
                  setlinksData(links_data[e.target.value]);
                  console.log(e.target.value);
                 
                }} id="day-select">
                  <option  value={0}>monday</option>
                  <option value={1}>tuesday</option>
                  <option value={2}>wednesday</option>
                  <option value={3}>thursday</option>
                  <option value={4}>friday</option>
                 
                </select>
              </label>
              </div>
              
            {/* </div> */}
          </div>
          <table
            className="table table-hover table-bordered border-secondary"
            id="tabId"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid black" }}>
                <th scope="col">Day/Time</th>
                <th scope="col">9:00AM - 9:45AM</th>
                <th scope="col">10:00AM - 10:45AM</th>
                <th scope="col">11:00AM - 11:45AM</th>
                <th scope="col">12:00AM - 12:45AM</th>
                <th scope="col">12:45PM - 1:15PM</th>
                <th scope="col">1:15PM - 2:00PM</th>
                <th scope="col">2:00PM - 2:45PM</th>
                <th scope="col">3:00PM - 3:45PM</th>
              </tr>
            </thead>
            <tbody>
              <div className="day-tab ">
                <label id="day-select-tab" className="label-name1">
                  {days.map((ele, idx) => {
                    return (
                      <button key={idx} onClick={() => changeTable(idx)}>
                        {ele}
                      </button>
                    );
                  })}
                </label>
              </div>
              {!ischange ? (
                <Table />
              ) : (
                <div>
                  <tr>
                    <th scope="row" className="row" id="">
                      Monday
                    </th>
                    <h3 className="text-center shadow bold text-light">{linksData.day}</h3> 
                   {linksData.subjects.map((ele ,idx)=>{
                     return (
                      <td>
                      <a
                        href={ele.link}
                        target="blank"
                      >
                        {ele.courseCode}
                      </a>
                    </td>
                     )
                   })}
                  </tr>
                </div>
              )}
            </tbody>
          </table>
        </div>

        <div
          className="row row-cols-1 row-cols-md-3 g-4"
          style={{ cursor: "default" }}
          id="tasks-and-info"
        >
          <div className="col">
            <div
              className="card text-dark"
              id="card1Id"
              style={{ backgroundColor: "#fe1f66", width: "100%" }}
            >
              <div className="card-header" style={{ fontWeight: "bold" }}>
                Tasks / Deadline
              </div>
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item tasks"
                  id="c1Id3"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a href="" target="_blank">
                    {" "}
                    OOP Project{" "}
                  </a>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ fontStyle: "italic" }}>NA</span>{" "}
                </li>
                <li
                  className="list-group-item tasks"
                  id="c1Id1"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a href="" target="_blank"></a> &nbsp;&nbsp;
                  <span style={{ fontStyle: "italic" }}></span>{" "}
                </li>
                <li
                  className="list-group-item tasks"
                  id="c1Id3"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a href="" target="_blank"></a> &nbsp;&nbsp;
                  <span style={{ fontStyle: "italic" }}></span>{" "}
                </li>
                <li
                  className="list-group-item tasks"
                  id="c1Id3"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a href="" target="_blank"></a> &nbsp;&nbsp;
                  <span style={{ fontStyle: "italic" }}></span>{" "}
                </li>
                <li
                  className="list-group-item tasks"
                  id="c1Id3"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a href="" target="_blank"></a> &nbsp;&nbsp;
                  <span style={{ fontStyle: "italic" }}></span>{" "}
                </li>
                <li
                  className="list-group-item tasks"
                  id="c1Id3"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a href="" target="_blank"></a> &nbsp;&nbsp;
                  <span style={{ fontStyle: "italic" }}></span>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-dark"
              id="card3Id"
              style={{ backgroundColor: "#fe1f66", width: "100%" }}
            >
              <div className="card-header" style={{ fontWeight: "bold" }}>
                END SEMESTER TIME TABLE
              </div>
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item tasks"
                  id="c1Id1"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a href="#" target="_blank">
                    MA201-(Probability)
                  </a>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ fontStyle: "bold" }}>08-12-2021</span>{" "}
                </li>
                <li
                  className="list-group-item tasks"
                  id="c1Id3"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a href="#" target="_blank">
                    CS201-(DM)
                  </a>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ fontStyle: "bold" }}>09-12-2021</span>
                  &nbsp;&nbsp;&nbsp;
                  <a
                    href="https://cdn.discordapp.com/attachments/912728915930394666/912730401825521814/unknown.png"
                    target="_blank"
                  >
                    Syllabus
                  </a>{" "}
                </li>
                <li
                  className="list-group-item tasks"
                  id="c1Id2"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  {" "}
                  <a href="#">CS202-(DAA)</a> &nbsp;&nbsp;&nbsp;
                  <span style={{ fontStyle: "bold" }}>10-12-2021</span>
                  &nbsp;&nbsp;{" "}
                  <a
                    href="https://cdn.discordapp.com/attachments/912728915930394666/912729260182098030/fa1c1679-8c3d-4268-a088-752195610360.png"
                    target="_blank"
                  >
                    Syllabus
                  </a>{" "}
                </li>
                <li
                  className="list-group-item tasks"
                  id="c1Id4"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a href="#" target="_blank">
                    CS207-(OOP)
                  </a>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ fontStyle: "bold" }}>11-12-2021</span>
                  &nbsp;&nbsp;{" "}
                  <a
                    href="https://cdn.discordapp.com/attachments/912728915930394666/912728934767009832/unknown.png"
                    target="_blank"
                  >
                    Syllabus
                  </a>{" "}
                </li>
                <li
                  className="list-group-item tasks"
                  id="c1Id5"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a href="#" target="_blank">
                    EC105-(CA)
                  </a>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ fontStyle: "bold" }}>13-12-2021</span>
                  &nbsp;&nbsp;&nbsp;
                  <a
                    href="https://cdn.discordapp.com/attachments/912728915930394666/912730004805263410/unknown.png"
                    target="_blank"
                  >
                    Syllabus
                  </a>{" "}
                </li>
                <li
                  className="list-group-item tasks"
                  id="c1Id6"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a href="#" target="_blank">
                    HS206-(ISP)
                  </a>{" "}
                  &nbsp;&nbsp;&nbsp;
                  <span style={{ fontStyle: "bold" }}>14-12-2021</span>&nbsp;
                  &nbsp;
                  <a href="" target="_blank">
                    NA
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-dark"
              id="card2Id"
              style={{ backgroundColor: "#fe1f66", width: "100%" }}
            >
              <div className="card-header" style={{ fontWeight: "bold" }}>
                Upcoming Holidays
              </div>
              <ul className="list-group list-group-flush">
                <li
                  className="list-group-item upholidays"
                  id="c2Id2"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a
                    href="https://iiitdwd.ac.in/docs/Academic_Calender.pdf"
                    target="_blank"
                  >
                    {" "}
                  </a>
                  -
                </li>
                <li
                  className="list-group-item upholidays"
                  id="c2Id1"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  <a
                    href="https://iiitdwd.ac.in/docs/Academic_Calender.pdf"
                    target="_blank"
                  ></a>
                  -
                </li>
                <li
                  className="list-group-item upholidays"
                  id="c2Id3"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  -
                </li>
                <li
                  className="list-group-item upholidays"
                  id="c2Id3"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  -
                </li>
                <li
                  className="list-group-item upholidays"
                  id="c2Id3"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  -
                </li>
                <li
                  className="list-group-item upholidays"
                  id="c2Id3"
                  style={{ backgroundColor: "#fe1f66" }}
                >
                  -
                </li>
              </ul>
            </div>
          </div>
          <script
            src="https://kit.fontawesome.com/2f87785634.js"
            crossOrigin="anonymous"
          ></script>

          <marquee
            behavior="alternate"
            direction="left"
            scrollamount="8"
            onMouseOver="this.stop()"
            onMouseOut="this.start()"
            id="marqueeId"
            style={{ width: "100%", marginBottom: 10, borderRadius: "5px" }}
          >
            <i
              className="fas fa-info-circle"
              style={{ backgroundColor: "#fe1f66" }}
            ></i>{" "}
            Updates Section{" "}
          </marquee>

          <div
            className="alert alert-info" 
            id="alertId"
            role="alert"
            style={{
              textAlign: "center",
              marginTop: "1px",
              width:'100%',
              backgroundColor: "#fe1f66",
              borderStyle:"none",
            }}
          >
            <img src="https://img.icons8.com/ios/25/000000/google-classroom.png"/>
            Google classNameroom
            <a
              href="https://classNameroom.google.com/h"
              target="_blank"
              className="alert-link"
            >
              here
            </a>
            . &nbsp;&nbsp;&nbsp;
            <img src="https://img.icons8.com/fluency/20/000000/gmail-new.png" />
            Gmail{" "}
            <a
              href="https://mail.google.com/mail/u/0/#inbox"
              target="_blank"
              className="alert-link"
            >
              here
            </a>{" "}
            &nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </section>
      {/* <select name="" id=""></select> */}
      <Footer />
    </>
  );
};

export default Links;
