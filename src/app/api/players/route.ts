import { NextRequest, NextResponse } from "next/server";
import { playerInfo } from "@/lib/player-info";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.position || !body.team) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new player with default values
    const newPlayer = {
      id: playerInfo.length + 1,
      name: body.name,
      team: body.team,
      position: body.position,
      height: "6 ft 0 in", // default height
      weight: "180 lbs", // default weight
      birthDate: new Date().toISOString().split('T')[0],
      stats: {
        pointsPerGame: 0,
        assistsPerGame: 0,
        reboundsPerGame: 0,
      }
    };

    // Add to player array
    playerInfo.push(newPlayer);

    // Return both success message and updated player list
    return NextResponse.json(
      { 
        message: "Player created successfully", 
        player: newPlayer,
        players: playerInfo // Return full updated list
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating player:', error);
    return NextResponse.json(
      { error: "Failed to create player" },
      { status: 500 }
    );
  }
}
