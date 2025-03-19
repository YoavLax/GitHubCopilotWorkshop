"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useState } from "react";
CardDescription;

const ErrorPageFixing = () => {
  const [playerName, setPlayerName] = useState("");
  const [playerPosition, setPlayerPosition] = useState("");
  const [playerTeam, setPlayerTeam] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("/api/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playerName,
        position: playerPosition,
        team: playerTeam,
      }),
    });

    if (!response.ok) {
      console.error("Failed to create player");
    } else {
      console.log("Player created successfully");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New NBA Player</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              required
              className="border border-gray-400"
            />
          </div>
          <div>
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              value={playerPosition}
              onChange={(e) => setPlayerPosition(e.target.value)}
              required
              className="border border-gray-400"
            />
          </div>
          <div>
            <label htmlFor="team">Team:</label>
            <input
              type="text"
              id="team"
              value={playerTeam}
              onChange={(e) => setPlayerTeam(e.target.value)}
              required
              className="border border-gray-400"
            />
          </div>
          <button 
            type="submit"
            className="border border-gray-400 bg-blue-500 text-white">Create Player</button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <p>Fill out the form to add a new NBA player.</p>
      </CardFooter>
    </Card>
  );
};

export default ErrorPageFixing;
