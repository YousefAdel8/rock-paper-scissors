import PaperButton from "./gameComponents/PaperButton/PaperButton";
import RockButton from "./gameComponents/RockButton/RockButton";
import ScissorsButton from "./gameComponents/ScissorsButton/ScissorsButton";
import Styles from "./GameSection.module.css";
import usePlayerChoiceStore from "../../store/playerChoice";
import useGameStore from "../../store/gameState";
import PlaceholderButton from "./gameComponents/PlaceholderButton/PlaceholderButton";
import useComputerChoiceStore from "../../store/computerChoice";
import usePlayStore from "../../store/playingState";
import ResultSection from "./gameComponents/ResultSection/ResultSection";

const choiceButtons = {
  Paper: PaperButton,
  Rock: RockButton,
  Scissors: ScissorsButton,
};

export default function GameSection() {
  /************************************
   ****** player choice logic *********
   ************************************/
  const PlayerChoice = usePlayerChoiceStore((state) => state.playerChoice);
  const setPlayerPaper = usePlayerChoiceStore((state) => state.setPaper);
  const setPlayerRock = usePlayerChoiceStore((state) => state.setRock);
  const setPlayerScissors = usePlayerChoiceStore((state) => state.setScissors);

  /************************************
   ****** computer choice logic *********
   ************************************/
  const ComputerChoice = useComputerChoiceStore(
    (state) => state.computerChoice,
  );
  const setComputerChoice = useComputerChoiceStore(
    (state) => state.setComputerChoice,
  );
  /********************************************************
   ****** game Status (playing,result,ready) logic ********
   ********************************************************/
  const GameStatus = useGameStore((state) => state.gameStatus);
  const setStartGame = useGameStore((state) => state.startGame);
  const setShowResult = useGameStore((state) => state.showResult);

  /********************************************************
   ****************** onClick For Buttons *****************
   ********************************************************/
  function PlayingWithPaper() {
    setPlayerPaper();
    setStartGame();
    RevealingComputerChoice();
  }
  function PlayingWithRock() {
    setPlayerRock();
    setStartGame();
    RevealingComputerChoice();
  }
  function PlayingWithScissors() {
    setPlayerScissors();
    setStartGame();
    RevealingComputerChoice();
  }

  /********************************************************
   ******* Playing Status (Placeholder, Revealing) ********
   ********************************************************/
  const PlayingStatus = usePlayStore((state) => state.playStatus);
  const setRevealing = usePlayStore((state) => state.showComputerChoice);
  function RevealingComputerChoice() {
    setComputerChoice();
    setTimeout(() => {
      setRevealing();
      setTimeout(() => {
        setShowResult();
      }, 1000);
    }, 2000);
  }
  return (
    <>
      {GameStatus === "ready" ? (
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
      ) : (
        <div className="d-flex justify-content-center gap-5 align-items-center pt-5 px-4">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className={`${Styles.PickText}`}>YOU PICKED</p>
            <button className={`${Styles.Buttons}`} type="button">
              {PlayerChoice &&
                (() => {
                  const SelectedButton = choiceButtons[PlayerChoice];

                  return SelectedButton ? <SelectedButton /> : null;
                })()}
            </button>
          </div>
          {GameStatus === "result" ? <ResultSection /> : null}
          {PlayingStatus === "placeholder" ? (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className={`${Styles.PickText} invisible`}>THE HOUSE PICKED</p>
              <PlaceholderButton />
            </div>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className={`${Styles.PickText}`}>THE HOUSE PICKED</p>
              <button className={`${Styles.Buttons}`} type="button">
                {ComputerChoice &&
                  (() => {
                    const SelectedButton = choiceButtons[ComputerChoice];

                    return SelectedButton ? <SelectedButton /> : null;
                  })()}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
