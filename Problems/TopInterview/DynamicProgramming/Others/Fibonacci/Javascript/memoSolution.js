"use strict";
const test_cases = {
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
function fib(n) {
    if (n <= 2) {
        return 1;
    }
    let result = fib(n - 1) + fib(n - 2);
    return result;
}
function fibMemo(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 2) {
        return 1;
    }
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}
const Tcase = test_cases[6];
console.log(fibMemo(Tcase.n) === Tcase.result);
//# sourceMappingURL=memoSolution.js.map