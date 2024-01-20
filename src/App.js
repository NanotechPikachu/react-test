import { useState } from 'react';

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  function handleClick(i) {
    if (square[i] || winner(square)) return;
    const nextSq = square.slice();
    if (isX) {
      nextSq[i] = 'X';
    } else {
      nextSq[i] = 'O';
    }
    setSquare(nextSq);
    setIsX(!isX);
  }
    let status;
    const win = winner(square);
    if (win) {
      status = 'Player won - ' + winner;
    } else {
      status = 'Next player - ' + (isX ? 'X' : 'O');
    }
  return (
   <>
     <div className="status">{status}</div>
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

function winner(square) {
  const l = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
  for (let k = 0; k < l.length; k++) {
    const [a,b,c] = l[k];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) return square[a];
  }
  return null;
}