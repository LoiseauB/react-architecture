import { Dependencies } from "../../../store/dependencies";
import { AppDispatch, AppGateState } from "../../../store/store";
import { gameSlice } from "../store/game.slice";

export const fetchFields = async (
  dispatch: AppDispatch,
  _: AppGateState,
  dependencies: Dependencies
) => {
  try {
    dispatch(gameSlice.actions.handleLoadingFields());
    const fields = await dependencies.fieldGateway.getFields();
    dispatch(gameSlice.actions.storeFields(fields));
  } catch (error) {
    dispatch(gameSlice.actions.handleErrorFields(extractErrorMessage(error)));
  }
};

const extractErrorMessage = (error: unknown): string => {
  if(error instanceof Error) {
    return error.message
  }
  return "Unknown error"
}