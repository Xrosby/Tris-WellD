import "./Cell.css";

function Cell(props) {
  let handleCellClick = () => {
    if (props.value === null) props.callBack(props.cellIndex);
  };
  console.log(props.winningCell);
  return (
    <div
      onClick={() => handleCellClick()}
      id={"cell-" + props.cellIndex}
      className={"cell " + props.value}
    >
     {props.value}
    </div>
  );
}

export default Cell;
