import { AppDispatch } from "../../../store/store";
import { GameModel } from "../model/game.model";
import { gameActions } from "../store/game.slice";

export const choosePlayers =
  (form: GameModel.Form) => async (dispatch: AppDispatch) => {
    dispatch(gameActions.choosePlayers(form));
  };
