import { useState } from 'react';

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  function handleClick(i) {
    const nextSq = square.slice();
    nextSq[i] = 'X';
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
       <Square value={square[5]} onSqClick={() => handleClick(4)} />
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