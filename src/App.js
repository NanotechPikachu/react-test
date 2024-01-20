import { useState } from 'react';

export default function Board() {
  const [square, setSquare] = useState[Array(9).fill(null));
  function handleClick() {
    const nextSq = square.slice();
    nextSq[0] = 'X';
    setSquare(nextSq);
  }
  return (
   <>
     <div className="board-row">
       <Square value={square[0]} onClick={handleClick} />
       <Square value={square[1]} onClick={handleClick} />
       <Square value={square[2]} onClick={handleClick} />
     </div>
     <div className="board-row">
       <Square value={square[3]} onClick={handleClick} />
       <Square value={square[4]} onClick={handleClick} />
       <Square value={square[5]} onClick={handleClick} />
     </div>
     <div className="board-row">
       <Square value={square[6]} onClick={handleClick} />
       <Square value={square[7]} onClick={handleClick} />
       <Square value={square[8]} onClick={handleClick} />
     </div>
   </>
   )
}

function Square({ value, onSqClick }) {
  return (
    <button className="square" onClick={onSqClick}>{value}</button>
    )
}