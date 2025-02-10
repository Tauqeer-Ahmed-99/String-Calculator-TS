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

    expect(screen.queryByTestId("Result")).not.toBeInTheDocument();
  });

  it("Should have visble Result section after clicking Calculate Button.", () => {
    render(<StringCalculator />);

    const calculateButton = screen.getByTestId("calculate-btn");
    fireEvent.click(calculateButton);

    expect(screen.getByTestId("Result")).toBeInTheDocument();
  });

  it("Should not have Error section visible by default.", () => {
    render(<StringCalculator />);

    expect(screen.queryByTestId("Error")).not.toBeInTheDocument();
  });

  it("Should not have Error section visible if data is correct.", () => {
    render(<StringCalculator />);

    const inputElement = screen.getByTestId("main-input");
    fireEvent.change(inputElement, { target: { value: "1,2,3" } });

    const calculateButton = screen.getByTestId("calculate-btn");
    fireEvent.click(calculateButton);

    expect(screen.queryByTestId("Error")).not.toBeInTheDocument();
  });

  it("Should have visble Error section after clicking Calculate Button If error is thrown.", () => {
    render(<StringCalculator />);

    const inputElement = screen.getByTestId("main-input");
    fireEvent.change(inputElement, { target: { value: "1,2,a" } });

    const calculateButton = screen.getByTestId("calculate-btn");
    fireEvent.click(calculateButton);

    expect(screen.getByTestId("Error")).toBeInTheDocument();
  });
});
