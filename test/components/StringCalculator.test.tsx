import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import StringCalculator from "../../src/components/StringCalculator";

describe("String Calculator UI Test Suite", () => {
  it("Should Test React UI Components Correctly", () => {
    // 1. Arrange the requirements data/mocks/inputs

    // 2. Generate the results
    render(<StringCalculator />);

    // 3. Assert the results
    expect(screen.getByTestId("main-heading")).toBeInTheDocument();
    expect(screen.getByTestId("main-heading")).toHaveTextContent(
      "String Calculator"
    );
  });

  it("Should have an input field with placeholder 'Enter your string...' and Initial Value empty string.", () => {
    render(<StringCalculator />);

    expect(screen.getByTestId("main-input")).toBeInTheDocument();
    expect(screen.getByTestId("main-input")).toHaveAttribute(
      "placeholder",
      "Enter your string..."
    );
    expect(screen.getByTestId("main-input")).toHaveAttribute("value", "");
  });

  it("Should have a button with text 'Calculate' and not disabled.", () => {
    render(<StringCalculator />);

    expect(screen.getByTestId("calculate-btn")).toBeInTheDocument();
    expect(screen.getByTestId("calculate-btn")).not.toHaveAttribute("disabled");
  });

  it("Should not have Result section visible by default.", () => {
    render(<StringCalculator />);

    expect(screen.queryByTestId("results")).not.toBeInTheDocument();
  });

  it("Should have visble Result section after clicking Calculate Button.", () => {
    render(<StringCalculator />);

    const calculateButton = screen.getByText("Calculate");
    fireEvent.click(calculateButton);

    expect(screen.getByTestId("results")).toBeInTheDocument();
  });
});
