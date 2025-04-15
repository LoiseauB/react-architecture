import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { gameSlice } from "./game.slice";
import { GameModel } from "../model/game.model";

export const registerGameStepListener = (
  listener: ListenerMiddlewareInstance
) => {
  listener.startListening({
    actionCreator: gameSlice.actions.choosePlayers,
    effect: (_, api) => {
      api.dispatch(gameSlice.actions.setStep(GameModel.Step.BATTLEFIELD));
    },
  });
};
