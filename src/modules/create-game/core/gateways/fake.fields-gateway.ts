import { FieldFactory } from "../model/field-factory";
import { GameModel } from "../model/game.model";
import { IFieldsGateway } from "./fields.gateway";

export class FakeFieldsGateway implements IFieldsGateway {
  async getFields(): Promise<GameModel.Field[]> {
    return [
      FieldFactory.create(),
      FieldFactory.create(),
      FieldFactory.create(),
      FieldFactory.create(),
      FieldFactory.create(),
    ];
  }
}
