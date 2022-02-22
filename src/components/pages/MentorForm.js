import Header  from "../Layouts/Header";
import React from 'react';
import Footer from '../Layouts/Footer';
import { Link, Navigate , useNavigate} from "react-router-dom";
import './MentorForm.css'

export default function MentorForm(){
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
          <Header/>
          <section className="main-container"> 
              <form className="mentor-container" id="mentor-form">
                  <div className="title"><h1>Mentor contact form</h1></div>
                  <div className="field">
                      <input type="text" id="name" maxlength="32" placeholder=" " required />
                      <span>Username</span>
                    </div>
                  <div className="field">
                      <input type="email" id="email" required placeholder=" " pattern="\S+.*" />
                      <span>User Email</span>
                    </div>
                  <div className="field">
                      <input type="text" id='mentor' maxlength="32" placeholder=" " required />
                      <span>Mentor name</span>
                    </div>
                  <div className="field">
                      <input type="text" minlength="10" maxlength="10" placeholder=" " required />
                      <span>user Mobile no</span>
                    </div>
                  <div className="button-form">
                    <button type="submit" id="btn-mentor">Submit</button>
                  </div>
              </form>
          </section>
          {/* <Footer/> */}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"></script>
        </>
      );
}