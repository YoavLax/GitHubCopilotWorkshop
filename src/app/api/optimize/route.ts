import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  const arr = Array.from({ length: 100000 }, () =>
    Math.floor(Math.random() * 100000)
  );

  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
    n--;
  } while (swapped);

  const endTime = Date.now();
  const executionTime = (endTime - startTime) / 1000; // Time in seconds

  return NextResponse.json(executionTime);
}
