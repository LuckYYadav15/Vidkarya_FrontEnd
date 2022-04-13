const samplepdfs = [
  {
    id: '11',
    branch: 'CSE',
    sem: "4",
    CourseName: "Theory of Computation",
    NotesId: "03_CSE_2020_IIITDWD_TOC",
    Showtag: "Author 3",
    fileLink: "https://drive.google.com/file/d/1KdfBqyY08DCW4iE_7iHDpVxCwGDgyRBX/preview",
    DateOfUpload: "21-02-2022"
  },
  {
    id: '01',
    branch: 'CSE',
    sem: "4",
    CourseName: "DBMS",
    NotesId: "01_CSE_2020_IIITDWD_DBMS",
    Showtag: "Author 1",
    fileLink: "https://drive.google.com/file/d/1LsUM9H5qg4_z0-2t-I7cqekPClQkSBLJ/preview",
    DateOfUpload: "21-02-2022"
  },
  {
    id: '02',
    branch: 'CSE',
    sem: "4",
    CourseName: "DBMS",
    NotesId: "02_CSE_2020_IIITDWD_DBMS",
    Showtag: "Author 2",
    fileLink: "https://drive.google.com/file/d/1JzkTXQ-A-MTSnLRbssrj_vbi4-eSLB4d/preview",
    DateOfUpload: "21-02-2022"
  },
  {
    id: '03',
    branch: 'CSE',
    sem: "4",
    CourseName: "DBMS",
    NotesId: "03_CSE_2020_IIITDWD_DBMS",
    Showtag: "Author 3",
    fileLink: "https://drive.google.com/file/d/1KW0F1pkVI5wRfyiTlCmOWRYnf0pHhbLN/preview",
    DateOfUpload: "21-02-2022"
  },
  {
    id: '04',
    branch: 'CSE',
    sem: "4",
    CourseName: "Linear Algebra",
    NotesId: "01_CSE_2020_IIITDWD_LA",
    Showtag: "Author 1",
    fileLink: "https://drive.google.com/file/d/1LA8A10tI9ZCViw3ZmwpJTCVtOmueHRDe/preview",
    DateOfUpload: "21-02-2022"
  },
  {
    id: '05',
    branch: 'CSE',
    sem: "4",
    CourseName: "Linear Algebra",
    NotesId: "02_CSE_2020_IIITDWD_MATHS",
    Showtag: "Author 2",
    fileLink: "https://drive.google.com/file/d/1iKUdeRaUXifZ7q9f9IH6OntlXLp4yEwz/preview",
    DateOfUpload: "21-02-2022"
  },
  {
    id: '06',
    branch: 'CSE',
    sem: "4",
    CourseName: "Linear Algebra",
    Showtag: "Author 4",
    NotesId: "04_CSE_2020_IIITDWD_LA",
    fileLink: "https://drive.google.com/file/d/1fwUNzSUDSx0FRUA2BUceqSE1iwzpFrcQ/preview",
    DateOfUpload: "13-04-2022"
  },
  {

    id: '07',
    branch: 'CSE',
    sem: "4",
    CourseName: "Linear Algebra",
    NotesId: "04_CSE_2020_IIITDWD_COMPLETE",
    Showtag: "Author 4",
    fileLink: "https://drive.google.com/file/d/1ZoMpOloyhUW7HLJaLB5JX123xnCgvwn0/preview",
    DateOfUpload: "16-03-2022"
  },
  {
    id: '08',
    branch: 'CSE',
    sem: "4",
    CourseName: "Operating System",
    NotesId: "05_CSE_2020_IIITDWD_OS",
    Showtag: "Author 5",
    fileLink: "https://drive.google.com/file/d/1PhE5HHIMjOQygupl8oX1aZYTk6TTPSs6/preview",
    DateOfUpload: "16-03-2022"
  },
  {
    id: '09',
    branch: 'CSE',
    sem: "4",
    CourseName: "Software Engineering",
    NotesId: "03_CSE_2020_IIITDWD_SE",
    Showtag: "Author 3",
    fileLink: "https://drive.google.com/file/d/1KbniGVSWRfAky7Llq3phGZfdgy2ze6Xf/preview",
    DateOfUpload: "21-02-2022"
  },
  {
    id: '10',
    branch: 'CSE',
    sem: "4",
    CourseName: "Theory of Computation",
    Showtag: "Author 1",
    NotesId: "01_CSE_2020_IIITDWD_TOC",
    fileLink: "https://drive.google.com/file/d/1DzgBYhOInEMfOCjH9BoeGyYvXo64ckLo/preview",
    DateOfUpload: "21-02-2022"
  }

];
// samplepdfs.id.sort();
// samplepdfs.sort((i)=> (return i.id))
samplepdfs.sort((i, j) => {
  return Number(i.id) - Number(j.id)
});

export default samplepdfs; 
