import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function GoogleAuth() {

    const navigte = useNavigate();
  const firebaseConfig = {
    apiKey: "AIzaSyD8Il8jKRkhLKvpwRigVSDwf7sVBJOaO0o",
    authDomain: "vidkarya-d15ca.firebaseapp.com",
    projectId: "vidkarya-d15ca",
    storageBucket: "vidkarya-d15ca.appspot.com",
    messagingSenderId: "335593067946",
    appId: "1:335593067946:web:802fec8f7f5b2bd910c7d3",
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
          const userDetails = {
            userName: res.user.displayName,
            email: res.user.email,
          };

          if(!res.user.email.includes("@iiitdwd.ac.in")){
              navigte('/auth');
          }else{

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
