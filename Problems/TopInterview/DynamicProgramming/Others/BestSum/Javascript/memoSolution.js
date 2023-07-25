"use strict";
const test_cases = {
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
function bestSum(targetSum, Numbers) {
    let bestCombination = null;
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;
    for (let num of Numbers) {
        const diff = targetSum - num;
        const result = bestSum(diff, Numbers);
        if (result !== null) {
            const combination = [...result, num];
            if (bestCombination === null || combination.length < bestCombination.length) {
                bestCombination = combination;
            }
        }
    }
    return bestCombination;
}
function OPbestSum(targetSum, Numbers, memo = {}) {
    let bestCombination = null;
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return [];
    if (targetSum < 0)
        return null;
    for (let num of Numbers) {
        const diff = targetSum - num;
        const result = OPbestSum(diff, Numbers, memo);
        if (result !== null) {
            const combination = [...result, num];
            if (bestCombination === null || combination.length < bestCombination.length) {
                bestCombination = combination;
            }
        }
    }
    memo[targetSum] = bestCombination;
    return bestCombination;
}
const case_ = test_cases[4];
const ans = OPbestSum(case_.targetSum, case_.Numbers);
console.log(ans);
//# sourceMappingURL=memoSolution.js.map