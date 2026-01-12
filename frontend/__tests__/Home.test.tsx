import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../src/app/(dashboard)/page";

describe("Home", () => {
  it("renders the welcome message", () => {
    render(<Home />);
    expect(screen.getByText("Dear")).toBeInTheDocument();
    expect(
      screen.getByText(
        "We are thrilled to welcome you to our event and are honored to have you lead the Advanced GitHub Copilot Hands-on Workshop."
      )
    ).toBeInTheDocument();
  });
});
