import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { registerGameStepListener } from "../create-game/core/store/game-step.listeners";
import { gameReducer } from "../create-game/core/store/game.slice";
import { Dependencies } from "./dependencies";
import { registerFetchListeners } from "../create-game/core/store/fetcher.listener";

const reducers = combineReducers({
  game: gameReducer,
});

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<typeof reducers>;
export type AppDispatch = AppStore["dispatch"];
export type AppGateState = AppStore["getState"];

export const createStore = (config: {
  initialState?: AppState;
  dependencies: Dependencies;
}) => {
  const store = configureStore({
    preloadedState: config?.initialState,
    reducer: reducers,
    devTools: true,
    middleware: (getDefaultMiddleware) => {
      const listener = createListenerMiddleware();
      registerGameStepListener(listener);
      registerFetchListeners(listener);

      return getDefaultMiddleware({
        thunk: {
          extraArgument: config.dependencies,
        },
      }).prepend(listener.middleware);
    },
  });

  return store;
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
