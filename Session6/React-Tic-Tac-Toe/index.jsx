const { useState } = React;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6],            // Diagonals
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  const isBoardFull = squares.every(square => square !== null);
  const isTie = !winner && isBoardFull;

  let status = "";
  if (winner) {
    status = `🎉 Winner: ${winner}`;
  } else if (isTie) {
    status = "😮 It's a tie!";
  } else {
    status = `Next player: ${isXNext ? "X" : "O"}`;
  }

  function handleClick(index) {
    if (squares[index] || winner || isTie) return;

    const nextSquares = squares.slice();
    nextSquares[index] = isXNext ? "X" : "O";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "20px" }}>
      <h1>Tic Tac Toe</h1>
      <p>{status}</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: "5px",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        {squares.map((value, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{
              width: "60px",
              height: "60px",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            {value}
          </button>
        ))}
      </div>
      <button onClick={resetGame} style={{ padding: "8px 16px", fontSize: "16px" }}>
        Reset
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TicTacToe />);
