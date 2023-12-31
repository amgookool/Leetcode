interface TestCase {
    targetString: string;
    wordBank: string[];
    expected: number;
}

const test_cases: { [key: number]: TestCase } = {
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

// Brute Force Solution
// Time Complexity: O(n^m * m) where n is the length of the wordBank and m is the length of the targetString
// Space Complexity: O(m^2)
function countConstruct(target: string, wordbank: string[]): number {
    let totalCount = 0;

    // Base Case
    if (target === "") return 1;

    // Recursive Case
    // Iterate through the wordBank and check if the word is a prefix of the targetString
    for (let word of wordbank) {
        let isPrefix = target.indexOf(word) === 0 ? true : false;
        // If the word is a prefix of the targetString
        if (isPrefix) {
            // Get the suffix of the targetString
            let suffix = target.slice(word.length);
            // Recursively call countConstruct on the suffix
            let numWaysForResult = countConstruct(suffix, wordbank);
            // Add the number of ways to the totalCount
            totalCount += numWaysForResult;
        }
    }
    return totalCount;
}

// Optimized Solution
// Time Complexity: O(n * m^2) where n is the length of the wordBank and m is the length of the targetString
// Space Complexity: O(m^2)
function OPcountConstruct(
    target: string,
    wordbank: string[],
    memo: { [key: string]: number } = {}
): number {
    let totalCount = 0;

    // Base Case
    if (target in memo) return memo[target];
    if (target === "") return 1;

    // Recursive Case
    // Iterate through the wordBank and check if the word is a prefix of the targetString
    for (let word of wordbank) {
        let isPrefix = target.indexOf(word) === 0 ? true : false;
        // If the word is a prefix of the targetString
        if (isPrefix) {
            // Get the suffix of the targetString
            let suffix = target.slice(word.length);
            // Recursively call countConstruct on the suffix
            let numWaysForResult = OPcountConstruct(suffix, wordbank, memo);
            // Add the number of ways to the totalCount
            totalCount += numWaysForResult;
            // Memoize the result
            memo[target] = totalCount;
        }
        // If the word is not a prefix of the targetString
        else {
            memo[target] = 0;
        }
    }
    // Return the totalCount
    return totalCount;
}

// Test Cases
const case_ = test_cases[5];
const ans = OPcountConstruct(case_.targetString, case_.wordBank);

console.log(`Computed Answer: ${ans}`);
console.log(`Expected Answer: ${case_.expected}`);
