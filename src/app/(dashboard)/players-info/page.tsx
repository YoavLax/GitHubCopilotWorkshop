"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Function to fetch player data from our API
async function getPlayers() {
  try {
    // Disable cache to always get fresh data
    const res = await fetch('http://localhost:3000/api/player-info', {
      cache: 'no-store', // Disable caching to always get fresh data
      next: { revalidate: 0 } // Disable revalidation
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch players: ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching players:', error);
    throw new Error('Failed to load player information');
  }
}

export default async function PlayersInfo() {
  const players = await getPlayers();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">NBA Players Information</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player: any) => (
          <Card key={player.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{player.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="font-medium">Team:</dt>
                  <dd className="text-gray-600">{player.team}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Position:</dt>
                  <dd className="text-gray-600">{player.position}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Height:</dt>
                  <dd className="text-gray-600">{player.height}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Weight:</dt>
                  <dd className="text-gray-600">{player.weight}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
