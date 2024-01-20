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
       <Square value={square[0]} onClick={() => handleClick(0)} />
       <Square value={square[1]} onClick={() => handleClick(1)} />
       <Square value={square[2]} onClick={() => handleClick(2)} />
     </div>
     <div className="board-row">
       <Square value={square[3]} onClick={() => handleClick(3)} />
       <Square value={square[4]} onClick={() => handleClick(4)} />
       <Square value={square[5]} onClick={() => handleClick(4)} />
     </div>
     <div className="board-row">
       <Square value={square[6]} onClick={() => handleClick(6)} />
       <Square value={square[7]} onClick={() => handleClick(7)} />
       <Square value={square[8]} onClick={() => handleClick(8)} />
     </div>
   </>
   )
}

function Square({ value, onSqClick }) {
  return (
    <button className="square" onClick={onSqClick}>{value}</button>
    )
}