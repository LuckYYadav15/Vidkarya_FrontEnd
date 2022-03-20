import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
// const fileLink = 'https://drive.google.com/file/d/1-m8ONieo3yn-diGGUHDVDKyVA-X0rsAL/preview'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



export default function PdfPreview({
  NotesId,
  fileLink,
  setdisplaypdf
}) {

  
  
  const [pdfSrc, setpdfSrc] = useState("");
 
  // console.log(pdfSrc);
  return (
    <>
      <div className={`pdf-overview `}>
        <div className="pt-2 pdf-nav">
          <div className="d-flex">
            <button className="cross-button text-white px-3 py-2 rounded" onClick={()=>setdisplaypdf(false)}>
            <i class="fas fa-times"></i>
            </button>
          </div>
          <div className="d-flex">
            <h6 className=" my-2 text-white d-inline mx-auto h4">{NotesId}</h6>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className={`pdf-preview`}>
            {/* <embed src={pdfFile} width="800px" height="2100px" /> */}
            <iframe
              src = {fileLink}
              height="600"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
