import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function GoogleAuth() {

  const navigte = useNavigate();
  const firebaseConfig = {
    // apiKey: "AIzaSyD8Il8jKRkhLKvpwRigVSDwf7sVBJOaO0o",
    // authDomain: "vidkarya-d15ca.firebaseapp.com",
    // projectId: "vidkarya-d15ca",
    // storageBucket: "vidkarya-d15ca.appspot.com",
    // messagingSenderId: "335593067946",
    // appId: "1:335593067946:web:802fec8f7f5b2bd910c7d3",
    apiKey: "AIzaSyCkynfjk5DorCtJMvpWElOkcK_P1a4zsUw",
    authDomain: "vidkarya-5706e.firebaseapp.com",
    projectId: "vidkarya-5706e",
    storageBucket: "vidkarya-5706e.appspot.com",
    messagingSenderId: "991078406903",
    appId: "1:991078406903:web:cbd39a0411e8278ae811f2",
    measurementId: "G-DCEL3V31NP"
  };
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase
  const auth = getAuth(app);

  const Provider = new GoogleAuthProvider();

  useEffect(() => {
    const signInwithGoogle = () => {
      signInWithPopup(auth, Provider)
        .then((res) => {
          //console.log(res.user);
          const userName = res.user.displayName;
          const email = res.user.email;
          const userDetails = {
            userName:userName,
            email: email,
          };
          const {data}  = axios.post("https://vidkarya-backend-98.herokuapp.com/google-auth", {
            userName, email
      });
          console.log(userDetails);
          if (!res.user.email.includes("@iiitdwd.ac.in")) {
            navigte('/auth');
          } else {

            localStorage.setItem("userInfo", JSON.stringify(userDetails));
            navigte('/');
          }


        })
        .catch((e) => {
          console.log(e.message);
        });
    };

    signInwithGoogle();
  }, []);

  return <div>GoogleAuth</div>;
}
