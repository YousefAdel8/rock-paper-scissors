import PaperButton from "./gameComponents/PaperButton/PaperButton"
import RockButton from "./gameComponents/RockButton/RockButton"
import ScissorsButton from "./gameComponents/ScissorsButton/ScissorsButton"
import Styles from "./GameSection.module.css"

export default function GameSection() {
  return (
      <>
      <div className={Styles.board}>
        <div className="d-flex gap-5">
          <PaperButton/>
          <RockButton/>
        </div>
        <ScissorsButton/>
      </div>
      </>
  )
}
