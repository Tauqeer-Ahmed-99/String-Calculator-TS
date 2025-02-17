import { describe, expect, it } from "vitest";

import { calculate } from "../../src/utils/math";

describe("Math Test Suite", () => {
  it("Should add numbers and return results from a given string of numbers separated by comma", () => {
    const data = "1,2,3";

    const result = calculate(data);

    expect(result).toBe(6);
    expect(typeof result).toBe("number");
  });

  it("Should throw an error if string contains non-numeric value", () => {
    const data = "1,2,a";

    expect(() => calculate(data)).toThrowError(
      "Given String Contains a NaN value 'a'."
    );
  });

  it("Should return 0 if empty string is provided", () => {
    const data = "";

    const result = calculate(data);

    expect(result).toBe(0);
  });

  it("Should multiply if custom delimiters is *", () => {
    const input = "//*\n2*4";

    const result = calculate(input);

    expect(result).toBe(8);
  });
});
