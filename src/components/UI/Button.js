import './Button.css'

const Button = (props) => {
  return (
    <button 
      className='butn' 
      type={props.type} 
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
};

export default Button;