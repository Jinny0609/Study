// Dumbo.jsx

import { useState } from 'react';

const generateGameBoard = () => {
  console.log("MAKING THE INITIAL GAME BOARD");
  return Array(5000).fill(null);
};

export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard);

  return (
    <div>
      <button onClick={() => setBoard("hello!")}>
        눌러서 상태 변경
      </button>
    </div>
  );
}