import useGameStore from "../../../../store/gameState";
import usePlayStore from "../../../../store/playingState";
import Styles from "./ResultSection.module.css";

export default function ResultSection() {
    const setPlayAgain = useGameStore((state) => state.playAgain);
    const setPlaceholder = usePlayStore((state) => state.showPlaceholder);
    function PlayAgianAndResetStats() {
        setPlayAgain();
        setPlaceholder();
    }
  return <div className="d-flex flex-column">
    <h2 className={`${Styles.resultText}`}>YOU WIN</h2>
    <button className={`rounded px-5 py-2 ${Styles.buttonText}`} onClick={PlayAgianAndResetStats}>PLAY AGAIN</button>
  </div>;
}
