// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getAuth ,GoogleAuthProvider ,signInWithPopup}  from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


const firebaseConfig = {
  // apiKey: "AIzaSyD8Il8jKRkhLKvpwRigVSDwf7sVBJOaO0o",
  // authDomain: "vidkarya-d15ca.firebaseapp.com",
  // projectId: "vidkarya-d15ca",
  // storageBucket: "vidkarya-d15ca.appspot.com",
  // messagingSenderId: "335593067946",
  // appId: "1:335593067946:web:802fec8f7f5b2bd910c7d3"
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
export const  auth  = getAuth(app);

const Provider = new GoogleAuthProvider();


export const signInwithGoogle = ()=>{
    

    signInWithPopup(auth , Provider).then((res)=>{
        //console.log(res.user);
        const userDetails = {
            userName:res.user.displayName,
            email:res.user.email
          }

          
       localStorage.setItem("userInfo" ,JSON.stringify(userDetails));
       window.location.href('/')
     
      
        
    }).catch((e)=>{
        console.log(e.message); 
  
    })
}