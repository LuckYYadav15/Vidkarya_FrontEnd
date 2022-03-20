import React ,{useState} from "react";

import PdfPreview from "./PdfPreview";

export default function NotesPopup({ subjectNotes, setdisplayPopup }) {
  const [displaypdf, setdisplaypdf] = useState(false);
  const [pdfData, setpdfData] = useState({})

  const showpdf = (id ,link) => {

    setpdfData({notesId:id ,fileLink:link})
      setdisplaypdf(true);
  };
  console.log(subjectNotes);
  return (
    <div>
      {displaypdf ? (
        <PdfPreview NotesId={pdfData.notesId} fileLink={pdfData.fileLink} setdisplaypdf={setdisplaypdf}/>
      ) : (
        <div class="popup-wrapper" id="notes-display">
          <div class="popup">
            <div class="popup-heading border border-primary">
              <ul class="breadcrumb mx-auto my-1">
                <li class="breadcrumb-item text-white">{subjectNotes.CourseName}</li>
                <li class="breadcrumb-item text-white">4</li>
                <li class="breadcrumb-item text-white">IIIT dharwad</li>
              </ul>
              <button class="mx-5 px-3 py-2 rounded cross-button" onClick={() => setdisplayPopup(false)}>
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="chapter-card align-items-center">
              {subjectNotes &&
                subjectNotes.notes.map((ele, idx) => {
                  return (
                    <Card
                      NotesId={ele.NotesId}
                      author={ele.Showtag}
                      date={ele.DateOfUpload}
                      showpdf={showpdf}
                      subject={subjectNotes.CourseName}
                      fileLink={ele.fileLink}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Card = ({NotesId, date, subject, author, showpdf ,fileLink }) => {
  return (
    <div class="chapters" onClick={()=>showpdf(NotesId,fileLink)}>
      <p>{date}</p>
      <p class="chapter-title">{subject}</p>
      <p class="chapter-teacher text-center">{author}</p>
    </div>
  );
};
