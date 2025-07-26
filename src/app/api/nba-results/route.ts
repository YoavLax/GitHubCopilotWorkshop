import { NextRequest, NextResponse } from "next/server";
import nbaGamesData from "@/data/nba-games.json";

export async function GET(request: NextRequest) {
  try {
    const response = {
      result: nbaGamesData
    };

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, max-age=300',
      },
    });
  } catch (error) {
    console.error('Error serving NBA data:', error);
    
    return NextResponse.json(
      { error: "Failed to load NBA data. Please try again later." },
      { status: 500 }
    );
  }
}
