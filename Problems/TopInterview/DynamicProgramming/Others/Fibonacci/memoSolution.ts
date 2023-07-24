interface TestCase {
  n: number;
  result: number;
}

const test_cases: { [key: number]: TestCase } = {
  1: {
    n: 6,
    result: 8,
  },
  2: {
    n: 7,
    result: 13,
  },
  3: {
    n: 8,
    result: 21,
  },
  4: {
    n: 9,
    result: 34,
  },
  5: {
    n: 40,
    result: 102334155,
  },
  6: {
    n: 50,
    result: 12586269025,
  },
};

// Standard Solution
// Time Complexity: O(2^n) because each node has 2 children
// Space Complexity: O(n) because the depth of the tree is n
function fib(n: number): number {
  // Base Case
  if (n <= 2) {
    return 1;
  }
  let result = fib(n - 1) + fib(n - 2);
  return result;
}

// Optimized (Memoization) Solution
// Time Complexity: O(n) because each node is visited once
// Space Complexity: O(n) because the depth of the tree is n
function fibMemo(n: number, memo: { [key: number]: number } = {}) {
  // Base Cases
  if (n in memo) {
    // if n is in memo object
    return memo[n]; // return the fib value of n
  }
  if (n <= 2) {
    // if n is 1 or 2
    return 1;
  }
  // Recursive Case
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo); // store the fib value of n in memo object
  return memo[n]; // return the fib value of n
}

const Tcase = test_cases[6];

console.log(fibMemo(Tcase.n) === Tcase.result);
