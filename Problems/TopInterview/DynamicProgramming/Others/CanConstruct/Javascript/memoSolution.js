"use strict";
;
const test_cases = {
    1: {
        targetString: 'abcdef',
        wordBank: ["ab", "abc", "cd", "def", "abcd"],
        expected: true,
    },
    2: {
        targetString: 'skateboard',
        wordBank: ["bo", "rd", "ate", "t", "ska", "sk", "boar"],
        expected: false,
    },
    3: {
        targetString: '',
        wordBank: ["cat", "dog", "mouse"],
        expected: true,
    },
    4: {
        targetString: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
        wordBank: ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"],
        expected: false,
    },
    5: {
        targetString: '',
        wordBank: [],
        expected: true,
    }
};
function canConstruct(targetString, wordBank) {
    if (targetString === '')
        return true;
    for (let word of wordBank) {
        let isPrefix = targetString.indexOf(word) === 0 ? true : false;
        if (isPrefix) {
            let suffix = targetString.slice(word.length);
            let result = canConstruct(suffix, wordBank);
            if (result)
                return true;
        }
    }
    return false;
}
function OPcanConstruct(targetString, wordBank, memo = {}) {
    if (targetString in memo)
        return memo[targetString];
    if (targetString === '')
        return true;
    for (let word of wordBank) {
        let isPrefix = targetString.indexOf(word) === 0 ? true : false;
        if (isPrefix) {
            let suffix = targetString.slice(word.length);
            let result = OPcanConstruct(suffix, wordBank, memo);
            if (result) {
                memo[targetString] = true;
                return true;
            }
        }
    }
    memo[targetString] = false;
    return false;
}
const case_ = test_cases[4];
const ans = OPcanConstruct(case_.targetString, case_.wordBank);
console.log(`Computed: ${ans}\nExpected: ${case_.expected}\n`);
//# sourceMappingURL=memoSolution.js.map