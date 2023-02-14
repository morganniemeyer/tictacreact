import React from 'react';
import './Square.css';
import { useGameContext } from '../../context/GameContext.js';

export default function Square({ square, index }) {
  const { handleBoxClick } = useGameContext();
  return (
    <div
      className="box"
      onClick={() => {
        handleBoxClick(index);
      }}
    >
      {square}
    </div>
  );
}
