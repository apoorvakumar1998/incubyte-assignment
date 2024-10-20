export function add(numbers) {
  if (numbers === '' || numbers === undefined) return 0;

  if (!numbers.includes(',') && !numbers.includes('\n')) return +numbers;

  const numberArray = numbers.split(/[\n,]/);
  return numberArray.reduce((sum, num) => sum + +num, 0);
};