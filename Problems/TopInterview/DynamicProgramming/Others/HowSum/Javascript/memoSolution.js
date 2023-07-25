"use strict";
const test_cases = {
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
function howSum(targetSum, numbers) {
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;
    for (let num of numbers) {
        const subtraction = targetSum - num;
        const result = howSum(subtraction, numbers);
        if (result !== null)
            return [...result, num];
    }
    return null;
}
function OPhowSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;
    for (let num of numbers) {
        const subtraction = targetSum - num;
        const result = OPhowSum(subtraction, numbers, memo);
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
//# sourceMappingURL=memoSolution.js.map