const Button = ({caption, handleClick}) => {
  return <button onClick={handleClick} className="btn btn-primary">{caption}</button>
}

export default Button;