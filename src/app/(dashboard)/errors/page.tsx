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
import { useRouter } from "next/navigation"; // Add router import

const ErrorPageFixing = () => {
  const router = useRouter(); // Initialize router
  const [playerName, setPlayerName] = useState("");
  const [playerPosition, setPlayerPosition] = useState("");
  const [playerTeam, setPlayerTeam] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    
    try {
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
        if (response.status === 404) {
          setErrorMessage(`Error ${response.status}: API endpoint not found. The /api/players route does not exist.`);
        } else {
          setErrorMessage(`Error ${response.status}: Failed to create player`);
        }
      } else {
        console.log("Player created successfully");
        // Reset form after successful creation
        setPlayerName("");
        setPlayerPosition("");
        setPlayerTeam("");
        setErrorMessage("Player created successfully!");
      }
    } catch (error) {
      setErrorMessage("Network error: Failed to connect to the server");
    } finally {
      setIsLoading(false);
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
          {errorMessage && (
            <div className={`p-3 rounded-md ${errorMessage.includes('successfully') 
              ? 'bg-green-100 text-green-800 border border-green-300' 
              : 'bg-red-100 text-red-800 border border-red-300'}`}>
              {errorMessage}
            </div>
          )}
          <button 
            type="submit"
            disabled={isLoading}
            className={`px-4 py-2 rounded-md border ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}>
            {isLoading ? 'Creating...' : 'Create Player'}
          </button>
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
