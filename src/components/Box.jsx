import "./style/Box.css";

const Box = ({ id, value, handleBoxClick }) => {
  const style = `box ${value}`;

  return (
    <button onClick={() => handleBoxClick(id, value)} className={style}>
      {value}
    </button>
  );
};

export default Box;
