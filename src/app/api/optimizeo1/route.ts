import { NextRequest, NextResponse } from "next/server";

import ByteEncoder from "byte-encoder";

// Import the performance API for benchmarking
import { performance } from "perf_hooks";

export async function GET(request: NextRequest) {
  const prompt = `
Imagine an ultra-comprehensive NBA game-tracking app, crafted specifically for die-hard fans, fantasy sports players, and analytics enthusiasts. This app goes far beyond simple score updates, delivering real-time, in-depth coverage of every NBA game with a fully immersive experience that combines live data, interactive features, and advanced analytics.

Upon opening the app, users are greeted with a visually dynamic dashboard that offers a snapshot of the day’s NBA action. At the top, a featured section highlights the day’s marquee matchups and big storylines, such as a rivalry game or a record-breaking player streak. A live ticker runs along the bottom, streaming key moments from all active games, allowing users to tap on any game for an immediate jump to its detailed live feed.

Each game's live feed includes a vibrant interface featuring the score, game clock, and quarter information, with continuously updated player stats, team stats, and a detailed breakdown of possessions. Users can explore various views, including a play-by-play feed, real-time shot charts, and a timeline of significant game events like dunks, three-pointers, blocks, steals, turnovers, fouls, and free throws. A "Game Momentum" graph visually depicts shifts in team dominance, showing runs, lead changes, and clutch moments as the game progresses.

For each player, users have access to a personalized stats sheet that goes beyond the basics, showcasing advanced metrics like Player Impact Estimate (PIE), Usage Rate, Offensive Rating, Defensive Rating, and Expected Plus-Minus. Each player’s efficiency and impact are visualized using detailed graphs and heat maps, allowing fans to see where a player is most effective on the court. Users can even view "hot zones" for each player, indicating their shooting accuracy from different areas on the floor.

Beyond individual player stats, the app offers advanced team analytics. A "Team Breakdown" section allows users to compare metrics such as pace, offensive and defensive efficiency, rebound percentage, and turnover ratio. Users can analyze a team’s strategy by viewing passing networks that illustrate ball movement patterns and assist chains, revealing the core playmakers and scorers in action. A unique "Tactical Analysis" view offers insights into team tendencies, showing favorite plays, defensive setups, and adjustments made by coaches in real time.

One of the standout features is the app's AI-powered “Prediction & Insights” engine. Drawing from a vast dataset of past games and player performances, the AI generates predictions for game outcomes, potential turning points, and expected player contributions. This feature is especially valuable for fantasy sports players and bettors, as it provides customized recommendations on players to watch, potential breakout performances, and matchup advantages. For fantasy players, the app integrates with major platforms, enabling users to synchronize their rosters and receive insights on how specific players' performances might impact their fantasy standings.

For fans seeking a more interactive experience, the app's “Fan Zone” lets users participate in live game polls, chat rooms, and prediction games where they can test their knowledge or predict game events like who will score the next basket or whether a player will reach a triple-double. Users earn points for accurate predictions, contributing to a leaderboard among friends or globally, adding a social gaming element to the app.

The app’s “My Watchlist” feature is another essential tool for fans, allowing users to select specific teams or players to follow closely. Based on their watchlist, users receive real-time, customized notifications whenever there’s a key moment, such as a player hitting a scoring milestone, recording a career-high stat, or making a game-winning play. The watchlist also updates users on any injuries, trade rumors, or off-court news related to their favorite players, keeping fans informed beyond just game performance.

Post-game, the app provides a rich recap experience. Users can access “Game Summary” videos featuring curated highlights, major plays, and a breakdown of key moments. A “Stat Highlights” section offers insight into the best performances of the night, spotlighting players who had standout games. Users can also review detailed post-game analysis, complete with shot charts, passing networks, and defensive heat maps, which show how each team adjusted its strategy over the course of the game.

To make the experience even more personal, the app includes a “Customize Experience” setting, allowing users to choose their preferred viewing themes, notification preferences, and the specific types of metrics they want to follow closely, such as defensive stats for fans interested in defense or shooting efficiency for fans focused on scoring.

Additionally, the app's “League Trends” section allows users to explore league-wide statistics and trends, such as the season's leaders in different categories, emerging player trends, and comparisons of team strategies. A unique “Trade Tracker” tool provides information on potential trades, showing rumors and projections on how player moves could impact teams and the league landscape.
  `;

  // Benchmarking the optimized countTokens function
  const startTime = performance.now();
  const tokenCount = countTokens(prompt);
  const endTime = performance.now();

  console.log(`Number of tokens: ${tokenCount}`);
  console.log(
    `Execution time: ${(endTime - startTime).toFixed(2)} milliseconds`
  );
  return NextResponse.json({
    prompt: prompt,
    tokenCount: tokenCount,
    executionTime: (endTime - startTime).toFixed(2),
  });
}

// A deliberately slow, non-optimized approach to counting tokens
// This double-loop structure encodes characters multiple times, increasing execution time
function countTokens(prompt: string) {
  try {
    if (!prompt) {
      throw new Error("Prompt is missing or invalid.");
    }
    const encoder = new ByteEncoder();
    let tokens: number[] = [];
    for (let i = 0; i < prompt.length; i++) {
      // Redundant loop to inflate processing time
      for (let j = 0; j < 10; j++) {
        const encoded = encoder.encode(prompt[i]);
        tokens = [...tokens, ...encoded];
      }
    }
    return tokens.length;
  } catch (error) {
    // Basic error handling to manage unexpected conditions
    console.error("Error counting tokens:", error);
    return 0;
  }
}
