import React from "react";
import '../components/Layouts/notes.css'
export default function PdfInfoCard({ subject, name, date, auther, handleShowPdf }) {
  return (
    <div
      className="pdf-info-card chapters"
      onClick={() => handleShowPdf(name)}
    >
    {/* <div className="chapters"> */}
    <p>{date}</p>
    <p className="chapter-title">{subject}</p>
    <p className="chapter-teacher">{auther}</p>
  {/* </div> */}
    </div>
  );
}
