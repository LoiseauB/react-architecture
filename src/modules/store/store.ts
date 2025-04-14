import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Dependencies } from "./dependencies";
import { useDispatch } from "react-redux";

const reducers = combineReducers({});

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<typeof reducers>;
export type AppDispatch = AppStore["dispatch"];
export type AppGateState = AppStore["getState"];

export const createStore = (config: { dependencies: Dependencies }) => {
  const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: config.dependencies,
        },
      });
    },
  });

  return store;
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
