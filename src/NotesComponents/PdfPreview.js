import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
// const fileLink = 'https://drive.google.com/file/d/1-m8ONieo3yn-diGGUHDVDKyVA-X0rsAL/preview'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



export default function PdfPreview({
  displayPdf,
  pdfName,
  handleCancelPdfShow,
  fileLink,
}) {
  const [pages, setpages] = useState(null);
  const [pageNo, setpageNo] = useState(1);
  const [isShowPdf, setisShowPdf] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setpages(numPages);
    setpageNo(1);
  };
  const array = new Array(pages);
  const [pdfSrc, setpdfSrc] = useState("");
  useEffect(() => {
    setpdfSrc(fileLink(pdfName))

  }, [])
  // console.log(pdfSrc);
  return (
    <>
      <div className={`pdf-overview d-${displayPdf ? "block" : "none"}`}>
        <div className="mt-2 pdf-nav">
          <div className="col-1">
            <button className="btn text-white " onClick={handleCancelPdfShow}>
              X
            </button>
          </div>
          <div className="col d-flex">
            <h6 className=" my-2 text-white d-inline">{pdfSrc.NotesId}</h6>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className={`pdf-preview`}>
            {/* <embed src={pdfFile} width="800px" height="2100px" /> */}
            <iframe
              src = {pdfSrc.fileLink}
              width="1000"
              height="600"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
