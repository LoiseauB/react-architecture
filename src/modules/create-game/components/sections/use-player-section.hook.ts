import { useRef, useState } from "react";
import { CreatingGameModel } from "../../core/model/creating-game.model";
import { PlayersForm } from "../../core/form/players-form";
import { app } from "../../../app/app";

export const usePlayerSection = () => {
  function addPlayer() {
    const newState = playersForm.current.addPlayer(players);
    setPlayers(newState);
  }

  function removePlayer(id: string) {
    setPlayers((players) => players.filter((player) => player.id !== id));
  }

  function updatePlayer(id: string, key: string, value: string | number) {}

  function changeTeamLeader() {}

  function onNext() {}

  function isSubmittable() {
    return false;
  }

  const [players, setPlayers] = useState<CreatingGameModel.Player[]>([]);

  const playersForm = useRef(new PlayersForm(app.dependencies.idGenerator));
  console.log(players);

  return {
    addPlayer,
    removePlayer,
    updatePlayer,
    changeTeamLeader,
    onNext,
    isSubmittable: isSubmittable(),
    players,
  };
};
