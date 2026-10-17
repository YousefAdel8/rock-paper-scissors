import PaperButton from "./gameComponents/PaperButton/PaperButton";
import RockButton from "./gameComponents/RockButton/RockButton";
import ScissorsButton from "./gameComponents/ScissorsButton/ScissorsButton";
import Styles from "./GameSection.module.css";
import usePlayerChoiceStore from "../../store/playerChoice";
import useGameStore from "../../store/gameState";

const choiceButtons = {
  Paper: PaperButton,
  Rock: RockButton,
  Scissors: ScissorsButton,
};

export default function GameSection() {
  const PlayerChoice = usePlayerChoiceStore((state) => state.playerChoice);
  const setPlayerPaper = usePlayerChoiceStore((state) => state.setPaper);
  const setPlayerRock = usePlayerChoiceStore((state) => state.setRock);
  const setPlayerScissors = usePlayerChoiceStore((state) => state.setScissors);

  const GameStatus = useGameStore((state) => state.gameStatus);
  const setStartGame = useGameStore((state) => state.startGame);

  function PlayingWithPaper() {
    setPlayerPaper();
    setStartGame();
  }
  function PlayingWithRock() {
    setPlayerRock();
    setStartGame();
  }
  function PlayingWithScissors() {
    setPlayerScissors();
    setStartGame();
  }

  return (
    <>
      {GameStatus === "playing" ? (
        <div className="d-flex justify-content-between align-items-center w-50 pt-5 px-4">
          <button
            className={`${Styles.Buttons}`}
            type="button"
            onClick={PlayingWithPaper}
          >
            {PlayerChoice &&
              (() => {
                const SelectedButton = choiceButtons[PlayerChoice];

                return SelectedButton ? <SelectedButton /> : null;
              })()}
          </button>
          <button
            className={`${Styles.Buttons}`}
            type="button"
            onClick={PlayingWithRock}
          >
            <RockButton />
          </button>
        </div>
      ) : (
        <div className={`${Styles.board}`}>
          <div className="d-flex gap-5">
            <button
              className={`${Styles.Buttons}`}
              type="button"
              onClick={PlayingWithPaper}
            >
              <PaperButton />
            </button>
            <button
              className={`${Styles.Buttons}`}
              type="button"
              onClick={PlayingWithRock}
            >
              <RockButton />
            </button>
          </div>
          <button
            className={`${Styles.Buttons}`}
            type="button"
            onClick={PlayingWithScissors}
          >
            <ScissorsButton />
          </button>
        </div>
      )}
    </>
  );
}
