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
import useScoreResultStore from "../../store/ScoreResult";
import { getWhoWin } from "../../utils/gameLogic";

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
  const ComputerChoice = useComputerChoiceStore((state) => state.computerChoice);
  const setComputerChoice = useComputerChoiceStore((state) => state.setComputerChoice);
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
  const setWin = useScoreResultStore((state) => state.setWin);
  const setLoss = useScoreResultStore((state) => state.setLoss);
  const setDraw = useScoreResultStore((state) => state.setDraw);
  function RevealingComputerChoice() {
    setComputerChoice();
    setTimeout(() => {
      setRevealing();
      setTimeout(() => {
              const playerChoice =
        usePlayerChoiceStore.getState().playerChoice;

      const computerChoice =
        useComputerChoiceStore.getState().computerChoice;

      const result = getWhoWin(playerChoice, computerChoice);

      if (result === "YOU WIN") {
        setWin();
      } else if (result === "YOU LOSS") {
        setLoss();
      } else {
        setDraw();
      }
        setShowResult();
      }, 1000);
    }, 2000);
  }

  return (
    <>
    {/* Ready State --> Step 1 in game --> show options to user to select rock or paper or scissors */}
      {GameStatus === "ready" ? (
        <div className={`${Styles.board}`}>
          <div className="d-flex gap-5">
            <button
              className={`${Styles.Buttons} ${Styles.ActiveButtons}`}
              type="button"
              onClick={PlayingWithPaper}
            >
              <PaperButton />
            </button>
            <button
              className={`${Styles.Buttons} ${Styles.ActiveButtons}`}
              type="button"
              onClick={PlayingWithRock}
            >
              <RockButton />
            </button>
          </div>
          <button
            className={`${Styles.Buttons} ${Styles.ActiveButtons}`}
            type="button"
            onClick={PlayingWithScissors}
          >
            <ScissorsButton />
          </button>
        </div>
      ) : (
        <div className="d-flex justify-content-center gap-md-5 gap-3 align-items-center pt-5 px-md-4">
          {/* Show the Result (2 steps first one to show placeholder for 2s then show computer choice) */}
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className={`${Styles.PickText}`}>YOU PICKED</p>
            <button className={`${Styles.Buttons}`} type="button" disabled>
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
              <PlaceholderButton  disabled/>
            </div>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className={`${Styles.PickText}`}>THE HOUSE PICKED</p>
              <button className={`${Styles.Buttons}`} type="button" disabled>
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
