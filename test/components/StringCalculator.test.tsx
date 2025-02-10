import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import StringCalculator from "../../src/components/StringCalculator";

describe("String Calculator UI Test Suite", () => {
  it("Should Test React UI Components Correctly", () => {
    // 1. Arrange the requirements data/mocks/inputs

    // 2. Generate the results
    render(<StringCalculator />);

    // 3. Assert the results
    expect(screen.getByTestId("main-heading")).toBeInTheDocument();
  });

  it("Should have an input field with placeholder 'Enter your string...' and Initial Value empty string.", () => {
    render(<StringCalculator />);

    expect(screen.getByTestId("main-input")).toBeInTheDocument();
    expect(screen.getByTestId("main-input")).toHaveAttribute(
      "placeholder",
      "Enter your stting..."
    );
    expect(screen.getByTestId("main-input")).toHaveAttribute("value", "");
  });

  it("Should have a button with text 'Calculate' and not disabled.", () => {
    render(<StringCalculator />);

    expect(screen.getByTestId("calculate-btn")).toBeInTheDocument();
    expect(screen.getByTestId("calculate-btn")).toHaveAttribute(
      "disabled",
      false
    );
  });

  it("Should not have Result section visible by default.", () => {
    render(<StringCalculator />);

    expect(screen.getByTestId("results")).not.toBeInTheDocument();
  });

  it("Should have visble Result section after clicking Calculate Button.", () => {
    render(<StringCalculator />);

    expect(screen.getByTestId("results")).not.toBeInTheDocument();
  });
});
