/* eslint-disable @typescript-eslint/no-namespace */
export namespace GameModel {
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
}
