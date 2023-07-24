"use strict";
const test_cases = {
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
function gridTraveler(m, n) {
    if (m === 1 && n === 1)
        return 1;
    if (m === 0 || n === 0)
        return 0;
    let travelRight = gridTraveler(m, n - 1);
    let travelDown = gridTraveler(m - 1, n);
    return travelRight + travelDown;
}
function MemogridTraveler(m, n, memo = {}) {
    const key = m + "," + n;
    if (key in memo)
        return memo[key];
    if (m === 1 && n === 1)
        return 1;
    if (m === 0 || n === 0)
        return 0;
    let travelRight = MemogridTraveler(m, n - 1, memo);
    let travelDown = MemogridTraveler(m - 1, n, memo);
    memo[key] = travelRight + travelDown;
    return memo[key];
}
const Tcase = test_cases[4];
const result = MemogridTraveler(Tcase.m, Tcase.n);
console.log(result);
console.assert(result === Tcase.result, `Expected ${Tcase.result} but got ${result}`);
//# sourceMappingURL=memoSolution.js.map