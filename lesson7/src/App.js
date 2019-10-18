import React from 'react';
import './App.css';

const btnStyle = {
  color: 'black',
  background: 'blue',
  borderBottom: '3px solid red'
};

const MyButton = (props) => {
  return <button style={btnStyle} onClick={props.onClick} className='my-button'>{props.name}</button>
};

/**
 * Как высчитываются очки
 *.----------.------.-------.----------.
 *|          | Rock | Paper | Scissors |
 *:----------+------+-------+----------:
 *| Rock     |    0 |     0 |        1 |
 *:----------+------+-------+----------:
 *| Paper    |    1 |     0 |        0 |
 *:----------+------+-------+----------:
 *| Scissors |    0 |     1 |        0 |
 *'----------'------'-------'----------'
 * */

const truthTable = [
  [0,0,1],
  [1,0,0],
  [0,1,0]
];

const checkWinner = (playerChoice, computerChoice ) => {
  console.log('playerCh: ' + playerChoice + ' , cC: ' + computerChoice);
  console.log('type of pChoice: ' + typeof playerChoice + ', type cChoice: ' + typeof computerChoice);
  const playerScore = truthTable[playerChoice][computerChoice];
  const computerScore = truthTable[computerChoice][playerChoice];
  if (playerScore > computerScore) {
    return 'Ты';
  } else if (computerScore > playerScore) {
    return 'Комп';
  } else if (playerScore === computerScore) {
    return 'Никто';
  }
}

const buttons = [{str: 'камень', type: 'rock', score: 0}, {str: 'бумага', type: 'paper', score: 1}, {str: 'ножницы', type: 'scissors', score: 2}];

export default class App extends React.Component {
  state = {
    compChoice: '',
    userChoice: ''
  };
  onClickHandler = (e) => {
    this.setState({compChoice: 2} );
    let uChoice = e.target.innerHTML;
    let tmp;
    for (let i = 0; i < 3; i++) {
      if (uChoice === buttons[i].str) {
        tmp = buttons[i].score;
        break;
      }
    }
    let cChoice = Math.floor(Math.random() * 3);
    this.setState({userChoice: tmp});
    checkWinner(tmp, cChoice);
  }

  render() {
    const {userChoice, compChoice} = this.state;

    return (
        <div className="App">
          <header className="App-header">
            <p>Камень, Ножницы, Бумага!</p>
          </header>
          <div>
            {buttons.map((item) => <MyButton onClick={this.onClickHandler} name={item.str} />)}
          </div>
          <div>
            <p>Комп выбрал: {compChoice}</p>
            <p>А твой выбор: {userChoice}</p>
            <p>Победитель: {checkWinner(Number(userChoice), Number(compChoice))}</p>
          </div>
        </div>
    );
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
        <button className="square" onClick={() => this.setState({value: 'X'})}>
          {this.props.value}
        </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    );
  }
}