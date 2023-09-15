import "./style.css";
const Index = ({ title, color, handleClick, type }) => {
  
  return (
    <button type={type} className={color} onClick={handleClick}>
      {title}
    </button>
  );
}

export default Index;
