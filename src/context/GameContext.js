import { useState } from 'react';

const { useContext } = require('react');
const { createContext } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [player, setPlayer] = useState('X');
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [active, setActive] = useState('true');
  const [Message, setMessage] = useState('Your turn X!');

  const handleBoxClick = (index) => {
    if (!active) return;
    if (board[index] !== '') return;
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    let newPlayer = null;
    if (player === 'X') {
      newPlayer = 'O';
    }
    if (player === 'O') {
      newPlayer = 'X';
    }
    setPlayer(newPlayer);

    setMessage(`Your turn, ${newPlayer}.`);
  };

  return (
    <GameContext.Provider
      value={{
        handleBoxClick,
        player,
        setPlayer,
        board,
        setBoard,
        active,
        setActive,
        Message,
        setMessage,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext cannot live without GameProvider');
  }
  return context;
};

export { GameProvider, useGameContext };
