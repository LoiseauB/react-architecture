import { GameModel } from "../model/game.model";

export interface IFieldsGateway {
  getFields(): Promise<GameModel.Field[]>
}