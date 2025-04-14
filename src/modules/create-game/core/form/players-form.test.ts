import { IIDGenerator } from "../../../shared/id-generator";
import { CreatingGameModel } from "../model/creating-game.model";
import { PlayersForm } from "./players-form";

class FixedIDGenerator implements IIDGenerator {
  generate(): string {
    return "1";
  }
}
const idGenerator = new FixedIDGenerator();
const form = new PlayersForm(idGenerator);
const emptyState: CreatingGameModel.Form = { players: [], teamLeaderId: null };
const stateWithOnePlayer: CreatingGameModel.Form = {
  players: [{ id: "1", firstName: "John", lastName: "Doe", age: 30 }],
  teamLeaderId: null,
};
const stateWithTwoPlayers: CreatingGameModel.Form = {
  players: [
    { id: "1", firstName: "John", lastName: "Doe", age: 30 },
    { id: "2", firstName: "John", lastName: "Doe", age: 30 },
  ],
  teamLeaderId: null,
};

describe("Players Form", () => {
  describe("Scenario: add a player", () => {
    it("should add new player", () => {
      const state = form.addPlayer(emptyState);

      expect(state.players).toEqual([
        { id: "1", firstName: "John", lastName: "Doe", age: 30 },
      ]);
    });

    it("should add a player when there is already one", () => {
      const state = form.addPlayer(stateWithOnePlayer);

      expect(state.players).toEqual([
        { id: "1", firstName: "John", lastName: "Doe", age: 30 },
        { id: "1", firstName: "John", lastName: "Doe", age: 30 },
      ]);
    });

    it("should add a player when there is already two", () => {
      const state = form.addPlayer(stateWithTwoPlayers);

      expect(state.players).toEqual([
        { id: "1", firstName: "John", lastName: "Doe", age: 30 },
        { id: "2", firstName: "John", lastName: "Doe", age: 30 },
        { id: "1", firstName: "John", lastName: "Doe", age: 30 },
      ]);
    });
  });

  describe("Scenario: Remove a player", () => {
    it("should remove nobody when the state is empty", () => {
      const state = form.removePlayer(emptyState, "");
      expect(state.players).toEqual([]);
    });

    it("should remove the player with the given ID", () => {
      const state = form.removePlayer(stateWithOnePlayer, "1");
      expect(state.players).toEqual([]);
    });

    it("should remove the player with the given ID when there is two", () => {
      const state = form.removePlayer(stateWithTwoPlayers, "1");
      expect(state.players).toEqual([
        { id: "2", firstName: "John", lastName: "Doe", age: 30 },
      ]);
    });
  });

  describe("Scenario: Define a team leader", () => {
    it("team leader ID should be null if no players", () => {
      const state = form.changeTeamLeader(emptyState, "1");
      expect(state.teamLeaderId).toBeNull();
    });

    it("team leader ID should be the first user ID if one user", () => {
      const state = form.changeTeamLeader(stateWithOnePlayer, "1");
      expect(state.teamLeaderId).toEqual("1");
    });
    
    it("set team leader ID with more one  user", () => {
      const state = form.changeTeamLeader(stateWithTwoPlayers, "2");
      expect(state.teamLeaderId).toEqual("2");
    });
  });
});
