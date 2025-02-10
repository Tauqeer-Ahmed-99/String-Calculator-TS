import {
  convertStringNumbersToActualNumbers,
  splitByCustomDelimiters,
} from "./helpers";

export const add = (numbers: string) => {
  if (numbers === "") return 0;

  const stringNumsToAdd = splitByCustomDelimiters(numbers);

  const actualNumbers = convertStringNumbersToActualNumbers(stringNumsToAdd);

  return actualNumbers.reduce((prevVal, currVal) => prevVal + currVal, 0);
};
