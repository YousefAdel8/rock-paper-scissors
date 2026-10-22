import useComputerChoiceStore from "../../../../store/computerChoice";
import useGameStore from "../../../../store/gameState";
import usePlayerChoiceStore from "../../../../store/playerChoice";
import usePlayStore from "../../../../store/playingState";
import { getWhoWin } from "../../../../utils/gameLogic";
import Styles from "./ResultSection.module.css";

export default function ResultSection() {
  //Reset Game State to ready and Playing State to placeholder
  const setPlayAgain = useGameStore((state) => state.playAgain);
  const setPlaceholder = usePlayStore((state) => state.showPlaceholder);
  function playAgainAndResetStats() {
    setPlayAgain();
    setPlaceholder();
  }

  //Get Who Win to Set <h2> --> YOU WIN or YOU LOSS or DRAW
  const playerChoice = usePlayerChoiceStore((state) => state.playerChoice);
  const computerChoice = useComputerChoiceStore(
    (state) => state.computerChoice,
  );
  const result = getWhoWin(playerChoice, computerChoice);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2 className={`${Styles.resultText}`}>{result}</h2>
      <button
        className={`rounded px-md-5 px-3 py-2 ${Styles.buttonText}`}
        onClick={playAgainAndResetStats}
        aria-label="play again"
      >
        PLAY AGAIN
      </button>
    </div>
  );
}
