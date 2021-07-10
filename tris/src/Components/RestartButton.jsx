import "./RestartButton.css";

function RestartButton(props) {
  return (
    <button
      onClick={() => props.restartGame()}
      type="button"
      className="btn-restart"
    >
      Restart game
    </button>
  );
}

export default RestartButton;
