import { describe, expect, it } from "vitest";

import { add } from "../../src/utils/math";

describe("Math Test Suite", () => {
  it("Should add numbers and return results from a given string of numbers separated by comma", () => {
    const data = "1,2,3";

    const result = add(data);

    expect(result).toBe(6);
    expect(typeof result).toBe("number");
  });

  it("Should throw an error if string contains non-numeric value", () => {
    const data = "1,2,a";

    expect(() => add(data)).toThrowError(
      "Given String Contains a NaN value 'a'."
    );
  });

  it("Should return 0 if empty string is provided", () => {
    const data = "";

    const result = add(data);

    expect(result).toBe(0);
  });
});
