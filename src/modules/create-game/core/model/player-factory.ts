import { GameModel } from "./game.model";

export class PlayerFactory {
  static create(data?: Partial<GameModel.Player>) {
    return {
      id: "",
      firstName: "",
      lastName: "",
      age: 0,
      ...data,
    };
  }
}
