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
});
