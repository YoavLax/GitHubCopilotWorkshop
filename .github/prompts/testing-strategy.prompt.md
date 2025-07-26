# Testing Strategy Prompt

This prompt helps create comprehensive test suites for the NBA Copilot workshop.

## Context
You are writing tests for an NBA statistics application built with Next.js 14, TypeScript, and React. Tests should be educational and demonstrate best practices to workshop attendees.

## Task
Create comprehensive test suites that cover functionality, edge cases, and user interactions.

### Testing Framework
- Use Jest as the test runner
- Follow testing-library best practices
- Write tests that focus on user behavior

### Test Structure
```javascript
describe('Component/Function Name', () => {
  describe('happy path scenarios', () => {
    test('should handle normal use case', () => {
      // Implementation
    });
  });

  describe('edge cases', () => {
    test('should handle empty data gracefully', () => {
      // Implementation
    });
  });

  describe('error scenarios', () => {
    test('should display error message on API failure', () => {
      // Implementation
    });
  });
});
```

### Test Categories
1. **Unit Tests**: Individual functions and utilities
2. **Component Tests**: React component behavior
3. **Integration Tests**: Multiple components working together
4. **API Tests**: API route functionality
5. **Accessibility Tests**: ARIA and keyboard navigation

### Testing Principles
- Test behavior, not implementation details
- Use meaningful test descriptions
- Include both positive and negative test cases
- Mock external dependencies appropriately
- Test accessibility features
- Verify error handling paths

### Common Test Scenarios
- **Loading States**: Component behavior during data fetching
- **Empty States**: Handling of empty or missing data
- **Error States**: Component response to errors
- **User Interactions**: Button clicks, form submissions
- **Data Validation**: Input validation and sanitization
- **Responsive Behavior**: Different screen sizes

### NBA-Specific Test Cases
- Player statistics calculations
- Team performance metrics
- Game score updates
- Schedule and fixture handling
- Statistical comparisons

### Best Practices
- Use data-testid sparingly (prefer accessible queries)
- Test from the user's perspective
- Keep tests focused and atomic
- Use descriptive test names
- Group related tests logically
- Mock network requests consistently

### Accessibility Testing
```javascript
test('should be accessible to screen readers', () => {
  render(<Component />);
  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByLabelText(/search players/i)).toBeInTheDocument();
});
```

Ensure tests serve as learning examples for workshop attendees and demonstrate modern testing practices in React applications.
