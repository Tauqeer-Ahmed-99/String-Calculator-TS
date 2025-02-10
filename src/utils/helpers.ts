export const splitByCustomDelimiters = (text: string) => {
  const delimiters = new RegExp(/[ ,\n]/); // add new delimiters here if needed

  return text.split(delimiters);
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
