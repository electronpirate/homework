import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(squareTile) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[squareTile]) {
      return;
    }
    // const imageSource = `/images/${this.state.xIsNext}.jpg`
    squares[squareTile] = this.state.xIsNext ? <img className='powerimage' src='/images/Power_Armor.jpg' /> : <img className='deathimage' src='/images/Deathclaw.jpg'/>;
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(squareTile) {
    return (
      <Square
        value={this.state.squares[squareTile]}
        onClick={() => this.handleClick(squareTile)}
      />
    );
  }

  calculateWinner(squares) {
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    console.log(squares);
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}






  render() {

    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ?
      'Power Armor' : '*Deathclaw*');
    }



    return (
      <div className='board'>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>

    )
  }
}

export default Board;
