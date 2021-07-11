import "./RestartButton.css";

function RestartButton(props) {
  return (
    <button
      onClick={() => props.restartGame()}
      type="button"
      className="btn-restart"
    >
      RESTART GAME
    </button>
  );
}

export default RestartButton;
