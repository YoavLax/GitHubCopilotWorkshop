---
name: WebApp Testing
description: Automated UI testing for web applications using Playwright with comprehensive test coverage and reporting
---

# WebApp Testing Skill

This skill enables automated UI testing for web applications using Playwright. It helps ensure that critical user flows work correctly and provides visual proof of functionality through screenshots and detailed test reports.

## When to Use This Skill

Use this skill when you need to:
- Test complete user flows and interactions in web applications
- Verify that UI components render correctly
- Ensure navigation between pages works as expected
- Capture screenshots for visual verification
- Generate comprehensive test reports with pass/fail results
- Perform regression testing after code changes
- Validate form submissions and data entry workflows

## Prerequisites

- Web application must be running and accessible (e.g., on localhost or a test environment)
- Playwright MCP server should be enabled in Agent mode
- Basic understanding of the application's user flows

## How to Use

When testing a web application, provide clear instructions about:

1. **The URL to test**: Specify the exact URL of your running application
2. **User flow steps**: List the sequence of actions to perform (e.g., "Click on 'NBA Scores'", "Verify game scores are displayed")
3. **Expected outcomes**: What should be visible or happen at each step
4. **Screenshot requirements**: Which pages or states to capture visually

### Example Usage in Copilot Chat

```
Using Playwright MCP and the webapp-testing skill, test the complete user flow:
1. Navigate to http://localhost:3000
2. Click on "NBA Scores" in the navigation
3. Verify game scores are displayed
4. Click on "Stadiums"
5. Verify stadium cards are rendered
6. Take screenshots of each page
7. Generate a test report with pass/fail results
```

## Best Practices

- **Start with the application running**: Ensure your dev server is active before testing
- **Test critical paths first**: Focus on the most important user journeys
- **Use descriptive names**: Name your test steps clearly for better reporting
- **Capture visual proof**: Take screenshots of important states
- **Handle timing**: Allow time for dynamic content to load
- **Test edge cases**: Include error states and boundary conditions

## Benefits

- **No manual testing needed**: Automate repetitive testing tasks
- **Instant regression detection**: Quickly identify broken functionality
- **Visual documentation**: Screenshots provide proof of working features
- **AI-powered reliability**: Copilot handles complex selectors and timing automatically
- **Comprehensive reports**: Get detailed pass/fail results for all test steps

## Common Test Scenarios

### Navigation Testing
```
Test that all navigation links work:
1. Visit homepage
2. Click each navigation item
3. Verify correct page loads
4. Take screenshots
```

### Form Testing
```
Test form submission:
1. Navigate to form page
2. Fill in required fields
3. Click submit button
4. Verify success message or redirect
5. Check that data appears correctly
```

### Interactive Features
```
Test interactive components:
1. Navigate to feature page
2. Trigger interactive elements (buttons, toggles, filters)
3. Verify state changes
4. Confirm visual feedback
```

## Troubleshooting

If tests fail:
- Verify the application is running and accessible
- Check that element selectors are correct
- Ensure sufficient wait times for dynamic content
- Review browser console for JavaScript errors
- Ask Copilot to fix failing tests with specific error messages
