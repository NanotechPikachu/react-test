import { useState } from 'react';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [curMove, setCurMove] = useState(0);
  const isX = curMove % 2 === 0;
  const currentSq = history[curMove];
  
  function handlePlay(nextSq) {
    const nextHistory = [...history.slice(0, curMove + 1), nextSq];
    setHistory(nextHistory);
    setCurMove(nextHistory.length - 1);
  }

  function jump(next) {
    setCurMove(next);
  }

  const moves = history.map((square, move) =>  {
    let desc;
    if (move > 0) {
      desc = "Go to move # " + move;
    } else {
      desc = "Go to start of game";
    }

    return (
      <li key={move}>
        <button onClick={() => jump(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board isX={isX} square={currentSq} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>  
    </div>
  )
}

function Board({ isX, square, onPlay }) {

  function handleClick(i) {
    if (square[i] || winner(square)) return;
    const nextSq = square.slice();
    if (isX) {
      nextSq[i] = 'X';
    } else {
      nextSq[i] = 'O';
    }
    onPlay(nextSq);
  }
    let status;
    const win = winner(square);
    if (win) {
      status = 'Player won - ' + win;
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