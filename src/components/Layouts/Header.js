import "./Header.css";
import { Link, Navigate , useNavigate} from "react-router-dom";
import dp from "../pages/images/image-default-dp.jpg";
import { useEffect ,useState } from "react";



function changestate() {
  if (window.innerWidth <= 992) {
    return <span>profile</span>;
  } else {
    return <img src={dp} alt="image" />;
  }
}

const Header = () => {

  const navigate = useNavigate();
  const [user, setuser] = useState({});
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLogout = ()=>{

    localStorage.removeItem("userInfo");
    navigate('/auth')
  }
  useEffect(() => {
   
      
    if(localStorage.getItem('userInfo')){
        setisLoggedIn(true);
        setuser(JSON.parse(localStorage.getItem('userInfo')))
      
    }else{
      setisLoggedIn(false);
      console.log(isLoggedIn);
    }
    
  
}, [localStorage]);
  return (
    <div className="sticky-top main-header">
      <section>
        <nav className="navbar navbar-expand-lg navbar-dark" id="navnav">
          <div className="container-fluid">
            <img
              src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
              alt=""
              width="65"
              className="web-icon d-inline-block align-text-top"
            />
            <a className="heading navbar-brand ms-1" id="brandtext" href="/">
              <div id="brand-name" href="homepage.html">
                Vidkarya
              </div>
              <div>
                <h6 id="slogan1">Education with Excellence </h6>
              </div>
            </a>
            <button
              className="navbar-toggler"
              id="menubutton"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <Link to="/">
                  <li className=" nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                </Link>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resources
                  </a>
                  <ul
                    className="dropdown-menu dropdown_menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <Link to="/notes">
                      <li>
                        <a className="dropdown-item" href="/notes">
                          Notes
                        </a>
                      </li>
                    </Link>

                    <Link to="/links">
                      <li>
                        <a className="dropdown-item" href="/links">
                          Links
                        </a>
                      </li>
                    </Link>
                    <li>
                      <a className="dropdown-item" href="/mentors">
                        Get a mentor
                      </a>
                    </li>
                  </ul>
                </li>
                <Link to="/about">
                  <li className="nav-item">
                    <a className="nav-link" >
                      About Us
                    </a>
                  </li>
                </Link>
                <li className="nav-item dropdown profile">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="text">profile</span>
                    <span className="image">
                      <img src={dp} />
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu  dropdown_menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li className="ml-2 profile-name" >
                      <p className="text-white ml-2">{user.userName}</p>
                    </li>
                    <li>
                      <button className="dropdown-item .logout" onClick={handleLogout}>
                      {isLoggedIn?"Log out":"Log in"}
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
