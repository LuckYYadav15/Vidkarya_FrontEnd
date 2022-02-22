import './CardLayout.css'

const CardLayout = (props) => {
  return (
    <div className="col">
      <div className="card cards">
        <div className="card-body">
          <h5 className="card-title">{props.header}</h5>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;