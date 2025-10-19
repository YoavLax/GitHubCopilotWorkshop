# GitHub Copilot Workshop - NBA Sports Application

Welcome to the comprehensive GitHub Copilot Workshop! This hands-on workshop will teach you to leverage AI-powered development through a real NBA sports application built with Next.js 14.

❗**Note**: No mastery of JavaScript or Next.js is needed - AI will generate most of the code for you in this exercise. Even if you are not very familiar, it's a great opportunity to leverage AI to quickly learn a popular framework.

## 🎯 Workshop Objectives

By the end of this workshop, you'll master:
- **Core Copilot Features**: Chat interactions, completions, and role prompting
- **Advanced Workflows**: Agent mode, Vision capabilities, and code optimization
- **Specialized Integration**: MCP servers and automated workflows
- **Best Practices**: Error handling, testing, and documentation with AI assistance

## 📋 Prerequisites

### Required Software
1. **GitHub Copilot License**: Active GitHub Copilot license (paid tier, not the free version)
2. **IDE Setup**: Install and update GitHub Copilot & GitHub Copilot Chat extensions in your IDE
3. **Authentication**: Login to GitHub Copilot and verify both code completions and chat work
4. **Runtime**: Install [Node.js](https://nodejs.org/en/download) & npm. Verify with:
   ```bash
   node -v
   npm -v
   ```

### Optional for Advanced Features
- **Docker** (for MCP server tasks)
- **GitHub Personal Access Token** (for MCP integration)

## 🚀 Quick Start

This section provides a quick overview. For detailed setup, see Task 0.

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GitHubCopilotWorkshop-master
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser

## 🏀 Application Overview

**GitHub Copilot NBA Companion** - Your dedicated NBA companion! This app brings you:
- 📊 **Live NBA Results**: Real-time game scores and statistics
- 🎯 **Player Information**: Comprehensive player stats and profiles  
- 🏟️ **Stadium Information**: NBA venues and facility details
- ⚡ **Performance Optimization**: Examples for code optimization exercises
- 🔧 **Error Handling**: Debugging and error resolution practice

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui components
- **Testing**: Jest and React Testing Library
- **State Management**: React Query (TanStack Query)
- **API**: Next.js API Routes

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── (dashboard)/        # Dashboard layout group
│   │   │   ├── nba-scores/     # NBA game results
│   │   │   ├── stadiums/       # Stadium information
│   │   │   ├── optimization/   # Performance examples
│   │   │   └── errors/         # Error handling examples
│   │   └── api/                # API routes
│   ├── components/             # Reusable UI components
│   │   └── ui/                 # shadcn/ui components
│   ├── lib/                    # Utility functions and data
│   └── hooks/                  # Custom React hooks
├── __tests__/                  # Test files
├── .github/                    # GitHub configuration
│   ├── copilot-instructions.md # Custom Copilot instructions
│   ├── chatmodes/              # Custom chat modes
│   └── prompts/                # Reusable prompt templates
└── image/                      # Workshop assets and screenshots
```

## 🔧 Development Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run test       # Run Jest tests
npm run test:watch # Run tests in watch mode
```

---

# 📖 Workshop Instructions

## Task 0 - Setup & Model Selection

### Environment Setup
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser

### Choose Your AI Model for GitHub Copilot Chat

Select the appropriate AI model based on your task:

- **GPT-4.1**: Best for general development, UI components, basic API routes, code documentation, and bug fixes
- **Claude 4 Sonnet**: Excellent for code optimization, complex problem-solving, agent mode tasks, and performance improvements

**How to Switch Models**:
1. Open GitHub Copilot Chat
2. Look for the model selector dropdown (usually shows current model)
3. Click to see available options and select your preferred model

![Model Selection](image/chat-model-selection.png)

---

## Task 1 - Core Copilot Basics

### 1.1 Repository Exploration 

**Imagine you are a new developer who just joined the team. You need to explore the project and understand its main components**

- Open the github.com platform and access your repository (you can also use @workspace (#project in VS/Jetbrains) or #codebase in your IDE to query the whole project)
- Click on the GitHub Copilot icon to open a chat
- Explore the app by asking questions like:
  - Can you tell me about this repository? 
  - What framework is this repository using? 
  - Where are the API routes handled?
  - Which API routes are included in this repository?
  - Where are the main UI components?
  - What packages does the app use?

### 1.2 Explore Next.js Technology with @github

Use GitHub Copilot's web search capabilities to learn about Next.js 14 features:

**Instructions:**
1. Open GitHub Copilot Chat
2. Ask these prompts one by one (don't copy-paste):
   - `@github How do I create an API route in Next.js 14?`
   - `@github What are Server Actions in Next.js 14?`
   - `@github How does the routing system work in Next.js 14?`
   - `@github How to create a ui component in Next.js 14?`

By using @github you are: Getting answers grounded in web search, code search, and your enterprise's knowledge bases.
You can tell that Copilot chat used bing search if you see bing as search resource:

![Bing Search](image/copilot-bing-search.png)

> Troubleshoot: If you don't see Bing in references, try prompting with "@github search the web, how do I..."

### 1.3 Role Prompting and Custom Instructions

GitHub Copilot Chat role prompting allows you to define a specific role for Copilot, guiding it to provide more relevant and context-aware assistance. Additionally, you can enhance Copilot's responses by setting up custom instructions.

**Setup Instructions:**
1. Copy and paste the following combined prompt into the `.github/copilot-instructions.md` file:

```
You are a Next.js 14 developer focused on building modern, scalable web applications. Your expertise includes:

- **Framework Mastery**: Deep knowledge of Next.js 14 App Router, routing conventions, layouts, and server/client components
- **TypeScript Excellence**: Write type-safe code with proper interfaces, generics, and error handling
- **Modern Styling**: Use Tailwind CSS with shadcn/ui components for consistent, responsive design patterns
- **API Development**: Create secure, performant Next.js API routes with proper validation and error handling
- **Performance Focus**: Implement lazy loading, code splitting, caching strategies, and Core Web Vitals optimization
- **Testing & Quality**: Generate comprehensive unit tests, integration tests, and follow testing best practices
- **Accessibility**: Ensure WCAG compliance, semantic HTML, and inclusive design patterns

Code Generation Guidelines:
- Always include comprehensive comments explaining complex logic
- Implement robust error handling with user-friendly error messages
- Follow React and Next.js best practices for hooks, state management, and component architecture
- Optimize for performance with proper memoization, suspense boundaries, and server-side rendering
- Include loading states, error boundaries, and fallback components
- Write reusable, composable components that follow single responsibility principle
- Ensure responsive design that works across all device sizes

When providing solutions:
- Explain the reasoning behind architectural decisions
- Suggest performance improvements and potential optimizations
- Include relevant documentation and helpful comments
- Provide examples of proper error handling and edge cases
- Recommend best practices for maintainability and scalability
```

2. Test the custom instructions by asking Copilot any coding question and notice how it applies the custom instructions automatically
3. The responses should include TypeScript, error handling, and Next.js 14 patterns

### 1.4 GitHub Copilot Code Reviews

GitHub Copilot can review your code and provide feedback with suggested changes.

**Instructions:**
1. Open `/src/app/api/nba-results/route.ts`
2. Select all the file code
3. Right-click and choose 'Copilot -> Review and Comment'
4. Review Copilot's feedback and apply suggested improvements
5. Repeat for other API routes

![Review and Comment](image/review-and-comment-comments.png)

### 1.5 Add Comments to Code

One of the common frustrations for developers is documenting their code properly, but Copilot is here to help!

**Instructions:**
1. Open `/src/app/api/nba-results/route.ts`
2. Use GitHub Copilot Chat to gain insights:
   - Select the code and choose the `/explain` option for a detailed breakdown
3. Generate documentation:
   - Select the entire function, then press `Cmd+I` (macOS) or `Ctrl+I` (Windows)
   - Type `/doc` - GitHub Copilot will generate documentation-style comments
4. Add `/doc` and comments to other API routes

**Notice**: When adding comments, ensure GitHub Copilot Chat applies custom instructions with each request.

### 1.6 Generate Unit Tests

**Instructions:**
1. Open `/src/util/calculator.js` - the file contains simple calculator util functions
2. Open `/src/util/calculator.test.js` (this file should exist but be empty)
3. Select all the code in `calculator.js` and press `Cmd+I` (macOS) or `Ctrl+I` (Windows)
4. Type `/tests` - GitHub Copilot will generate unit tests for the selected functions
5. Copy the generated tests into `calculator.test.js`
6. Run tests: `npm test src/util/calculator.test.js`
7. If tests fail, copy the terminal error message, select the failing test code, press `Ctrl+I`/`Cmd+I`, and type `/fix` followed by pasting the error message

**Alternative approach using Chat:**
- Open GitHub Copilot Chat
- Attach the `calculator.js` file to the chat
- Ask: "Generate Jest unit tests for all functions in this calculator file"
- Copy the generated tests to `calculator.test.js`

### 1.7 Fix Your Code with GitHub Copilot

GitHub Copilot assists in fixing code errors by analyzing context to suggest corrections.

**Instructions:**
1. Navigate to the errors page at http://localhost:3000/errors (this is an 'Add NBA player' page)
2. Fill in the form and click 'Create player' button - you'll see an error (404)
3. Ask Copilot to `/explain` the error "/explain POST /api/players 404" with context of `/errors/page.tsx`
4. Ask Copilot Chat to fix the error (ask to create the API, providing the page and players data file - `/src/lib/player-info.ts`)
5. You should now be able to add players
6. Enhance the form styling by selecting the form, pressing `Ctrl+I`/`Cmd+I`, and asking Copilot to improve the style using TailwindCSS

### 1.8 Create Player Info Feature

Create a comprehensive player information display using file attachments.

**Instructions:**
1. Add these files to Chat context (attach files or drag&drop):
   - `/src/app/api/player-info/route.ts` - API to fetch players data (already exists)
   - `/src/lib/player-info.ts` - Players data
   - You'll need to create: `/src/app/(dashboard)/players-info/page.tsx` - Players info page

2. Ask Copilot using either edit or agent mode: 
   ```
   Using the existing player-info API route, create a React component that displays a list of player information showing only the id, name, team, weight, height, and position properties. Ensure each player is displayed in a separate card. Use TailwindCSS and shadcn in your prompt to style the output.
   ```

3. Open http://localhost:3000/players-info and verify results


### 1.9 Optimize Code With GitHub Copilot

GitHub Copilot Chat can help you optimize code (refactor behavior without changing functionality).

**Instructions:**
1. Click on 'Optimization' page in the web app left menu 
2. Wait until the page finishes loading (might take ~10s)
3. Find the API route in the code (use #codebase to help locate it)
4. **Choose chat model Claude 4 Sonnet**
5. Ask Copilot Chat to "optimize this code using agent mode" while the relevant route.ts is in the chat context
6. Make necessary adjustments, then reload the page and ensure it loads fast

---

## Task 2 - Intermediate Copilot Features

### 2.1 Advanced Chat Features: Custom Chat Modes

GitHub Copilot supports custom chat modes that create specialized AI assistants for specific tasks.

**Instructions:**
1. **Explore existing modes**:
   - Navigate to `.github/chatmodes/` directory 
   - Open `plan.chatmode.md` to see the configuration
   - In Copilot Chat, try using custom modes from the model dropdown

2. **Create Your Own Custom Mode**:
   - Create a new file: `.github/chatmodes/reviewer.chatmode.md`
   - Add the following content for a code review mode:

```markdown
# Code Reviewer

You are a thorough code reviewer focused on best practices and maintainability.

## Instructions

- Always use single quotes in TypeScript
- Check for proper error handling
- Ensure consistent code formatting
- Verify accessibility standards
- Look for performance optimizations
- Suggest improvements for readability
```

   - Use the new mode from the mode picker

**Why Custom Modes Are Powerful**:
- Domain-specific expertise and context
- Standardized workflows and best practices
- Reduced need for detailed prompting
- Team consistency in AI interactions

### 2.2 Advanced Prompt Management: Prompt Files

Prompt files allow you to create reusable, shareable prompts for consistent development practices.

**Instructions:**
1. **Explore existing prompt files**:
   - Navigate to `.github/prompts/` directory
   - Open Copilot Chat and add `testing-strategy.prompt.md` as context to help create comprehensive test suites

2. **Create a Custom Prompt File**:
   - Create a new prompt file: `.github/prompts/api-security.prompt.md`
   - Add the following content:
   ```markdown
   Secure REST API review:
   - Ensure all endpoints are protected by authentication and authorization
   - Validate all user inputs and sanitize data
   - Implement rate limiting and throttling
   - Implement logging and monitoring for security events
   ```
   - Test the prompt by adding it as context in Copilot Chat
3. **Add additional existing chat modes and prompt files**:
   - Explore and utilize other prompt files in the `.github/` directory to enhance your strategies and API security reviews, by following this link: https://github.com/github/awesome-copilot 

**Benefits of Prompt Files**:
- Team-wide consistency in AI interactions
- Reusable knowledge and context
- Better onboarding for new team members
- Standardized coding practices and patterns

### 2.3 Advanced Editing: Chat Rollback and Prompt Editing

The rollback feature allows you to edit previous prompts and reapply changes with different models or instructions.

**Instructions:**
1. **Practice Rollback Workflow**:
   - Ask Copilot Chat to create a simple NBA player card component
   - After receiving the response, click on your original prompt in the chat history
   - Edit the prompt to request additional features (e.g., "also add player statistics and hover effects")
   - Switch to a different model (e.g., from GPT-4.1 to Claude 4 Sonnet)
   - Apply the changes and observe how Copilot reverts and reapplies with the new context

2. **Advanced Rollback Scenarios**:
   - Test different AI models on the same prompt
   - Refine prompts iteratively without losing context
   - Compare code generation approaches
   - Fix issues by adjusting original instructions

**Why Rollback Is Powerful**:
- Non-linear development workflow
- Easy experimentation with different approaches
- Efficient prompt refinement
- Better model comparison and selection

---

## Task 3 - Copilot Agent Mode

### 3.1 Add Stadiums Feature using GitHub Copilot Agents

GitHub Copilot's agent mode can iterate on its own code, recognize errors, and fix them automatically.

**Instructions:**
1. Open GitHub Copilot Chat, choose agent mode
2. From the dropdown menu select Agent mode and Claude 4 Sonnet model
3. Include a prompt to generate a new Stadium feature:

```
Let's enhance this application by adding an NBA Stadiums page.
1. First, create a JSON file containing sample stadium data.
2. Then, set up a Next.js API route to serve the stadium data from the JSON file.
3. Build a React component that displays the stadium information as cards.
4. Add a navigation link to this new component in the main navigation page.
5. Use Tailwind CSS and ShadCN components to style the UI.
```

**💡 Agent Mode Prompt Guidelines:**
- **Be specific**: Include exact file paths (`/api/stadiums/route.ts`, `/src/app/(dashboard)/stadiums/page.tsx`)
- **Break into steps**: Number your requirements (1, 2, 3...) - agent mode works best with sequential tasks
- **Mention technology**: Specify "Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui"
- **Request iteration**: End with "Please implement this step by step and let me review each step"
- **Include context**: Reference existing project structure and data files

4. Review the output and monitor live changes in your codebase
5. Accept or reject each step suggested by the agent
6. Open the app to verify the Stadiums navigation tab and functionality

### 3.2 Add Login Screen using GitHub Copilot Vision

You can attach images and work with them directly in Copilot Chat.

**Instructions:**
1. Open Copilot Chat and select Claude 4 Sonnet model
2. Enable preview feature: chat.todoListTool.enable (Supported in VSCode version 1.103 and above)
3. Navigate to the image folder and attach `login.png` to your chat
4. Ask Copilot using agent mode: 
   ```
   Write a React component code based on login.png image.
   Track your progress with a todo list. 
   ```
5. Integrate the component into your application

---

## Task 4 - MCP Servers

### Prerequisites
- GitHub PAT (Personal Access Token)
- Azure DevOps PAT (Personal Access Token) (optional)

1. **Switch to Agent Mode**:
   - Open GitHub Copilot Chat and select Agent mode

2. **Add MCP Servers**:
   - Click the tools icon in the agent mode interface
   - Click "Add more tools"
   - Choose "Add MCP server..."
   - Select "Browse MCP Servers"
   - Add MCP servers: GitHub, Playwright, Azure DevOps & Atlassian

> Note: Review all GitHub MCP Server available tools at: https://github.com/github/github-mcp-server

### 4.1 Use Case: End-to-End Testing with Playwright MCP

**Goal:** Automatically test your NBA application's critical user flows without writing test code.

**Instructions:**
1. Ensure your app is running: `npm run dev`
2. In Agent mode with Playwright MCP enabled, ask:
   ```
   Using Playwright mcp, test the complete user flow:
   1. Navigate to http://localhost:3000
   2. Click on "NBA Scores" in the navigation
   3. Verify game scores are displayed
   4. Click on "Stadiums" 
   5. Verify stadium cards are rendered
   6. Take screenshots of each page
   7. Generate a test report with pass/fail results
   ```

3. Review the automated test execution and results
4. Ask Copilot to fix any failing tests or improve coverage

**Why This Is Powerful:**
- No manual testing needed
- Instant regression detection
- Visual proof of functionality
- AI handles complex selectors and timing automatically

---

## Task 5 - Github Copilot Coding Agent
1. **Create a new issue in this GitHub repository**:
Example:   
   - Title: `Create dark mode toggle for this web app`
   - Description: `Create a dark mode ability for this web app, it should be a toggle on the top right corner of the page`
2. **Assign the issue to copilot**
   - Click on "Assignees"
   - Select "Copilot"
3. **PR should be created automatically by Copilot**
   - You will be called to review once the PR is complete.

## Task 6 - Build Your Own MCP Server (Bonus) - New Project

Create a new project to build your own MCP server.

### 6.1 System Requirements
- Latest version of Node.js installed

### 6.2 Set Up Environment

**macOS/Linux:**
```bash
mkdir weather
cd weather
npm init -y
npm install @modelcontextprotocol/sdk zod
npm install -D @types/node typescript
mkdir src
touch src/index.ts
```

**Windows:**
```powershell
md weather
cd weather
npm init -y
npm install @modelcontextprotocol/sdk zod
npm install -D @types/node typescript
md src
new-item src\index.ts
```

### 6.3 Build Your Weather Server

Create a weather MCP server that provides weather alerts and forecasts using the National Weather Service API.

**Key Components:**
1. Server setup with MCP SDK
2. Helper functions for API requests
3. Tool implementation for weather data
4. Error handling and validation

**Test Your Server:**
1. Build: `npm run build`
2. Add to VS Code settings.json MCP configuration
3. Test in Agent mode with weather queries

---

## 🎓 Learning Path

1. **Start with Task 0** - Set up your environment and model selection
2. **Progress through Task 1 systematically** - Each sub-task builds on previous knowledge
3. **Continue with Task 2** - Intermediate features and advanced chat capabilities
4. **Experience Task 3** - Agent mode capabilities
5. **Try Bonus Tasks 4-5** - For advanced workflows and integrations

## 💡 Tips for Success

- 🤖 **Experiment freely** - Try different prompts and approaches
- 📝 **Read instructions carefully** - Each task builds on previous knowledge
- 🔄 **Practice iteratively** - Use Copilot to refine and improve your code
- 🗣️ **Ask Copilot questions** - It's your coding assistant and teacher
- 🎯 **Focus on learning** - The goal is to understand Copilot's capabilities

## 🆘 Troubleshooting

**Common Issues:**
- **Copilot not responding**: Check your authentication and license status
- **API errors**: Verify your environment variables and API keys
- **Build errors**: Run `npm install` to ensure all dependencies are installed
- **Port conflicts**: Try using a different port with `npm run dev -- -p 3001`

**Getting Help:**
- Use GitHub Copilot Chat to debug issues
- Check the console for error messages
- Refer to task-specific troubleshooting in each section

## 🤝 Contributing

This workshop is designed for learning GitHub Copilot. Feel free to:
- Experiment with the code
- Try different Copilot approaches
- Share your learning experiences
- Suggest improvements to the workshop content

## 📄 License

This project is for educational purposes as part of the GitHub Copilot workshop.

---

**Ready to begin?** Start with [Task 0](#task-0---choose-your-ai-model-for-github-copilot-chat) and begin your GitHub Copilot journey! 🚀
