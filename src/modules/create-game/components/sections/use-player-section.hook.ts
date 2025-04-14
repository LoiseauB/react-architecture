import { useRef, useState } from "react";
import { CreatingGameModel } from "../../core/model/creating-game.model";
import { PlayersForm } from "../../core/form/players-form";
import { app } from "../../../app/app";

export const usePlayerSection = () => {
  function addPlayer() {
    const newState = playersForm.current.addPlayer(form);
    setsetForm(newState);
  }

  function removePlayer(id: string) {
    const newState = playersForm.current.removePlayer(form, id);
    setsetForm(newState);
  }

  function updatePlayer(id: string, key: string, value: string | number) {}

  function changeTeamLeader() {}

  function onNext() {}

  function isSubmittable() {
    return false;
  }

  const [form, setsetForm] = useState<CreatingGameModel.Form>({
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
