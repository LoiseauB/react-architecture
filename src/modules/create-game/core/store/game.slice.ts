import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameModel } from "../model/game.model";

export type GameState = {
  step: GameModel.Step;
  form: GameModel.Form;
};

const initialState: GameState = {
  step: GameModel.Step.PLAYERS,
  form: {
    players: [],
    teamLeaderId: null,
  },
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<GameModel.Step>) => {
      state.step = action.payload;
    },
    choosePlayers: (state, action: PayloadAction<GameModel.Form>) => {
      state.form = action.payload;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
