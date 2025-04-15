/* eslint-disable @typescript-eslint/no-namespace */
export namespace GameModel {
  export enum Step {
    PLAYERS = 0,
    BATTLEFIELD = 1,
    SUPPLIES = 2,
    SUMMARY = 3,
    CONFIRM = 4,
  }

  export type Player = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
  };

  export type Form = {
    players: Player[];
    teamLeaderId: string | null;
  };

  export type Field = {
    id: string;
    name: string;
    difficulty: number;
  };
}
