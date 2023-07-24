interface TestCase {
  m: number;
  n: number;
  result: number;
}

const test_cases: { [key: number]: TestCase } = {
  1: {
    m: 2,
    n: 3,
    result: 3,
  },
  2: {
    m: 3,
    n: 2,
    result: 3,
  },
  3: {
    m: 3,
    n: 3,
    result: 6,
  },
  4: {
    m: 18,
    n: 18,
    result: 2333606220,
  },
};

// Standard Recursive Solution
// Time Complexity: O(2^(m+n))
// Space Complexity: O(m+n)
function gridTraveler(m: number, n: number): number {
  // m = rows, n = columns
  // Base Case
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  // Recursive Case
  let travelRight = gridTraveler(m, n - 1);
  let travelDown = gridTraveler(m - 1, n);
  return travelRight + travelDown;
}

// Optimized Recursive Solution
// Time Complexity: O(m*n)
// Space Complexity: O(m+n)
function MemogridTraveler(
  m: number,
  n: number,
  memo: { [key: string]: number } = {}
): number {
  // Create a key from m and n
  const key: string = m + "," + n;

  // Base Case
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  // Recursive Case
  let travelRight = MemogridTraveler(m, n - 1, memo);
  let travelDown = MemogridTraveler(m - 1, n, memo);
  memo[key] = travelRight + travelDown;
  
  return memo[key];
}

const Tcase = test_cases[4];
const result = MemogridTraveler(Tcase.m, Tcase.n);

console.log(result);

// Assert computed result with expected result
console.assert(
  result === Tcase.result,
  `Expected ${Tcase.result} but got ${result}`
);
