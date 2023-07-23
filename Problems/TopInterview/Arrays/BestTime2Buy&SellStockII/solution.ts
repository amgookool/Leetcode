function maxProfit(prices: number[]): number {
  let profit: number = 0;
  for (let i: number = 0; i < prices.length; i++) {
    // if today price is less than tomorrow price, buy today and sell tomorrow
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i];
    }
  }
  return profit;
}

let test_cases = {
  1: { prices: [7, 1, 5, 3, 6, 4], expected: 7 },
  2: { prices: [1, 2, 3, 4, 5], expected: 4 },
  3: { prices: [7, 6, 4, 3, 1], expected: 0 },
};

const test_case1 = test_cases[1];
const test_case2 = test_cases[2];
const test_case3 = test_cases[3];

console.log(
  `Test Case 1:\n Computed: ${maxProfit(test_case1.prices)}\n Expected: ${
    test_case1.expected
  }`
);
console.log(
  `Test Case 2:\n Computed: ${maxProfit(test_case2.prices)}\n Expected: ${
    test_case2.expected
  }`
);
console.log(
  `Test Case 3:\n Computed: ${maxProfit(test_case3.prices)}\n Expected: ${
    test_case3.expected
  }`
);
