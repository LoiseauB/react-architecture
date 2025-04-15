import { IFieldsGateway } from "../create-game/core/gateways/fields.gateway";
import { IIDGenerator } from "../shared/id-generator";

export type Dependencies = {
  idGenerator: IIDGenerator;
  fieldGateway: IFieldsGateway;
};