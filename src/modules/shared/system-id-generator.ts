import { nanoid } from "nanoid";
import { IIDGenerator } from "./id-generator";

export class SystemIDGenerator implements IIDGenerator {
  generate(): string {
    return nanoid()
  }
}