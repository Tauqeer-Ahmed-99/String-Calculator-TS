export const add = (numbers: string) => {
  const numbersToAdd = numbers.split(",");

  return numbersToAdd.reduce((prevVal, currVal) => {
    const val = parseInt(currVal.trim());

    if (isNaN(val)) {
      throw new Error("Given String Contains a NaN value.");
    }

    return prevVal + val;
  }, 0);
};
