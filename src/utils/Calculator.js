export function add(numbers) {
  if (numbers === '' || numbers === undefined) return 0;

  // If the string doesnt contain , or 
  if (!numbers.includes(',') && !numbers.includes('\n')) return +numbers;

  // Default delimiter
  let delimiter = ',';
  /**  If number starts with '//' ,then we have custom delimiter other than ','
   *   Identify the delimiter by getting the string after // till new line(\n) , remaining string is the required number
   *   then split the number with delimiter or new line and add it.
  */
  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbers = numbers.substring(delimiterEndIndex + 1);
  }

  const numberArray = numbers.split(new RegExp(`[${delimiter}\n]`));

  const negatives = numberArray.filter(num => +num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
  }

  return numberArray.reduce((sum, num) => sum + +num, 0);
};