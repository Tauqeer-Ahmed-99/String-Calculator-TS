import {
  convertStringNumbersToActualNumbers,
  getUserProvidedDelimiter,
  removeRestrictedNumbers,
  splitByCustomDelimiters,
} from "./helpers";

export const calculate = (numbers: string) => {
  if (numbers === "") return 0;

  const stringNumsToAdd = splitByCustomDelimiters(numbers);

  const actualNumbers = convertStringNumbersToActualNumbers(stringNumsToAdd);

  const numbersbetweenRange = removeRestrictedNumbers(actualNumbers);

  const delimiter = getUserProvidedDelimiter(numbers);

  if (delimiter === "*") {
    return numbersbetweenRange.reduce(
      (prevVal, currVal) => prevVal * currVal,
      1
    );
  }

  return numbersbetweenRange.reduce((prevVal, currVal) => prevVal + currVal, 0);
};
