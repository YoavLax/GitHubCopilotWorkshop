import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;
const model = "gpt-4o-mini";

export async function POST(request: NextRequest) {
  const { transcription } = await request.json();

  return NextResponse.json({});
}