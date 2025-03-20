import { NextRequest, NextResponse } from "next/server";
import { playerInfo } from "@/lib/player-info";

export async function GET(request: NextRequest) {
  try {
    // Ensure we have player data
    if (!playerInfo || playerInfo.length === 0) {
      return NextResponse.json(
        { error: "No player data available" },
        { status: 404 }
      );
    }

    // Return the full player array
    return NextResponse.json(playerInfo);
  } catch (error) {
    console.error('Error fetching player info:', error);
    return NextResponse.json(
      { error: "Failed to fetch player information" },
      { status: 500 }
    );
  }
}
