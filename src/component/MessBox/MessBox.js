import React from 'react';
import { useGameContext } from '../../context/GameContext.js';

export default function MessBox() {
  const { message, active, handleReset } = useGameContext();
  if (!active) {
    return (
      <div>
        <h2>{message}</h2>
        <button
          onClick={() => {
            handleReset();
          }}
        >
          Play Again!
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{message}</h2>
      </div>
    );
  }
}
