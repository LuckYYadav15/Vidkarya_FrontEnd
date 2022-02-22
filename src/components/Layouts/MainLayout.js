import CardLayout from "../Layouts/CardLayout";
import Button from "../UI/Button";
import { Link } from "react-router-dom";


const MainLayout = () => {
  return (
    <div className="container branches-tolink-btns mt-2">
      <div className="row my-2">
        <h1>Classrooms Links...</h1>
      </div>
      <hr />
      <div className="row justify-content-around">
        <div className="col">
          <Link to="/links/cs">
            <button className="btn btn-primary ">CSE</button>
          </Link>
        </div>
        <div className="col">
          <button className="btn btn-primary">ECE</button>
        </div>
        <div className="col">
          <button className="btn btn-primary">DSAI</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default MainLayout;
