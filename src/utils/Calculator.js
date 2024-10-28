
export function add(numbers) {
  if (numbers === '' || numbers === undefined) {
    return 0;
  };

  // If the string doesnt contain , or new line return entered number
  if (!numbers.includes(',') && !numbers.includes('\n')) {
    return +numbers;
  };

  // Default delimiter
  let delimiter = ',';

  /**  If number starts with '//' ,then we have custom delimiter other than ','
   *   Identify the delimiter by getting the string after // till new line(\n) , remaining string is the required number
   *   then split the number with delimiter or new line and add it.
  */
  if (numbers.startsWith('//')) {
    let res = handleCustomDelimiter(numbers, delimiter);
    numbers = res.numbers;
    delimiter = res.delimiter;
  }

  let numberArray = numbers.split(new RegExp(`[${delimiter}\n]`));

  checkForNegativeNumbers(numberArray);

  numberArray = numberArray.map(i => +i);

  numberArray = handleMultipleInstance(numberArray);

  if (delimiter === '*') {
    return numberArray.reduce((sum, num) => sum * +num, 1);
  } else {
    return numberArray.reduce((sum, num) => {
      return sum + +num;
    }, 0);
  }
};

function handleCustomDelimiter(numbers, delimiter) {
  const delimiterEndIndex = numbers.indexOf('\n');
  delimiter = numbers.substring(2, delimiterEndIndex);
  numbers = numbers.substring(delimiterEndIndex + 1);
  return { numbers, delimiter };
}

function checkForNegativeNumbers(numberArray) {
  const negatives = numberArray.filter(num => +num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
  }
}

function handleMultipleInstance(numberArray) {
  const uniqueNumbers = [...new Set(numberArray)];
  let numbersWithMoreThanThreeInstance = [];
  uniqueNumbers.forEach(number => {
    const len = numberArray.filter(i => i === number).length;
    if (len >= 3) {
      numbersWithMoreThanThreeInstance.push(number);
    }
  });

  numbersWithMoreThanThreeInstance = numbersWithMoreThanThreeInstance.map(i => +i);

  numbersWithMoreThanThreeInstance.forEach(num => {
    const newArr = numberArray.filter(i => i !== num);
    newArr.push(num * num * num);
    numberArray = newArr;
  })

  return numberArray;
}