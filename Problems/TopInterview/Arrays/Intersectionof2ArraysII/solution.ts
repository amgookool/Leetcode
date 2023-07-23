function intersect(nums1: number[], nums2: number[]): number[] {
  return [1];
}

interface TestCase {
  input: number[];
  expected: number[];
}
let test_cases: { [key: number]: TestCase } = {
  1: { input: [1, 2, 2, 1], expected: [2, 2] },
  2: { input: [4, 9, 5], expected: [9, 4] || [4, 9] },
};
const case1 = test_cases[1].input;
const case2 = test_cases[2].input;
