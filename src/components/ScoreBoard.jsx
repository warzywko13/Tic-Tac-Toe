import "./style/ScoreBoard.css";

const ScoreBoard = ({ playerScores, isPlayer1 }) => {
  const { player1, player2 } = playerScores;

  return (
    <div className="scoreboard">
      <div className={`scoreX ${isPlayer1 ? "scoreX_underline" : null}`}>
        <h2>X - {player1}</h2>
      </div>
      <div className={`scoreO ${!isPlayer1 ? "scoreO_underline" : null}`}>
        <h2>O - {player2}</h2>
      </div>
    </div>
  );
};

export default ScoreBoard;
