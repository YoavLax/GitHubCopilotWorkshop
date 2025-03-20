import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const startTime = Date.now();

  // Generate an array of random numbers
  const arr = Array.from({ length: 100000 }, () =>
    Math.floor(Math.random() * 100000)
  );

  // Use built-in sort for better performance
  arr.sort((a, b) => a - b);

  const endTime = Date.now();
  const executionTime = (endTime - startTime) / 1000; // Time in seconds

  // Return the execution time as JSON
  return NextResponse.json(executionTime);
}
