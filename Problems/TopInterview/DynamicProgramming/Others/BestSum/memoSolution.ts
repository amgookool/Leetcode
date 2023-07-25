interface TestCase {
    targetSum: number;
    Numbers: number[];
    expected: number[];
}

const test_cases: { [key: number]: TestCase } = {
    1: {
        targetSum: 7,
        Numbers: [5, 3, 4, 7],
        expected: [7],
    },
    2: {
        targetSum: 8,
        Numbers: [2, 3, 5],
        expected: [5, 3],
    },
    3: {
        targetSum: 8,
        Numbers: [1, 4, 5],
        expected: [4, 4],
    },
    4: {
        targetSum: 100,
        Numbers: [1, 2, 5, 25],
        expected: [25, 25, 25, 25],
    },
};

// Standard Solution
// Time Complexity: O(n^m * m) where n is the length of numbers and m is the targetSum (height of the tree) because of the stack
// Space Complexity: O(m^2) where m is the targetSum (height of the tree) because of the stack
function bestSum(targetSum: number, Numbers: number[]): number[] | null {
    let bestCombination: number[] | null = null;
    //   Base Case
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    //   Recursive Case
    // Iterate over numbers and call howSum recursively with targetSum - number
    for (let num of Numbers) {
        const diff = targetSum - num;
        const result = bestSum(diff, Numbers);
        // If the result is not null, then we have a valid combination
        if (result !== null) {
            // Spread the result and add the current number to get the combination that adds to targetSum
            const combination = [...result, num];
            // If the current combination is better than the bestCombination, then we have a new bestCombination
            if (bestCombination === null || combination.length < bestCombination.length) {
                bestCombination = combination;
            }
        }
    }
    return bestCombination;
}

// Optimized Solution
// Time Complexity: O(n * m^2) where n is the length of numbers and m is the targetSum (height of the tree)
// Space Complexity: O(m^2) where m is the targetSum (height of the tree) because of the memo object and the stack
function OPbestSum(targetSum: number, Numbers: number[], memo: { [key: number]: number[] | null } = {}): number[] | null {
    let bestCombination: number[] | null = null;
    //  Base Case
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    // Recursive Case
    // Iterate over numbers and call howSum recursively with targetSum - number
    for (let num of Numbers) {
        const diff = targetSum - num;
        const result = OPbestSum(diff, Numbers, memo);

        // If the result is not null, then we have a valid combination
        if (result !== null) {
            // Spread the result and add the current number to get the combination that adds to targetSum
            const combination = [...result, num];
            // If the current combination is better than the bestCombination, then we have a new bestCombination
            if (bestCombination === null || combination.length < bestCombination.length) {
                bestCombination = combination;
            }
        }
    }
    // Store the bestCombination in the memo
    memo[targetSum] = bestCombination;
    return bestCombination;
}

// Tests
const case_ = test_cases[4];
const ans = OPbestSum(case_.targetSum, case_.Numbers);
console.log(ans);
