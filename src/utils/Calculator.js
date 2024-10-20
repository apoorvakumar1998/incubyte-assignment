export function add(numbers) {
  if (numbers === '' || numbers === undefined) return 0;

  if (!numbers.includes(',') && !numbers.includes('\n')) return +numbers;

  const numberArray = numbers.split(/[\n,]/);
  const negatives = numberArray.filter(num => +num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
  }
  return numberArray.reduce((sum, num) => sum + +num, 0);
};