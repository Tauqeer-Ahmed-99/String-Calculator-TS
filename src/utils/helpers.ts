export const splitByCustomDelimiters = (text: string) => {
  const delimiters = ",|\n";

  const userProvidedDelimiter = getUserProvidedDelimiter(text);

  if (userProvidedDelimiter) {
    text = text.replace(`//${userProvidedDelimiter}`, "");
    return removeEmptyChars(
      text.split(new RegExp(delimiters + "|" + userProvidedDelimiter)) // delimiters are separated with |
    );
  }

  return removeEmptyChars(text.split(new RegExp(delimiters)));
};

export const removeEmptyChars = (strNumArr: string[]) => {
  return strNumArr.filter((strNum) => strNum);
};

export const getUserProvidedDelimiter = (text: string) => {
  return text.startsWith("//") ? text.charAt(2) : null; // char after '//' is delimiter
};

export const convertStringNumbersToActualNumbers = (numbers: string[]) => {
  const numsSmallerThanZero: number[] = [];

  const actualNumbers = numbers.map((strNum) => {
    const number = parseInt(strNum.trim());

    if (isNaN(number)) {
      throw new Error(`Given String Contains a NaN value '${strNum}'.`);
    }

    if (number < 0) {
      numsSmallerThanZero.push(number);
    }

    return number;
  });

  if (numsSmallerThanZero.length > 0) {
    throw new Error(
      `Negative numbers are not allowed '${numsSmallerThanZero.join(", ")}'.`
    );
  }

  return actualNumbers;
};
