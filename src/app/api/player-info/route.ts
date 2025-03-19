import { NextRequest, NextResponse } from "next/server";
import { playerInfo } from "@/lib/player-info";

export async function GET(request: NextRequest) {
  return NextResponse.json({});
}
