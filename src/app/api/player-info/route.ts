import { NextRequest, NextResponse } from "next/server";
import { playerInfo } from "@/lib/player-info";

export async function GET(request: NextRequest) {
  try {
    if (!playerInfo || playerInfo.length === 0) {
      return NextResponse.json(
        { error: "No player data available" },
        { status: 404 }
      );
    }

    // Filter only required properties for each player
    const filteredPlayers = playerInfo.map(({ id, name, team, weight, height, position }) => ({
      id,
      name,
      team,
      weight,
      height,
      position
    }));

    return NextResponse.json(filteredPlayers);
  } catch (error) {
    console.error('Error fetching player info:', error);
    return NextResponse.json(
      { error: "Failed to fetch player information" },
      { status: 500 }
    );
  }
}
