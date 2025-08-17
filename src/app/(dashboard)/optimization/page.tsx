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
        setError(""); // Clear any previous errors
        
        // Use relative URL instead of hardcoded localhost
        const response = await fetch("/api/optimize");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("API Response:", data); // Debug log to see what we're getting
        setOptimization(data);
      } catch (error) {
        console.error("Failed to fetch optimization data:", error);
        setError(`Failed to load optimization data: ${error instanceof Error ? error.message : 'Unknown error'}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Optimization</h1>
      
      {isLoading && (
        <div className="space-y-2">
          <p className="pb-3">Please wait while the page loads...</p>
          <p className="text-2xl">Loading...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {!isLoading && !error && optimization && (
        <div className="space-y-4">
          <p>
            The page took{" "}
            <span className="text-bold text-xl bg-[#E5FF00] px-2 py-1 rounded">
              {optimization.executionTime}
            </span>{" "}
            milliseconds to load. <br /> 
            Please optimize the code with GitHub Copilot to improve the response time.
          </p>
          
          {/* Debug information - remove this in production */}
          <div className="bg-gray-100 p-4 rounded text-sm">
            <strong>Debug Info:</strong>
            <ul className="mt-2 space-y-1">
              <li>Token Count: {optimization.tokenCount}</li>
              <li>Execution Time: {optimization.executionTime}ms</li>
              <li>Prompt Length: {optimization.prompt?.length || 0} characters</li>
            </ul>
          </div>
        </div>
      )}
      
      {!isLoading && !error && !optimization && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
          No optimization data received from the API.
        </div>
      )}
    </div>
  );
}
