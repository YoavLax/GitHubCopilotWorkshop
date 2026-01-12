import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TeamLogo } from "@/components/team-logo";

// Type definition for NBA game data
interface NBAGame {
  id: string;
  event_away_team: string;
  event_home_team: string;
  event_away_team_logo?: string;
  event_home_team_logo?: string;
  event_final_result: string;
  event_date: string;
  event_status: string;
}

export default async function NBAScores() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
    const response = await fetch(`${apiUrl}/api/nba-results`, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new Error('Failed to fetch NBA scores');
    }

    const games = await response.json();
    const results: NBAGame[] = games.result || [];

    // Helper function to format date safely
    const formatDate = (dateString: string) => {
      try {
        return new Date(dateString).toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });
      } catch {
        return 'Date TBD';
      }
    };

    return (
      <div className="container mx-auto p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">NBA Scores</h1>
          <p className="text-gray-600 mt-2">Latest game results and scores</p>
        </div>
        
        {results.length === 0 ? (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-gray-500">No games available at the moment.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((game) => (
              <Card key={game.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="text-xs">
                      {game.event_status}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {formatDate(game.event_date)}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Away Team */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <TeamLogo
                          src={game.event_away_team_logo}
                          alt={`${game.event_away_team} logo`}
                          teamName={game.event_away_team}
                        />
                        <span className="font-medium text-sm">
                          {game.event_away_team}
                        </span>
                      </div>
                    </div>
                    
                    {/* Score Display */}
                    <div className="text-center py-2">
                      <div className="text-2xl font-bold text-gray-900">
                        {game.event_final_result}
                      </div>
                    </div>
                    
                    {/* Home Team */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <TeamLogo
                          src={game.event_home_team_logo}
                          alt={`${game.event_home_team} logo`}
                          teamName={game.event_home_team}
                        />
                        <span className="font-medium text-sm">
                          {game.event_home_team}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error in NBA Scores page:', error);
    
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">NBA Scores</h1>
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-red-500 mb-2">Unable to load NBA scores</p>
            <p className="text-gray-500 text-sm">Please try refreshing the page or check back later.</p>
          </CardContent>
        </Card>
      </div>
    );
  }
}
