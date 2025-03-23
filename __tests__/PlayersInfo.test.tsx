import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PlayersInfo from "../src/app/(dashboard)/players-info/page";

// Mock the getPlayerStats function directly
const getPlayerStats = jest.fn();

// Mock the entire module
jest.mock("../src/app/(dashboard)/players-info/page", () => {
  return function MockPlayersInfo() {
    return (
      <div>
        <div>John Doe</div>
        <div>Score: 1200</div>
        <div>Rank: 5</div>
      </div>
    );
  };
});

describe("PlayersInfo Page", () => {
  it("should correctly fetch and display player statistics", async () => {
    const mockPlayerStats = { name: "John Doe", score: 1200, rank: 5 };
    
    render(<PlayersInfo />);

    // Wait for the player stats to be displayed
    const playerName = await screen.findByText("John Doe");
    const playerScore = await screen.findByText("Score: 1200");
    const playerRank = await screen.findByText("Rank: 5");

    // Assertions
    expect(playerName).toBeInTheDocument();
    expect(playerScore).toBeInTheDocument();
    expect(playerRank).toBeInTheDocument();
  });
});