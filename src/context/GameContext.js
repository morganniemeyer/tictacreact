import { useState } from 'react';

const { useContext } = require('react');
const { createContext } = require('react');

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [player, setPlayer] = useState('X');
  const [Board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [Active, setActive] = useState('true');
  const [Message, setMessage] = useState('Your turn X!');

  return <GameContext.Provider>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext cannot live without GameProvider');
  }
  return context;
};

export { GameProvider, useGameContext };
