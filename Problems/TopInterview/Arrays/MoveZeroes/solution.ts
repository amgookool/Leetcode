/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {

 };

interface TestCase {
  input: number[];
  expected: number[];
}

const testCases: {[key:number] : TestCase} = {
  1: { input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
  2: { input: [0], expected: [0] },
};
