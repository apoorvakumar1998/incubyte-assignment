import { add } from "../utils/Calculator";


describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns the number itself if only one number is passed', () => {
    expect(add("1")).toBe(1);
  });

  test('returns the sum of two comma-separated numbers', () => {
    expect(add("1,5")).toBe(6);
  });

  test('handles multiple numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test('handles new lines as separators', () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test('throws an error for negative numbers', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });

  test('throws an error with all negative numbers in the message', () => {
    expect(() => add("-1,-2,3")).toThrow("negative numbers not allowed: -1,-2");
  });

  test('supports custom delimiters', () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });

})