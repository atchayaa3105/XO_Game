import React from 'react';
import Board from './board.js';
import './App.css';

class Game extends React.Component {
  
   constructor(props){
    super(props);
    this.state={
      //history:[{
        Squares:Array(9).fill(null),
      //}],
      xIsNext: true,
    };
   }



calculateWinner(squares) {
  const lines=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [1,4,8],
  [2,4,6],
  ];

  for(let i=0; i<lines.length; i++){
    const [a,b,c]=lines[i];
    if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]){
      console.log(squares[a]);
      return squares[a];
    }
  }
  return null;
}



  handleClick(i){
    //const history = this.state.history;
    //const current = history[history.length-1];
    const squares= /*current.*/this.state.Squares.slice();
  if(this.calculateWinner(squares) || squares[i]){
    return;
  }
  squares[i]= this.state.xIsNext ? 'X': 'O';
  this.setState({
    //history:history.concat([{      
    Squares: squares,
    //}]),
    xIsNext:!this.state.xIsNext,
  });
}




render() {
    //const history = this.state.history;
    //const current = history[history.length-1];
    const squares= /*current.*/this.state.Squares.slice();
    const winner = this.calculateWinner(/*current.*/squares);
    
    /*const moves = history.map((step, move) => {    
    const desc = move ? 'Go to move #' + move : 'Go to game start';     
      return (       
        <li>          
        <button onClick={() => this.jumpTo(move)}>{desc}</button>   
        </li>  
       );  
     });*/

    let status;
    if(winner){
      status='Winner is :'+winner;
    } else{
     status = 'Next player: '+ (this.state.xIsNext ? 'X': 'O');
    } 

  return (
      <div className="game">
        <div className="game-board">
          <Board 
          Squares={/*current.*/squares}
          onClick={(i)=> this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <h1>Let's play Tic-Tac-Toe!!!</h1>
          <div className="status">          
          <h3>{ status }</h3>
          </div>
          <ol>{/*moves*/}</ol>
        </div>
      </div>
    );
  }
}


export default Game;

