import React,  {useState} from "react";
import Board from "./components/Board";
import {calculateWinner} from "./helper"
import "./styles/main.scss";

const App = () => {

  const [board, setboard] = useState(Array(9).fill(null));
  const [isXnext, setisXnext] = useState(false);

  const winner = calculateWinner(board);
  const message = winner ? `winner is ${winner}` : `Next player is ${isXnext ? 'X' : 'O'}`;

  const squarePos = (position) => {
    if(board[position]){
      return
    }
    setboard( prev => {
      return prev.map((Square, pos) =>{
        if(pos === position){
          return isXnext ? "X" : "O";
        }
        else{
          return Square
        }
      });
    });
    setisXnext ((prev)=> !prev);
  };

  return(
    <div className="app">
    <h1>Tic Tac Toe</h1>
    <h2>{message}</h2>
    <Board board = {board} squarePos = {squarePos}/>
  </div>
  )

  };

export default App;
