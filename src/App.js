import { useState } from 'react';

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  function handleClick(i) {
    if (square[i]) return;
    const nextSq = square.slice();
    if (isX) {
      nextSq[i] = 'X';
      setIsX(false);
    } else {
      nextSq[i] = 'O';
      setIsX(true);
    }
    setSquare(nextSq);
  }
  return (
   <>
     <div className="board-row">
       <Square value={square[0]} onSqClick={() => handleClick(0)} />
       <Square value={square[1]} onSqClick={() => handleClick(1)} />
       <Square value={square[2]} onSqClick={() => handleClick(2)} />
     </div>
     <div className="board-row">
       <Square value={square[3]} onSqClick={() => handleClick(3)} />
       <Square value={square[4]} onSqClick={() => handleClick(4)} />
       <Square value={square[5]} onSqClick={() => handleClick(5)} />
     </div>
     <div className="board-row">
       <Square value={square[6]} onSqClick={() => handleClick(6)} />
       <Square value={square[7]} onSqClick={() => handleClick(7)} />
       <Square value={square[8]} onSqClick={() => handleClick(8)} />
     </div>
   </>
   )
}

function Square({ value, onSqClick }) {
  return (
    <button className="square" onClick={onSqClick}>{value}</button>
    )
}