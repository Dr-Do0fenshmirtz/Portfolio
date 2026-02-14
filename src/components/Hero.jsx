import { useState } from "react";
export default function Hero() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [XIsNext, setXIsNext] = useState(true);

  const winner = checkWinner(squares);
  let status;
  let showReset = winner || !squares.includes(null);
  if (winner) {
    status = "Winner: " + winner;
  } else if (!squares.includes(null)) {
    status = " It is a Draw ";
  } else {
    status = "Next move " + (XIsNext ? "X" : "O");
  }

  function handleClick(i) {
    const nextSquare = squares.slice();
    if (nextSquare[i] || checkWinner(squares)) return;
    if (XIsNext) nextSquare[i] = "X";
    else nextSquare[i] = "O";
    setSquares(nextSquare);
    setXIsNext(!XIsNext);
  }
  function reset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }
  return (
    <section style={{ padding: "30px", textAlign: "center" }}>
      <h1>Hello, I'm Naman Jain</h1>
      <p>Full Stack Developer — React & Java</p>
      {/* <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      {showReset && <button onClick={() => reset()}> Reset Button </button>} */}
    </section>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {" "}
      {value}{" "}
    </button>
  );
}

function checkWinner(squares) {
  const temp = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < temp.length; i++) {
    const [a, b, c] = temp[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];
  }
  return null;
}
