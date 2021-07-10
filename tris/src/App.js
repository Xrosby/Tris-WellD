import "./App.css";
import TicTacToeBoard from "./Components/TicTacToeBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
        <div>
          <TicTacToeBoard />
        </div>
      </header>
    </div>
  );
}

export default App;
