import { IIDGenerator } from "../../../shared/id-generator";
import { CreatingGameModel } from "../model/creating-game.model";

export class PlayersForm {
  constructor(private idGenerator: IIDGenerator) {}

  addPlayer(state: CreatingGameModel.Form): CreatingGameModel.Form {
    return {
      ...state,
      players: [
        ...state.players,
        {
          id: this.idGenerator.generate(),
          firstName: "John",
          lastName: "Doe",
          age: 30,
        },
      ],
    };
  }

  removePlayer(
    state: CreatingGameModel.Form,
    id: string
  ): CreatingGameModel.Form {
    return {
      ...state,
      players: state.players.filter((player) => player.id !== id),
    };
  }

  changeTeamLeader(
    state: CreatingGameModel.Form,
    id: string
  ): CreatingGameModel.Form {
    return {
      ...state,
      teamLeaderId: state.players.some((player) => player.id === id)
        ? id
        : null,
    };
  }
}
