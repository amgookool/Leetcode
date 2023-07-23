function plusOne(digits: number[]): number[] {
  return [1];

};

interface TestCase {
  input: number[];
  expected: number[];
}
const test_cases: { [key: number]: TestCase } = {
  1: { input: [1, 2, 3], expected: [1, 2, 4] },
  2: { input: [4, 3, 2, 1], expected: [4, 3, 2, 2] },
  3: { input: [9], expected: [1,0] },
};
