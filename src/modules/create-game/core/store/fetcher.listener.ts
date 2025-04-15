import { ListenerMiddlewareInstance } from "@reduxjs/toolkit";
import { fetchFields } from "../actions/fetch-fields.action";
import { GameModel } from "../model/game.model";
import { gameSlice } from "./game.slice";

export const registerFetchListeners = (
  listener: ListenerMiddlewareInstance
) => {
  listener.startListening({
    actionCreator: gameSlice.actions.setStep,
    effect: (action, api) => {
      switch (action.payload) {
        case GameModel.Step.BATTLEFIELD:
          api.dispatch(fetchFields as never);
          break;
      }
    },
  });
};
