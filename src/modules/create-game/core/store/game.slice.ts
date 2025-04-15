import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GameModel } from "../model/game.model";

export type GameState = {
  step: GameModel.Step;
  form: GameModel.Form;
  availableFields: {
    status: "idle" | "loading" | "success" | "error";
    error: string | null;
    data: GameModel.Field[];
  };
};

const initialState: GameState = {
  step: GameModel.Step.PLAYERS,
  form: {
    players: [],
    teamLeaderId: null,
  },
  availableFields: {
    status: "idle",
    error: null,
    data: [],
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
    handleLoadingFields: (state) => {
      state.availableFields.status = "loading";
      state.availableFields.error = null;
    },
    handleErrorFields : (state, action: PayloadAction<string>) => {
      state.availableFields.status = 'error';
      state.availableFields.error = action.payload;
    },
    storeFields: (state, action: PayloadAction<GameModel.Field[]>) => {
      state.availableFields.data = action.payload;
      state.availableFields.status = "success";
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const gameActions = gameSlice.actions;
