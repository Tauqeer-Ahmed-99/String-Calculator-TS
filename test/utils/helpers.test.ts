import { describe, expect, it } from "vitest";
import {
  convertStringNumbersToActualNumbers,
  getUserProvidedDelimiter,
  removeEmptyChars,
  splitByCustomDelimiters,
} from "../../src/utils/helpers";

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

  it("Should remove empty chars from an array", () => {
    const input = ["1", "", "2"];

    const result = removeEmptyChars(input);

    expect(result).toEqual(["1", "2"]);
  });

  it("Should split the given text when //<custom-delimiter> is provide by the <cutom-delimiter>", () => {
    const input = "//;\n;1;2;3,4";
    // the implemented logic is that if user provided the delimiter
    // than still split the numbers by coma and linebreaks also

    const result = splitByCustomDelimiters(input);

    expect(result).toEqual(["1", "2", "3", "4"]);
  });

  it("Should return user provided delimiter if initial string has '//'", () => {
    const input = "//;\n1;3;4";

    const result = getUserProvidedDelimiter(input);

    expect(result).toBe(";");
  });
});
