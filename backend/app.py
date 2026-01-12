"""
Flask Backend for NBA Sports Application
Main application entry point
"""
from flask import Flask, jsonify, request, abort
from flask_cors import CORS
import json
import os
import time

app = Flask(__name__)

# Enable CORS for frontend communication
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:3001", "http://127.0.0.1:3001"],
        "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

# Load data files
def load_json_file(filename):
    """Helper function to load JSON data files"""
    try:
        file_path = os.path.join(os.path.dirname(__file__), 'data', filename)
        with open(file_path, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return None
    except json.JSONDecodeError:
        return None

# NBA Games data
@app.route('/api/nba-results', methods=['GET'])
def get_nba_results():
    """Get NBA game results"""
    try:
        nba_games = load_json_file('nba-games.json')
        if nba_games is None:
            return jsonify({'error': 'Failed to load NBA data'}), 500
        
        return jsonify({'result': nba_games}), 200
    except Exception as e:
        print(f'Error serving NBA data: {e}')
        return jsonify({'error': 'Failed to load NBA data. Please try again later.'}), 500

# Stadiums data
@app.route('/api/stadiums', methods=['GET'])
def get_stadiums():
    """Get NBA stadiums information"""
    try:
        stadiums = load_json_file('stadiums.json')
        if stadiums is None:
            return jsonify({'error': 'Failed to load stadiums data'}), 500
        
        return jsonify(stadiums), 200
    except Exception as e:
        print(f'Error serving stadiums data: {e}')
        return jsonify({'error': 'Failed to load stadiums data. Please try again later.'}), 500

# Player info data
@app.route('/api/player-info', methods=['GET'])
def get_player_info():
    """Get NBA player information"""
    try:
        players = load_json_file('player-info.json')
        if players is None or len(players) == 0:
            return jsonify({'error': 'No player data available'}), 404
        
        # Filter only required properties for each player
        filtered_players = [
            {
                'id': player['id'],
                'name': player['name'],
                'team': player['team'],
                'weight': player['weight'],
                'height': player['height'],
                'position': player['position']
            }
            for player in players
        ]
        
        return jsonify(filtered_players), 200
    except Exception as e:
        print(f'Error fetching player info: {e}')
        return jsonify({'error': 'Failed to fetch player information'}), 500

# Players API - Create player endpoint
# TODO: This endpoint is intentionally broken for Task 1.7 workshop exercise
# Students should use GitHub Copilot to identify and fix this issue
@app.route('/api/player', methods=['POST'])  # INTENTIONAL ERROR: Wrong route name
def create_player():
    """Create a new player"""
    try:
        if not request.json or 'name' not in request.json:
            return jsonify({'error': 'Name is required'}), 400
        
        players = load_json_file('player-info.json')
        if players is None:
            players = []
        
        new_id = players[-1]['id'] + 1 if players else 1
        new_player = {
            'id': new_id,
            'name': request.json.get('name'),
            'position': request.json.get('position'),
            'team': request.json.get('team'),
            'height': request.json.get('height', 'N/A'),
            'weight': request.json.get('weight', 'N/A'),
            'birthDate': request.json.get('birthDate', 'N/A'),
            'stats': request.json.get('stats', {
                'pointsPerGame': 0.0,
                'assistsPerGame': 0.0,
                'reboundsPerGame': 0.0
            })
        }
        
        players.append(new_player)
        
        # Save to file
        file_path = os.path.join(os.path.dirname(__file__), 'data', 'player-info.json')
        with open(file_path, 'w') as file:
            json.dump(players, file, indent=2)
        
        return jsonify(new_player), 201
    except Exception as e:
        print(f'Error creating player: {e}')
        return jsonify({'error': 'Failed to create player'}), 500

# Coaches API
@app.route('/api/coaches', methods=['GET'])
def get_coaches():
    """Get all NBA coaches"""
    try:
        coaches = load_json_file('coaches.json')
        if coaches is None:
            return jsonify({'error': 'Failed to load coaches data'}), 500
        
        return jsonify(coaches), 200
    except Exception as e:
        print(f'Error serving coaches data: {e}')
        return jsonify({'error': 'Failed to load coaches data. Please try again later.'}), 500

@app.route('/api/coaches/<int:coach_id>', methods=['GET'])
def get_coach(coach_id):
    """Get a specific coach by ID"""
    try:
        coaches = load_json_file('coaches.json')
        if coaches is None:
            return jsonify({'error': 'Failed to load coaches data'}), 500
        
        coach = next((c for c in coaches if c['id'] == coach_id), None)
        if coach is None:
            return jsonify({'error': 'Coach not found'}), 404
        
        return jsonify(coach), 200
    except Exception as e:
        print(f'Error fetching coach: {e}')
        return jsonify({'error': 'Failed to fetch coach'}), 500

@app.route('/api/coaches', methods=['POST'])
def create_coach():
    """Create a new coach"""
    try:
        if not request.json or 'name' not in request.json:
            return jsonify({'error': 'Name is required'}), 400
        
        coaches = load_json_file('coaches.json')
        if coaches is None:
            coaches = []
        
        new_id = coaches[-1]['id'] + 1 if coaches else 1
        new_coach = {
            'id': new_id,
            'name': request.json.get('name'),
            'age': request.json.get('age'),
            'team': request.json.get('team'),
            'history': request.json.get('history', [])
        }
        
        coaches.append(new_coach)
        
        # Save to file
        file_path = os.path.join(os.path.dirname(__file__), 'data', 'coaches.json')
        with open(file_path, 'w') as file:
            json.dump(coaches, file, indent=2)
        
        return jsonify(new_coach), 201
    except Exception as e:
        print(f'Error creating coach: {e}')
        return jsonify({'error': 'Failed to create coach'}), 500

@app.route('/api/coaches/<int:coach_id>', methods=['PUT'])
def update_coach(coach_id):
    """Update an existing coach"""
    try:
        coaches = load_json_file('coaches.json')
        if coaches is None:
            return jsonify({'error': 'Failed to load coaches data'}), 500
        
        coach = next((c for c in coaches if c['id'] == coach_id), None)
        if coach is None:
            return jsonify({'error': 'Coach not found'}), 404
        
        if not request.json:
            return jsonify({'error': 'Invalid data'}), 400
        
        coach['name'] = request.json.get('name', coach['name'])
        coach['age'] = request.json.get('age', coach['age'])
        coach['team'] = request.json.get('team', coach['team'])
        coach['history'] = request.json.get('history', coach['history'])
        
        # Save to file
        file_path = os.path.join(os.path.dirname(__file__), 'data', 'coaches.json')
        with open(file_path, 'w') as file:
            json.dump(coaches, file, indent=2)
        
        return jsonify(coach), 200
    except Exception as e:
        print(f'Error updating coach: {e}')
        return jsonify({'error': 'Failed to update coach'}), 500

@app.route('/api/coaches/<int:coach_id>', methods=['DELETE'])
def delete_coach(coach_id):
    """Delete a coach"""
    try:
        coaches = load_json_file('coaches.json')
        if coaches is None:
            return jsonify({'error': 'Failed to load coaches data'}), 500
        
        coach = next((c for c in coaches if c['id'] == coach_id), None)
        if coach is None:
            return jsonify({'error': 'Coach not found'}), 404
        
        coaches.remove(coach)
        
        # Save to file
        file_path = os.path.join(os.path.dirname(__file__), 'data', 'coaches.json')
        with open(file_path, 'w') as file:
            json.dump(coaches, file, indent=2)
        
        return jsonify({'result': True}), 200
    except Exception as e:
        print(f'Error deleting coach: {e}')
        return jsonify({'error': 'Failed to delete coach'}), 500

# Optimize endpoint - intentionally slow for demonstration
@app.route('/api/optimize', methods=['GET'])
def optimize():
    """Optimize endpoint for token counting demonstration - INTENTIONALLY SLOW"""
    # Track start time for execution measurement
    start_time = time.time()
    
    # Intentionally large prompt for demonstration purposes
    prompt = """
Imagine an ultra-comprehensive NBA game-tracking app, crafted specifically for die-hard fans, fantasy sports players, and analytics enthusiasts. This app goes far beyond simple score updates, delivering real-time, in-depth coverage of every NBA game with a fully immersive experience that combines live data, interactive features, and advanced analytics.

Upon opening the app, users are greeted with a visually dynamic dashboard that offers a snapshot of the day's NBA action. At the top, a featured section highlights the day's marquee matchups and big storylines, such as a rivalry game or a record-breaking player streak. A live ticker runs along the bottom, streaming key moments from all active games, allowing users to tap on any game for an immediate jump to its detailed live feed.

Each game's live feed includes a vibrant interface featuring the score, game clock, and quarter information, with continuously updated player stats, team stats, and a detailed breakdown of possessions. Users can explore various views, including a play-by-play feed, real-time shot charts, and a timeline of significant game events like dunks, three-pointers, blocks, steals, turnovers, fouls, and free throws. A "Game Momentum" graph visually depicts shifts in team dominance, showing runs, lead changes, and clutch moments as the game progresses.

For each player, users have access to a personalized stats sheet that goes beyond the basics, showcasing advanced metrics like Player Impact Estimate (PIE), Usage Rate, Offensive Rating, Defensive Rating, and Expected Plus-Minus. Each player's efficiency and impact are visualized using detailed graphs and heat maps, allowing fans to see where a player is most effective on the court. Users can even view "hot zones" for each player, indicating their shooting accuracy from different areas on the floor.

Beyond individual player stats, the app offers advanced team analytics. A "Team Breakdown" section allows users to compare metrics such as pace, offensive and defensive efficiency, rebound percentage, and turnover ratio. Users can analyze a team's strategy by viewing passing networks that illustrate ball movement patterns and assist chains, revealing the core playmakers and scorers in action. A unique "Tactical Analysis" view offers insights into team tendencies, showing favorite plays, defensive setups, and adjustments made by coaches in real time.

One of the standout features is the app's AI-powered "Prediction & Insights" engine. Drawing from a vast dataset of past games and player performances, the AI generates predictions for game outcomes, potential turning points, and expected player contributions. This feature is especially valuable for fantasy sports players and bettors, as it provides customized recommendations on players to watch, potential breakout performances, and matchup advantages. For fantasy players, the app integrates with major platforms, enabling users to synchronize their rosters and receive insights on how specific players' performances might impact their fantasy standings.

For fans seeking a more interactive experience, the app's "Fan Zone" lets users participate in live game polls, chat rooms, and prediction games where they can test their knowledge or predict game events like who will score the next basket or whether a player will reach a triple-double. Users earn points for accurate predictions, contributing to a leaderboard among friends or globally, adding a social gaming element to the app.

The app's "My Watchlist" feature is another essential tool for fans, allowing users to select specific teams or players to follow closely. Based on their watchlist, users receive real-time, customized notifications whenever there's a key moment, such as a player hitting a scoring milestone, recording a career-high stat, or making a game-winning play. The watchlist also updates users on any injuries, trade rumors, or off-court news related to their favorite players, keeping fans informed beyond just game performance.

Post-game, the app provides a rich recap experience. Users can access "Game Summary" videos featuring curated highlights, major plays, and a breakdown of key moments. A "Stat Highlights" section offers insight into the best performances of the night, spotlighting players who had standout games. Users can also review detailed post-game analysis, complete with shot charts, passing networks, and defensive heat maps, which show how each team adjusted its strategy over the course of the game.

To make the experience even more personal, the app includes a "Customize Experience" setting, allowing users to choose their preferred viewing themes, notification preferences, and the specific types of metrics they want to follow closely, such as defensive stats for fans interested in defense or shooting efficiency for fans focused on scoring.

Additionally, the app's "League Trends" section allows users to explore league-wide statistics and trends, such as the season's leaders in different categories, emerging player trends, and comparisons of team strategies. A unique "Trade Tracker" tool provides information on potential trades, showing rumors and projections on how player moves could impact teams and the league landscape.
    """
    
    # INTENTIONALLY INEFFICIENT RECURSIVE FUNCTIONS for demonstration purposes
    # These are designed to be slow and should be optimized by students
    
    def inefficient_fibonacci(n):
        """Highly inefficient recursive fibonacci - no memoization"""
        if n <= 1:
            return n
        return inefficient_fibonacci(n - 1) + inefficient_fibonacci(n - 2)
    
    def inefficient_factorial(n):
        """Inefficient recursive factorial with unnecessary string operations"""
        if n <= 1:
            return 1
        # Adding unnecessary string concatenation to slow it down
        temp = str(n) * 100  # Create large string
        temp = temp[:10]  # Use only small part (wasteful)
        return n * inefficient_factorial(n - 1)
    
    # Execute inefficient computations
    # Calculate fibonacci(30) - this takes a few seconds but won't timeout
    fib_result = inefficient_fibonacci(36)
    
    # Calculate factorial with string operations - reduced to avoid timeout
    factorial_result = inefficient_factorial(500)
    
    # Do some unnecessary work with the prompt
    for char in prompt[:100]:
        temp_list = [char] * 1000  # Create unnecessary lists
    
    # Calculate execution time in seconds
    execution_time_seconds = time.time() - start_time
    
    # Simplified token count (approximation: ~4 chars per token)
    token_count = len(prompt) // 4
    
    return jsonify({
        'prompt': prompt,
        'tokenCount': token_count,
        'executionTime': f'{execution_time_seconds:.2f}'
    }), 200

# Summarize endpoint - placeholder
@app.route('/api/summarize', methods=['POST'])
def summarize():
    """Summarize endpoint (placeholder for OpenAI integration)"""
    data = request.get_json()
    transcription = data.get('transcription', '')
    
    # Placeholder response
    return jsonify({}), 200

# Press conferences endpoint - placeholder
@app.route('/api/press-conferences', methods=['GET'])
def get_press_conferences():
    """Get press conferences (placeholder)"""
    return jsonify([]), 200

# Health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'service': 'NBA Backend API'}), 200

# Error handlers
@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({'error': 'Resource not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    # Run the Flask application
    app.run(debug=True, host='0.0.0.0', port=8080)
