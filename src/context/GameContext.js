import { useState } from 'react';

const { useContext } = require('react');
const { createContext } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [player, setPlayer] = useState('X');
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [active, setActive] = useState('true');
  const [message, setMessage] = useState('Your turn X!');

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

  const winConditions = () => {
    let newPlayer = null;
    if (player === 'X') {
      newPlayer = 'O';
    }
    if (player === 'O') {
      newPlayer = 'X';
    }

    if (board[0] === board[1] && board[1] === board[2] && board[2] === 'X') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[0] === board[1] && board[1] === board[2] && board[2] === 'O') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[3] === board[4] && board[4] === board[5] && board[5] === 'O') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[3] === board[4] && board[4] === board[5] && board[5] === 'X') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[6] === board[7] && board[7] === board[8] && board[8] === 'X') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[6] === board[7] && board[7] === board[8] && board[8] === 'O') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[6] === board[4] && board[4] === board[2] && board[2] === 'O') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[6] === board[4] && board[4] === board[2] && board[2] === 'X') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[0] === board[4] && board[4] === board[8] && board[8] === 'X') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[0] === board[4] && board[4] === board[8] && board[8] === '0') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[0] === board[3] && board[3] === board[6] && board[6] === '0') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[0] === board[3] && board[3] === board[6] && board[6] === 'X') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[1] === board[4] && board[4] === board[7] && board[7] === 'X') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[1] === board[4] && board[4] === board[7] && board[7] === 'O') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[2] === board[5] && board[5] === board[8] && board[8] === 'O') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
    if (board[2] === board[5] && board[5] === board[8] && board[8] === 'X') {
      setActive(false);
      setMessage(`You win ${newPlayer}!`);
    }
  };
  const tieConditions = () => {
    if (!board.includes('')) {
      setActive(false);
      setMessage('Womp, womp. Everyone loses.');
    }
  };

  const checkStatus = () => {
    if (!active) return;
    tieConditions();
    winConditions();
  };
  checkStatus();

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
        message,
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
