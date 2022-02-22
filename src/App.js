import { Link, Route, Routes } from "react-router-dom";
import "./bootstrap.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Layouts/Footer";
import MainLayout from "./components/Layouts/MainLayout";
import MainLayoutForNotes from "./components/Layouts/MainLayoutForNotes";
import Auth from "./components/pages/Auth";
import AboutUs from "./components/pages/AboutUs";
import Home from "./components/pages/Home";
import Header from "./components/Layouts/Header";
import Links from "./components/pages/Links";
import Mentors from "./components/pages/Mentors";
import Notes from "./NotesComponents/Notes";
import Verify from "./components/Verify";
import ResetTemplate from "./components/Layouts/ResetTemplate";
import MentorRegister from "./components/pages/MentorRegister";
import GoogleAuth from "./auth/GoogleAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Notes" exact element={<Notes />} />
        <Route path="/links" exact element={<Links />} />
        <Route path="/about" exact element={<AboutUs />} />
        <Route path="/mentors" exact element={<Mentors />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/verify" exact element={<Verify />} />
        <Route path="/resetPassword" exact element={<ResetTemplate/>} />
        <Route path="/mentor/register" exact element={<MentorRegister/>} />
        <Route path="/google-auth" exact element={<GoogleAuth/>} />
      </Routes>
    </>
  );
}

export default App;
