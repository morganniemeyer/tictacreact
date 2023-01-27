import React from 'react';
import { useGameContext } from '../../context/GameContext.js';
import Square from '../Square/Square.js';
import './Board.css';

export default function Board() {
  const { board } = useGameContext();
  return (
    <div className="board">
      {board.map((square, index) => (
        <Square key={index} square={square} index={index}/>
      ))}
    </div>
  );
}
