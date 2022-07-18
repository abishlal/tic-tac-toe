import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import Status from './components/Status';
import { calculateWinner } from './helper';
import './styles/main.scss';


const newgamestate = [{ board: Array(9).fill(null), isXnext: true }]

const App = () => {
  const [history, sethistory] = useState(newgamestate);
  const [currmove, setcurrmove] = useState(0);
  const current = history[currmove];

  const {winner, winningsquare} = calculateWinner(current.board);

  const squarePos = position => {
    if (current.board[position] || winner) {
      return;
    }

    sethistory(prev => {
      const last = prev[prev.length - 1];

      const newboard = last.board.map((Square, pos) => {
        if (pos === position) {
          return last.isXnext ? 'X' : 'O';
        }
        return Square;
      });
      return prev.concat({ board: newboard, isXnext: !last.isXnext });
    });
    setcurrmove(prev => prev + 1);
  };

  const moveto = (move) => {
    setcurrmove(move);
  };

  const newgame = ()=>{
    sethistory(newgamestate);
    setcurrmove(0);
  }
  return (
    <div className="app">
      <h1>Tic <span className='text-green'>Tac</span> Toe</h1>
      <Status  winner ={winner} current={current}/>
      <Board board={current.board} squarePos={squarePos} winningsquare = {winningsquare} />
      <button className={`btn-reset ${winner ? 'active' : ''}`} onClick={newgame}>Go to New game</button>
      <h3>Current game history</h3>
      <History history={history} moveto={moveto} currentmove ={currmove}/>
      <div className='bg-balls' />
    </div>
  );
};

export default App;
