"use client";

import { useEffect, useState } from "react";

// Type definition for the optimization response
interface OptimizationResult {
  prompt: string;
  tokenCount: number;
  executionTime: string;
}

export default function OptimizationPage() {
  const [optimization, setOptimization] = useState<OptimizationResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // use effect to fetch the data from optimize api
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/api/optimize");
        const data = await response.json();
        setOptimization(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Optimization</h1>
      {isLoading && <p className="pb-3">Please wait while the page loads...</p>}
      {isLoading ? (
        <p className="text-2xl">Loading...</p>
      ) : (
        <div>
          <p>
            The page took{" "}
            <span className="text-bold text-xl bg-[#E5FF00]">
              {optimization?.executionTime}
            </span>{" "}
            milliseconds to load. <br /> Please optimize the code with GitHub Copilot
            to improve the response time.
          </p>
        </div>
      )}
    </div>
  );
}
