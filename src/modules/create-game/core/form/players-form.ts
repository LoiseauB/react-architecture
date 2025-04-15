import { produce } from "immer";
import { IIDGenerator } from "../../../shared/id-generator";
import { GameModel } from "../model/game.model";
import { PlayerFactory } from "../model/player-factory";

export class PlayersForm {
  constructor(private idGenerator: IIDGenerator) {}

  addPlayer(state: GameModel.Form): GameModel.Form {
    return produce(state, (draft) => {
      draft.players.push(
        PlayerFactory.create({ id: this.idGenerator.generate() })
      );
    });
  }

  removePlayer(state: GameModel.Form, id: string): GameModel.Form {
    return produce(state, (draft) => {
      const index = draft.players.findIndex((player) => player.id === id);
      if (index < 0) return;
      draft.players.splice(index, 1);

      if (draft.teamLeaderId === id) {
        draft.teamLeaderId = null;
      }
    });
  }

  changeTeamLeader(state: GameModel.Form, id: string): GameModel.Form {
    return produce(state, (draft) => {
      const hasTeamLeader = draft.players.some((player) => player.id === id);
      draft.teamLeaderId = hasTeamLeader ? id : null;
    });
  }

  isSubmittable(state: GameModel.Form): boolean {
    return (
      state.teamLeaderId !== null &&
      state.players.every((player) => player.age > 0) &&
      state.players.every((player) => player.firstName.length > 0) &&
      state.players.every((player) => player.lastName.length > 0)
    );
  }

  updatePlayer<T extends keyof GameModel.Player>(
    state: GameModel.Form,
    id: string,
    key: T,
    value: GameModel.Player[T]
  ): GameModel.Form {
    if (!id || !key || !value) return state;
    return produce(state, (draft) => {
      const player = draft.players.find((player) => player.id === id);
      if (!player) return;
      player[key] = value;
    });
  }
}
