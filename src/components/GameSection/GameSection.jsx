import { useState } from "react";
import PaperButton from "./gameComponents/PaperButton/PaperButton";
import RockButton from "./gameComponents/RockButton/RockButton";
import ScissorsButton from "./gameComponents/ScissorsButton/ScissorsButton";
import Styles from "./GameSection.module.css";

export default function GameSection() {
  const [userChoice,setUserChoice]=useState('');
  return (
    <>
      <div className={Styles.board}>
        <div className="d-flex gap-5">
          <button className={`${Styles.Buttons}`} type="button" onClick={()=>setUserChoice('paper')}>
            <PaperButton />
          </button>
          <button className={`${Styles.Buttons}`} type="button" onClick={()=>setUserChoice('rock')}>
            <RockButton />
          </button>
        </div>
        <button className={`${Styles.Buttons}`} type="button" onClick={()=>setUserChoice('scissors')}>
          <ScissorsButton />
        </button>
      </div>
    </>
  );
}
