import './App.css';
import Board from './component/board/Board.js';
import Header from './component/Header/Header.js';
import MessBox from './component/MessBox/MessBox.js';

function App() {
  return (
    <div className="allofit">
      <Header />
      <MessBox />
      <Board />
    </div>
  );
}

export default App;
