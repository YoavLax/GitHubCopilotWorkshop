# NBA Sports Application - Architecture Documentation

## Overview

This application has been separated into two independent services following microservices architecture principles:

1. **Backend Service** - Python Flask API (Port 8080) - Located in `/backend`
2. **Frontend Service** - Next.js 14 Application (Port 3000) - Located in `/frontend`

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         Browser                              │
│                   http://localhost:3000                      │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ HTTP Requests
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                  Next.js 14 Frontend                         │
│                                                              │
│  • Server-Side Rendering (SSR)                              │
│  • TypeScript + React                                       │
│  • Tailwind CSS + shadcn/ui                                 │
│  • Environment: NEXT_PUBLIC_API_URL                         │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ fetch() API Calls
                      │ http://localhost:8080/api/*
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                   Flask Backend API                          │
│                                                              │
│  • RESTful API Endpoints                                    │
│  • CORS Enabled                                             │
│  • JSON Data Storage                                        │
│  • Error Handling                                           │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ Read/Write
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                   Data Layer (JSON Files)                    │
│                                                              │
│  • nba-games.json                                           │
│  • stadiums.json                                            │
│  • player-info.json                                         │
│  • coaches.json                                             │
└─────────────────────────────────────────────────────────────┘
```

## Backend Service (Flask)

### Location
`/backend` directory

### Port
8080

### Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check endpoint |
| `/api/nba-results` | GET | Get NBA game results |
| `/api/stadiums` | GET | Get stadium information |
| `/api/player-info` | GET | Get player information |
| `/api/coaches` | GET | Get all coaches |
| `/api/coaches/<id>` | GET | Get specific coach |
| `/api/coaches` | POST | Create new coach |
| `/api/coaches/<id>` | PUT | Update coach |
| `/api/coaches/<id>` | DELETE | Delete coach |
| `/api/optimize` | GET | Token counting demo |
| `/api/summarize` | POST | Summarization (placeholder) |
| `/api/press-conferences` | GET | Press conferences (placeholder) |

### Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### Dependencies
- Flask 3.0.0
- flask-cors 4.0.0
- python-dotenv 1.0.0

## Frontend Service (Next.js)

### Location
`/frontend` directory

### Port
3000

### Key Features
- Server-Side Rendering (SSR) for optimal performance
- TypeScript for type safety
- Responsive UI with Tailwind CSS
- Component library: shadcn/ui
- API communication via environment variable

### Setup

```bash
cd frontend
npm install
echo "NEXT_PUBLIC_API_URL=http://localhost:8080" > .env.local
npm run dev
```

### Pages

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/nba-scores` | NBA game results page |
| `/stadiums` | Stadium information page |
| `/optimization` | Performance optimization demo |
| `/errors` | Error handling demo (Add NBA Player) |

### Environment Variables

- `NEXT_PUBLIC_API_URL`: Backend API base URL (default: http://localhost:8080)

## Data Flow

### Example: Loading NBA Scores

1. **User visits** `http://localhost:3000/nba-scores`
2. **Next.js SSR** renders the page on the server
3. **Frontend makes API call** to `${NEXT_PUBLIC_API_URL}/api/nba-results`
4. **Backend receives request** at Flask endpoint
5. **Backend loads data** from `backend/data/nba-games.json`
6. **Backend returns JSON** response with game data
7. **Frontend receives data** and renders the UI
8. **Browser displays** formatted NBA scores

## CORS Configuration

The backend has CORS configured to accept requests from:
- `http://localhost:3000`
- `http://127.0.0.1:3000`

Allowed methods: `GET`, `POST`, `PUT`, `DELETE`, `OPTIONS`

## Development Workflow

### Starting Both Services

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate  # Activate virtual environment
python app.py
# Backend running on http://localhost:8080
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Frontend running on http://localhost:3000
```

### Testing the Setup

**Test Backend:**
```bash
curl http://localhost:8080/api/health
# Expected: {"status": "healthy", "service": "NBA Backend API"}
```

**Test Frontend:**
Open browser to `http://localhost:3000`

## Benefits of This Architecture

1. **Separation of Concerns**
   - Backend focuses on data and business logic
   - Frontend focuses on UI and user experience

2. **Independent Scaling**
   - Each service can be scaled independently
   - Different hosting options for each service

3. **Technology Flexibility**
   - Backend: Python ecosystem
   - Frontend: JavaScript/TypeScript ecosystem
   - Easy to swap either service

4. **Development Efficiency**
   - Teams can work independently
   - Clear API contracts
   - Easier testing and debugging

5. **Deployment Options**
   - Backend: Any Python hosting (Heroku, AWS, Azure, etc.)
   - Frontend: Vercel, Netlify, or any Node.js hosting
   - Can be deployed to different servers/regions

## Future Enhancements

### Backend
- Add database (PostgreSQL, MongoDB)
- Implement authentication/authorization
- Add caching (Redis)
- API rate limiting
- Logging and monitoring

### Frontend
- Add state management (Zustand, Redux)
- Implement authentication UI
- Add real-time updates (WebSockets)
- Progressive Web App (PWA) features
- Improved error boundaries

### Infrastructure
- Docker containerization
- CI/CD pipelines
- Kubernetes orchestration
- Load balancing
- API Gateway

## Troubleshooting

### Backend Issues

**Port already in use:**
```bash
lsof -ti:8080 | xargs kill -9
```

**Dependencies not found:**
```bash
# Ensure virtual environment is activated
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
```

### Frontend Issues

**API connection errors:**
- Check backend is running: `curl http://localhost:8080/api/health`
- Verify `.env.local` exists with correct API URL
- Check browser console for CORS errors

**Build errors:**
- Run `npm install` to ensure dependencies are installed
- Check for TypeScript errors: `npm run lint`

## Maintenance

### Updating Backend
1. Update code in `/backend`
2. Update dependencies in `requirements.txt`
3. Restart Flask server

### Updating Frontend
1. Update code in `/frontend`
2. Update dependencies in `frontend/package.json`
3. Run `npm install` in the frontend directory if dependencies changed
4. Restart dev server if needed (or use hot reload)

## Security Considerations

### Current Implementation (Development)
- No authentication
- No rate limiting
- CORS open to localhost
- Debug mode enabled

### Production Recommendations
- Implement JWT authentication
- Add rate limiting
- Restrict CORS to production domains
- Disable debug mode
- Use HTTPS
- Environment-based configuration
- Input validation and sanitization
- SQL injection prevention (when using database)
- XSS protection
