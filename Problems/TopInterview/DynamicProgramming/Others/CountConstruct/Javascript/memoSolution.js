"use strict";
const test_cases = {
    1: {
        targetString: "abcdef",
        wordBank: ["ab", "abc", "cd", "def", "abcd"],
        expected: 1,
    },
    2: {
        targetString: "purple",
        wordBank: ["purp", "p", "ur", "le", "purpl"],
        expected: 2,
    },
    3: {
        targetString: "skateboard",
        wordBank: ["bo", "rd", "ate", "t", "ska", "sk", "boar"],
        expected: 0,
    },
    4: {
        targetString: "enterapotentpot",
        wordBank: ["a", "p", "ent", "enter", "ot", "o", "t"],
        expected: 4,
    },
    5: {
        targetString: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
        wordBank: ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"],
        expected: 0,
    },
};
function countConstruct(target, wordbank) {
    let totalCount = 0;
    if (target === "")
        return 1;
    for (let word of wordbank) {
        let isPrefix = target.indexOf(word) === 0 ? true : false;
        if (isPrefix) {
            let suffix = target.slice(word.length);
            let numWaysForResult = countConstruct(suffix, wordbank);
            totalCount += numWaysForResult;
        }
    }
    return totalCount;
}
function OPcountConstruct(target, wordbank, memo = {}) {
    let totalCount = 0;
    if (target in memo)
        return memo[target];
    if (target === "")
        return 1;
    for (let word of wordbank) {
        let isPrefix = target.indexOf(word) === 0 ? true : false;
        if (isPrefix) {
            let suffix = target.slice(word.length);
            let numWaysForResult = OPcountConstruct(suffix, wordbank, memo);
            totalCount += numWaysForResult;
            memo[target] = totalCount;
        }
        else {
            memo[target] = 0;
        }
    }
    return totalCount;
}
const case_ = test_cases[5];
const ans = OPcountConstruct(case_.targetString, case_.wordBank);
console.log(`Computed Answer: ${ans}`);
console.log(`Expected Answer: ${case_.expected}`);
//# sourceMappingURL=memoSolution.js.map