"use strict";
const test_cases = {
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
function canSum(targetSum, nums) {
    if (targetSum === 0)
        return true;
    if (targetSum <= 0)
        return false;
    for (let num in nums) {
        const newTarget = targetSum - nums[num];
        if (canSum(newTarget, nums)) {
            return true;
        }
    }
    return false;
}
function OPcanSum(targetSum, nums, memo = {}) {
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return true;
    if (targetSum <= 0)
        return false;
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
const case_ = test_cases[4];
const ans = OPcanSum(case_.targetSum, case_.nums);
console.log(ans);
//# sourceMappingURL=memoSolution.js.map