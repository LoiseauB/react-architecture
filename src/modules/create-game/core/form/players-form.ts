import { IIDGenerator } from "../../../shared/id-generator";
import { CreatingGameModel } from "../model/creating-game.model";

export class PlayersForm {
  constructor(private idGenerator: IIDGenerator) {}

  addPlayer(state: CreatingGameModel.Player[]) {
    return [
      ...state,
      {
        id: this.idGenerator.generate(),
        firstName: "John",
        lastName: "Doe",
        age: 30,
      },
    ];
  }

  removePlayer(state: CreatingGameModel.Player[], id: string) {
    return state.filter((player) => player.id !== id);
  }
}
