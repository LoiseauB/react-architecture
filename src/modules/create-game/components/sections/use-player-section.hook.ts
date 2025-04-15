import { useRef, useState } from "react";
import { app } from "../../../app/app";
import { PlayersForm } from "../../core/form/players-form";
import { GameModel } from "../../core/model/game.model";

export const usePlayerSection = () => {
  function addPlayer() {
    const newState = playersForm.current.addPlayer(form);
    setForm(newState);
  }

  function removePlayer(id: string) {
    const newState = playersForm.current.removePlayer(form, id);
    setForm(newState);
  }

  function updatePlayer<T extends keyof GameModel.Player>(
    id: string,
    key: T,
    value: GameModel.Player[T]
  ) {
    setForm(playersForm.current.updatePlayer(form, id, key, value));
  }

  function changeTeamLeader(id: string) {
    const newState = playersForm.current.changeTeamLeader(form, id);
    setForm(newState);
  }

  function onNext() {
    console.log(form);
  }

  function isSubmittable() {
    return playersForm.current.isSubmittable(form);
  }

  const [form, setForm] = useState<GameModel.Form>({
    players: [],
    teamLeaderId: null,
  });

  const playersForm = useRef(new PlayersForm(app.dependencies.idGenerator));

  return {
    addPlayer,
    removePlayer,
    updatePlayer,
    changeTeamLeader,
    onNext,
    isSubmittable: isSubmittable(),
    form,
  };
};
