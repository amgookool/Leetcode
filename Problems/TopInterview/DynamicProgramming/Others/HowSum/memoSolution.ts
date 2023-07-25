interface TestCase {
  targetSum: number;
  Numbers: number[];
  expected: number[] | null;
}

const test_cases: { [key: number]: TestCase } = {
  1: {
    targetSum: 7,
    Numbers: [5, 3, 4, 7],
    expected: [3, 4],
  },
  2: {
    targetSum: 7,
    Numbers: [2, 4],
    expected: null,
  },
  3: {
    targetSum: 8,
    Numbers: [2, 3, 5],
    expected: [2, 2, 2, 2],
  },
  4: {
    targetSum: 300,
    Numbers: [7, 14],
    expected: null,
  },
};

// Standard Solution
// Time Complexity: O(n^m * m) where n is the length of numbers and m is the targetSum (height of the tree) because of the stack
// Space Complexity: O(m) where m is the targetSum (height of the tree) because of the stack
function howSum(targetSum: number, numbers: number[]): number[] | null {
  // Base Case
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  //   Iterate over numbers and call howSum recursively with targetSum - number
  for (let num of numbers) {
    const subtraction = targetSum - num;
    const result = howSum(subtraction, numbers);
    if (result !== null) return [...result, num];
  }
  return null;
}

// Optimized Solution
// Time Complexity: O(n * m^2) where n is the length of numbers and m is the targetSum (height of the tree)
// Space Complexity: O(m^2) where m is the targetSum (height of the tree) because of the memo object and the stack
function OPhowSum(
  targetSum: number,
  numbers: number[],
  memo: { [key: number]: number[] | null } = {}
): number[] | null {
  // Base Case
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  //   Iterate over numbers and call howSum recursively with targetSum - number
  for (let num of numbers) {
    const subtraction = targetSum - num;
    const result = OPhowSum(subtraction, numbers,memo);
    memo[targetSum] = result;
    if (result !== null) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

const case_ = test_cases[4];

const ans = OPhowSum(case_.targetSum, case_.Numbers);

console.log(ans);
