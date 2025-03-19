"use client";

import { useEffect, useState } from "react";

interface OptimizationData {
  tokenCount: number;
  executionTime: string;
  prompt: string;
}

export default function Optimizationo1() {
  const [optimization, setOptimization] = useState<OptimizationData | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  // use effect to fetch the data from optimize api
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3000/api/optimizeo1");
        const data = await response.json();
        console.log(data);
        setOptimization(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Token Count Optimizer Using o1</h1>
      {loading && <p className="pb-3">Please wait while the page loads...</p>}
      {loading ? (
        <p className="text-2xl">Loading...</p>
      ) : (
        <div className="p-5 bg-white rounded shadow-md">
          {optimization && (
            <div>
              <h2 className="text-xl font-semibold text-blue-500 mb-2">
                For Prompt:
              </h2>
              <p className="mb-4">{optimization.prompt}</p>
              <div className="pt-5">
                <p className="mb-2">
                  <span className="text-xl font-semibold text-blue-500">
                    Token Count:
                  </span>{" "}
                  {optimization.tokenCount}
                </p>
                <p>
                  <span className="text-xl font-semibold text-blue-500">
                    Execution Time:
                  </span>{" "}
                  {optimization.executionTime}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
