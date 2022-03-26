const samplepdfs = [
  {
    id: "01",
    branch: "CSE",
    sem: "4",
    CourseName: "DBMS",
    notes: [
      {
        NotesId: "01_CSE_2020_IIITDWD_DBMS",
        Showtag: "Author 1",
        fileLink:
          "https://drive.google.com/file/d/1LsUM9H5qg4_z0-2t-I7cqekPClQkSBLJ/preview",
        DateOfUpload: "21-02-2022",
      },
      {
        NotesId: "02_CSE_2020_IIITDWD_DBMS",
        Showtag: "Author 2",
        fileLink:
          "https://drive.google.com/file/d/1JzkTXQ-A-MTSnLRbssrj_vbi4-eSLB4d/preview",
        DateOfUpload: "21-02-2022",
      },
      {
        NotesId: "03_CSE_2020_IIITDWD_DBMS",
        Showtag: "Author 3",
        fileLink:
          "https://drive.google.com/file/d/1KW0F1pkVI5wRfyiTlCmOWRYnf0pHhbLN/preview",
        DateOfUpload: "21-02-2022",
      },
      {
        NotesId: "05_CSE_2020_IIITDWD_DBMS(after Mids)",
        Showtag: "Author 5",
        fileLink:
          "https://drive.google.com/file/d/1qaxPv7IVPkNA_bbRCq6MRTzk_6kDZc20/preview",
        DateOfUpload: "26-03-2022",
      },
    ],
  },
  {
    id: "02",
    branch: "CSE",
    sem: "4",
    CourseName: "Linear Algebra",
    notes: [
      {
        NotesId: "01_CSE_2020_IIITDWD_LA",
        Showtag: "Author 1",
        fileLink:
          "https://drive.google.com/file/d/1LA8A10tI9ZCViw3ZmwpJTCVtOmueHRDe/preview",
        DateOfUpload: "21-02-2022",
      },
      {
        NotesId: "02_CSE_2020_IIITDWD_MATHS",
        Showtag: "Author 2",
        fileLink:
          "https://drive.google.com/file/d/1iKUdeRaUXifZ7q9f9IH6OntlXLp4yEwz/preview",
        DateOfUpload: "21-02-2022",
      },
      {
        Showtag: "Author 3",
        NotesId: "03_CSE_2020_IIITDWD_LA",
        fileLink:
          "https://drive.google.com/file/d/1Kapt_oWh9MmYwbBi3ggLuBKmQ_67uO7c/preview",
        DateOfUpload: "21-02-2022",
      },
      {
        Showtag: "Author 4",
        NotesId: "04_CSE_2020_IIITDWD_LA",
        fileLink: "https://drive.google.com/file/d/1ZoMpOloyhUW7HLJaLB5JX123xnCgvwn0/preview",
        DateOfUpload: "16-03-2022"
      },
      {
        Showtag: "Author 1",
        NotesId: "01_CSE_2020_IIITDWD_LA(21-22 March)",
        fileLink: "https://drive.google.com/file/d/1_RwCaA_CfkboFiOzLgCxJw6u61cov6Ag/preview",
        DateOfUpload: "26-03-2022"
      },
      {
        Showtag: "Author 2",
        NotesId: "02_CSE_2020_IIITDWD_LA(after mids)",
        fileLink: "https://drive.google.com/file/d/16rEn_xLwyMrF4sUkEY95X8iyZDJdN_1W/preview",
        DateOfUpload: "26-03-2022"
      },
      {
        Showtag: "Author 4",
        NotesId: "04_CSE_2020_IIITDWD_LA(10-latest March)",
        fileLink: "https://drive.google.com/file/d/1ORhJY3b1A10Wqud47lrBpDEGgE9Ki4UY/preview",
        DateOfUpload: "26-03-2022"
      },
      {
        Showtag: "Author 7",
        NotesId: "07_CSE_2020_IIITDWD_LA(10-23 March)",
        fileLink: "https://drive.google.com/file/d/1l4qtFZM6oQLFDu6jYAzSsFCh93xnaXeG/preview",
        DateOfUpload: "26-03-2022"
      },
    ],
  },
  {
    id: "03",
    branch: "CSE",
    sem: "4",
    CourseName: "Operating System",
    notes: [
      {
        NotesId: "05_CSE_2020_IIITDWD_OS",
        Showtag: "Author 5",
        fileLink: "https://drive.google.com/file/d/1PhE5HHIMjOQygupl8oX1aZYTk6TTPSs6/preview",
        DateOfUpload: "16-03-2022"
      },
      {
        NotesId: "02_CSE_2020_IIITDWD_OS(after mids)",
        Showtag: "Author 2",
        fileLink: "https://drive.google.com/file/d/1FG0GUHvOZA3IxPxxZ7153MkeeQrEA_UU/preview",
        DateOfUpload: "26-03-2022"
      }
    ],
  },
  {
    id: "04",
    branch: "CSE",
    sem: "4",
    CourseName: "Software Engineering",
    notes: [
      {
        NotesId: "03_CSE_2020_IIITDWD_SE",
        Showtag: "Author 3",
        fileLink: "https://drive.google.com/file/d/1KbniGVSWRfAky7Llq3phGZfdgy2ze6Xf/preview",
        DateOfUpload: "21-02-2022"
      },
      {
        NotesId: "01_CSE_2020_IIITDWD_SE(after mids)",
        Showtag: "Author 1",
        fileLink: "https://drive.google.com/file/d/1zEdtj7qwRq2R1Dr2KcD6MRQnn7RU6CKL/preview",
        DateOfUpload: "26-03-2022"
      }
    ],
  },
  {
    id: "05",
    branch: "CSE",
    sem: "4",
    CourseName: "Theory of Computation",
    notes: [
      {
        NotesId: "01_CSE_2020_IIITDWD_TOC",
        Showtag: "Author 1",
        fileLink:
          "https://drive.google.com/file/d/1DzgBYhOInEMfOCjH9BoeGyYvXo64ckLo/preview",
        DateOfUpload: "21-02-2022",
      },
      {
        NotesId: "03_CSE_2020_IIITDWD_TOC",
        Showtag: "Author 3",
        fileLink:
          "https://drive.google.com/file/d/1KdfBqyY08DCW4iE_7iHDpVxCwGDgyRBX/preview",
        DateOfUpload: "21-02-2022",
      },
      {
        NotesId: "04_CSE_2020_IIITDWD_TOC(15-24 March)",
        Showtag: "Author 4",
        fileLink:
          "https://drive.google.com/file/d/10JTgYylS99QFcWufBJf6rC3hYWQJ5pPa/preview",
        DateOfUpload: "26-03-2022",
      },
      {
        Showtag: "Author 6",
        NotesId: "06_CSE_2020_IIITDWD_TOC(24 March)",
        fileLink: "https://drive.google.com/file/d/1MfUQiheAVlOES6UzQqlVMTXV1QewNYUU/preview",
        DateOfUpload: "26-03-2022"
      },
    ],
  },
];

export default samplepdfs;
