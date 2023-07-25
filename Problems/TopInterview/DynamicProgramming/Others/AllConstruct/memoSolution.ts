interface TestCase {
    targetString: string;
    wordBank: string[];
}

const test_cases: { [key: number]: TestCase } = {
    1: {
        targetString: "abcdef",
        wordBank: ["ab", "abc", "cd", "def", "abcd", "ef", "c"],
    },
    2: {
        targetString: "purple",
        wordBank: ["purp", "p", "ur", "le", "purpl"],
    },
    3: {
        targetString: "skateboard",
        wordBank: ["bo", "rd", "ate", "t", "ska", "sk", "boar"],
    },
    4: {
        targetString: "enterapotentpot",
        wordBank: ["a", "p", "ent", "enter", "ot", "o", "t"],
    },
    5: {
        targetString: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
        wordBank: ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"],
    },
    6: {
        targetString: "",
        wordBank: ["cat", "dog", "mouse"],
    },
};

// Brute Force Solution
// Time Complexity: O(n^m * m) where n is the length of the wordBank and m is the length of the targetString
// Space Complexity: O(m)
function allConstruct(target: string, wordBank: string[]): string[][] {
    // Base Case
    if (target === "") return [[]];

    // Recursive Case
    // Iterate through the wordBank and check if the word is a prefix of the targetString
    let result: string[][] = [];
    for (let word of wordBank) {
        let isPrefix = target.indexOf(word) === 0 ? true : false;
        // If the word is a prefix of the targetString
        if (isPrefix) {
            // Get the suffix of the targetString
            let suffix = target.slice(word.length);
            // Recursively call countConstruct on the suffix
            let suffixWays = allConstruct(suffix, wordBank);
            // Add the word to the beginning of each suffix way
            let targetWays = suffixWays.map(way => [word, ...way]);
            // Add the targetWays to the result
            result.push(...targetWays);
        }
    }
    return result;
}



// Optimized Solution
// Time Complexity: O(n * m^2) where n is the length of the wordBank and m is the length of the targetString
// Space Complexity: O(m^2)
function OPallConstruct(target: string, wordBank: string[], memo: { [key: string]: string[][] } = {}): string[][] {
    // Base Case
    if (target in memo) return memo[target];
    if (target === "") return [[]];

    // Recursive Case
    // Iterate through the wordBank and check if the word is a prefix of the targetString
    let result: string[][] = [];
    for (let word of wordBank) {
        let isPrefix = target.indexOf(word) === 0 ? true : false;
        // If the word is a prefix of the targetString
        if (isPrefix) {
            // Get the suffix of the targetString
            let suffix = target.slice(word.length);
            // Recursively call countConstruct on the suffix
            let suffixWays = OPallConstruct(suffix, wordBank, memo);
            // Add the word to the beginning of each suffix way
            let targetWays = suffixWays.map(way => [word, ...way]);
            // Add the targetWays to the result
            result.push(...targetWays);
            // Add the result to the memo
            memo[target] = result;
        }
    }
    // Add the result to the memo
    memo[target] = result;
    return result;
}





// Test Cases
const case_ = test_cases[6];
const ans = OPallConstruct(case_.targetString, case_.wordBank);

console.log(ans);

