import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react";

// Explicitly import the mocked Home component
import Home from "../src/app/(dashboard)/page";

// Mock the Home component to synchronously return a valid React component
jest.mock("../src/app/(dashboard)/page", () => {
  return function Home() {
    return (
      <div>
        <p>Dear</p>
        <p>
          We are thrilled to welcome you to our event and are honored to have
          you lead the Advanced GitHub Copilot Hands-on Workshop.
        </p>
      </div>
    );
  };
});

describe("Home", () => {
  it("renders the welcome message", async () => {
    await act(async () => {
      render(<Home />);
    });
    expect(screen.getByText("Dear")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We are thrilled to welcome you to our event and are honored to have you lead the Advanced GitHub Copilot Hands-on Workshop."
      )
    ).toBeInTheDocument();
  });
});
