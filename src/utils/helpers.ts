export const DEFAULT_DELIMITERS = ",|\n";
export const MAX_NUMBER = 1000;

export const splitByCustomDelimiters = (text: string): string[] => {
  const userProvidedDelimiter = getUserProvidedDelimiter(text);

  if (userProvidedDelimiter) {
    text = text.replace(`//${userProvidedDelimiter}`, "");
    return removeEmptyItems(
      text.split(new RegExp(DEFAULT_DELIMITERS + "|" + userProvidedDelimiter)) // delimiters are separated with |
    ) as string[];
  }

  return removeEmptyItems(
    text.split(new RegExp(DEFAULT_DELIMITERS))
  ) as string[];
};

export const getUserProvidedDelimiter = (text: string) => {
  return text.startsWith("//") ? text.charAt(2) : null; // char after '//' is delimiter
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
