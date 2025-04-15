import { IIDGenerator } from "../../../shared/id-generator";
import { GameModel } from "../model/creating-game.model";

export class PlayersForm {
  constructor(private idGenerator: IIDGenerator) {}

  addPlayer(state: GameModel.Form): GameModel.Form {
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

  removePlayer(state: GameModel.Form, id: string): GameModel.Form {
    return {
      ...state,
      players: state.players.filter((player) => player.id !== id),
      teamLeaderId: state.teamLeaderId === id ? null : state.teamLeaderId,
    };
  }

  changeTeamLeader(state: GameModel.Form, id: string): GameModel.Form {
    return {
      ...state,
      teamLeaderId: state.players.some((player) => player.id === id)
        ? id
        : null,
    };
  }

  isSubmittable(state: GameModel.Form): boolean {
    return state.players.length > 0 && state.teamLeaderId ? true : false;
  }

  updatePlayer<T extends keyof GameModel.Player>(
    state: GameModel.Form,
    id: string,
    key: T,
    value: GameModel.Player[T]
  ): GameModel.Form {
    if (!id || !key || !value) return state;

    return { ...state, players: state.players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          [key]: value,
        };
      }
      return player;
    }) };
  }
}
