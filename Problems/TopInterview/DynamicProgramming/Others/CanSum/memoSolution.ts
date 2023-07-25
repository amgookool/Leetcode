interface TestCase {
  targetSum: number;
  nums: number[];
  expected: boolean;
}

const test_cases: { [key: number]: TestCase } = {
  1: {
    targetSum: 7,
    nums: [5, 3, 4, 7],
    expected: true,
  },
  2: {
    targetSum: 7,
    nums: [2, 4],
    expected: false,
  },
  3: {
    targetSum: 8,
    nums: [2, 3, 5],
    expected: true,
  },
  4: {
    targetSum: 300,
    nums: [7, 14],
    expected: false,
  },
};

// Standard Solution
// Time Complexity: O(n^m) because of the for loop and the slice method which is O(n) and the call stack which is O(m) where m is the targetSum and n is the length of the nums array
// Space Complexity: O(m) because of the call stack where m is the targetSum
function canSum(targetSum: number, nums: number[]): boolean {
  // Base Case
  if (targetSum === 0) return true;
  if (targetSum <= 0) return false;

  // Recursive Case
  // Iterate through the nums array and subtract each number from the targetSum
  for (let num in nums) {
    const newTarget = targetSum - nums[num];
    if (canSum(newTarget, nums)) {
      return true;
    }
  }
  return false;
}

// Optimized Solution
// Time Complexity: O(n*m) because of the cache and the for loop and the slice method which is O(n) and the call stack which is O(m) where m is the targetSum and n is the length of the nums array
// Space Complexity: O(m) because of the call stack where m is the targetSum
function OPcanSum(
  targetSum: number,
  nums: number[],
  memo: { [key: number]: boolean } = {}
): boolean {
  // Base Case
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum <= 0) return false;

  // Recursive Case
  // Iterate through the nums array and subtract each number from the targetSum
  for (let num in nums) {
    const newTarget = targetSum - nums[num];
    if (OPcanSum(newTarget, nums, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

const case_: TestCase = test_cases[4];

const ans = OPcanSum(case_.targetSum, case_.nums);
console.log(ans);
