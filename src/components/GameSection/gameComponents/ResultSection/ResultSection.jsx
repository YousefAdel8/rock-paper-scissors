import useGameStore from "../../../../store/gameState";
import Styles from "./ResultSection.module.css";

export default function ResultSection() {

    const setPlayAgain = useGameStore((state) => state.playAgain);

  return <div className="d-flex flex-column">
    <h2 className={`${Styles.resultText}`}>YOU WIN</h2>
    <button className={`rounded px-5 py-2 ${Styles.buttonText}`} onClick={setPlayAgain}>PLAY AGAIN</button>
  </div>;
}
