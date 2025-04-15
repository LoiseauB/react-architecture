import { GameModel } from "./game.model";

export class FieldFactory {
  static create(data?: Partial<GameModel.Field>) {
    return {
      id: "1",
      name: "Zone delta",
      difficulty: 7,
      ...data,
    };
  }
}
