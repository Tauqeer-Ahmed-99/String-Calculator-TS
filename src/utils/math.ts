import {
  convertStringNumbersToActualNumbers,
  removeRestrictedNumbers,
  splitByCustomDelimiters,
} from "./helpers";

export const add = (numbers: string) => {
  if (numbers === "") return 0;

  const stringNumsToAdd = splitByCustomDelimiters(numbers);

  const actualNumbers = convertStringNumbersToActualNumbers(stringNumsToAdd);

  const numbersbetweenRange = removeRestrictedNumbers(actualNumbers);

  return numbersbetweenRange.reduce((prevVal, currVal) => prevVal + currVal, 0);
};
