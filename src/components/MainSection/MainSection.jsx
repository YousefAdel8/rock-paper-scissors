import GameSection from "../GameSection/GameSection";
import RulesSection from "../RulesSection/RulesSection";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import Styles from "./MainSection.module.css";

export default function MainSection() {
  return (
    <>
      <section className={`${Styles.MainSection} min-vh-100 text-white pt-5`}>
        <div className="d-flex flex-column align-items-center gap-5">
          <ScoreBoard />
          <GameSection />
        </div>
        <div className="position-absolute bottom-0 end-0 p-3 mb-0">
          <RulesSection/>
        </div>
      </section>
    </>
  );
}
