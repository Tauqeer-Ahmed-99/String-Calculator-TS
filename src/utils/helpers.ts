export const DEFAULT_DELIMITERS = ",|\n";
export const MAX_NUMBER = 1000;

export const splitByCustomDelimiters = (text: string): string[] => {
  const userProvidedDelimiter = getUserProvidedDelimiter(text);

  if (userProvidedDelimiter) {
    text = text.replace(`//${userProvidedDelimiter}\n`, ""); // remove delimiter with starting chars and linebreak

    const delimeters = getFormattedDelimeters(userProvidedDelimiter);

    return removeEmptyItems(
      text.split(new RegExp(DEFAULT_DELIMITERS + "|" + delimeters.join("|"))) // delimiters are separated with |
    ) as string[];
  }

  return removeEmptyItems(
    text.split(new RegExp(DEFAULT_DELIMITERS))
  ) as string[];
};

export const getFormattedDelimeters = (userProvidedDelimiter: string) => {
  // Extract multiple delimiters from format "//[delim1][delim2]\n"
  const delimiters = userProvidedDelimiter
    .match(/\[([^\]]+)\]/g)
    ?.map((d) => d.slice(1, -1)) || [userProvidedDelimiter];

  // Chars like - ^ $ * + ? . ( ) | [ ] { } has special meanings in reg exp
  // therefore need to escape them if using as delimiter
  // Escape special characters in the custom delimiter
  const escapedDelimiter = delimiters.map((delimeter) => {
    return delimeter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  });

  return escapedDelimiter;
};

export const getUserProvidedDelimiter = (text: string) => {
  const indexOfFirstLineBreak = text.indexOf("\n");
  // strong assumption: to have multiple char delimiter then first line must always have
  // delimiter only if starting with // i.e. providing delimeter

  return text.startsWith("//") ? text.slice(2, indexOfFirstLineBreak) : null; // char after '//' is delimiter
};

export const convertStringNumbersToActualNumbers = (
  numbers: string[]
): number[] => {
  const actualNumbers = numbers.map((strNum) => {
    const number = parseInt(strNum.trim());

    if (isNaN(number)) {
      throw new Error(`Given String Contains a NaN value '${strNum}'.`);
    }

    return number;
  });

  return removeEmptyItems(actualNumbers) as number[];
};

export const removeRestrictedNumbers = (numbers: number[]): number[] => {
  const numsSmallerThanZero: number[] = [];

  const actualNumbers = numbers.map((num) => {
    if (num < 0) {
      numsSmallerThanZero.push(num);
    }

    if (num > MAX_NUMBER) {
      return null;
    }

    return num;
  });

  if (numsSmallerThanZero.length > 0) {
    throw new Error(
      `Negative numbers are not allowed '${numsSmallerThanZero.join(", ")}'.`
    );
  }

  return removeEmptyItems(actualNumbers) as number[];
};

export const removeEmptyItems = (strNumArr: unknown[]) => {
  return strNumArr.filter((strNum) => strNum);
};
