import { add } from "../utils/Calculator";


describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns the number itself if only one number is passed', () => {
    expect(add("1")).toBe(1);
  });

})