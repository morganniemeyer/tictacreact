import React from 'react';
import './Square.css';
import { handleBoxClick } from '../../context/GameContext.js';

export default function Square({ square }) {
  return (
    <div className="box" onClick={handleBoxClick}>
      {' '}
      {square}{' '}
    </div>
  );
}
