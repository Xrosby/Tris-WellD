import "./Cell.css";

function Cell(props) {
  let handleCellClick = () => {
    if (props.value === null) props.callBack(props.cellIndex);
  };
  return (
    <div onClick={() => handleCellClick()} className={"cell " + props.value}>
      {props.value}
    </div>
  );
}

export default Cell;
