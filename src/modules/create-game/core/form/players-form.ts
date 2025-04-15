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
      teamLeaderId: state.teamLeaderId === id ? null : state.teamLeaderId,
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

  isSubmittable(state: CreatingGameModel.Form): boolean {
    return state.players.length > 0 && state.teamLeaderId ? true : false;
  }

  updatePlayer(
    state: CreatingGameModel.Form,
    id: string,
    key: keyof CreatingGameModel.Player,
    value: string
  ): CreatingGameModel.Form {
    if (!id || !key || !value) return state;

    const updatedPlayers = state.players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          [key]: isNaN(Number(value)) ? value : Number(value),
        };
      }
      return player;
    });

    return { ...state, players: updatedPlayers };
  }
}
