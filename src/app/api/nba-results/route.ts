import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL("https://apiv2.allsportsapi.com/basketball/");

  const params = {
    met: "Fixtures",
    APIkey: process.env.NEXT_PUBLIC_NBA_API_KEY,
    from: "2024-10-01",
    to: "2024-10-29",
    leagueId: 766,
  };

  const urlWithParams = `${url}?${new URLSearchParams(
    params as any
  ).toString()}`;

  const response = await fetch(urlWithParams);
  const games = await response.json();

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }

  return NextResponse.json(games);
}
