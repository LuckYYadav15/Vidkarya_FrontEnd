import CardLayout from "../Layouts/CardLayout";
import Notes from "../../NotesComponents/Notes";
import { Link } from "react-router-dom";
import { useState } from "react";
import './notes.css'
import Header from "./Header";

const MainLayoutForNotes = () => {
  const [course, setcourse] = useState(null);
  const [notes, setnotes] = useState();
  const [sem, setsem] = useState('1')

  const selectNotes = (sub, notes) => {
    setcourse(sub);
  };

  console.log(window.pageYOffset);
  return (
    <>
    
    <Header />
      <div className="heading">
        <h1 className="text-white">Courses</h1>
      </div>
      <div className="buttons">
        <button value="" className="head-btn"  onClick={() => selectNotes("CSE", "")}>
          CSE
        </button>
        <button value="" className="head-btn" onClick={() => selectNotes("DSAI", "")}>
          DSAI
        </button>
        <button value="" className="head-btn" onClick={() => selectNotes("ECE", "")}>
          ECE
        </button>
        <label for="semester" className="label-name">
          <span  className="text-white">Sem:</span>
          <select name="semester" id="semester" onChange={(e)=>setsem(e.target.value)} value={sem}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </label>
      </div>
     
       

      {course ? <Notes course={course} sem={sem} /> : <></>}
    </>
  );
};

export default MainLayoutForNotes;
