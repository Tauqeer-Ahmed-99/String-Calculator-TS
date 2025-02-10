import { describe, expect, it } from "vitest";
import { convertStringNumbersToActualNumbers } from "../../src/utils/helpers";

describe("Helper Utils Test Suite", () => {
  it("Should convert string array into numbers array", () => {
    const input = ["1", "2", "3"];

    const result = convertStringNumbersToActualNumbers(input);

    expect(result).toEqual([1, 2, 3]);
  });

  it("Should throw an error if string contains non-numeric value", () => {
    const data = ["1", "2", "a"];

    expect(() => convertStringNumbersToActualNumbers(data)).toThrowError(
      "Given String Contains a NaN value 'a'."
    );
  });

  it("Should throw an Error if string array contains NaN char", () => {
    const input = ["1", "2", "a"];

    expect(() => convertStringNumbersToActualNumbers(input)).toThrowError(
      "Given String Contains a NaN value 'a'."
    );
  });

  it("Should throw an Error if string array contains negative numeric value char", () => {
    const input = ["1", "2", "-3", "-4"];

    expect(() => convertStringNumbersToActualNumbers(input)).toThrowError(
      "Negative numbers are not allowed '-3, -4'."
    );
  });
});
