"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  height: string;
  weight: string;
}

async function getPlayers() {
  try {
    const res = await fetch('/api/player-info', {
      cache: 'no-store',
      next: { revalidate: 0 }
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
  const players: Player[] = await getPlayers();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">NBA Players</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <Card key={player.id} className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
              <CardTitle className="text-xl font-bold">{player.name}</CardTitle>
              <Badge className="bg-white/20 hover:bg-white/30">{player.position}</Badge>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">Team</p>
                  <p className="font-semibold">{player.team}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">Height</p>
                  <p className="font-semibold">{player.height}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">Weight</p>
                  <p className="font-semibold">{player.weight}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
