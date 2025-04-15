import { useSelector } from "react-redux";
import { AppState } from "../../../store/store";
import { PlayersSection } from "../sections/players/PlayersSection";
import { GameModel } from "../../core/model/game.model";
import { BattleFieldSection } from "../sections/battlefield/BattleFieldSection";

export const GamePage: React.FC<object> = () => {
  const step = useSelector((state: AppState) => state.game.step);

  return (
    <main>
      {step === GameModel.Step.PLAYERS && <PlayersSection />}
      {step === GameModel.Step.BATTLEFIELD && <BattleFieldSection />}
    </main>
  );
};
