import React from 'react';
import { useGameContext } from '../../context/GameContext.js';

export default function MessBox() {
  const { message } = useGameContext();
  return <div>{message}</div>;
}
