interface TestCase {
    targetString: string;
    wordBank: string[];
    expected: boolean;
};

const test_cases: { [key: number]: TestCase } = {
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
}

// Brute Force Solution
// Time Complexity: O(n^m * m) where n is the length of the wordBank and m is the length of the targetString
// Space Complexity: O(m^2)
function canConstruct(targetString: string, wordBank: string[]): boolean {
    // Base Case
    if (targetString === '') return true; // O(1)

    // Recursive Case
    // Iterate through the wordBank and check if the word is a prefix of the targetString
    for (let word of wordBank) { // O(n)
        let isPrefix: boolean = targetString.indexOf(word) === 0 ? true : false; // O(m)
        // If the word is a prefix of the targetString
        if (isPrefix) { // O(1)
            // get the suffix of the targetString
            let suffix: string = targetString.slice(word.length); // O(m)
            // Recursive call with the suffix
            let result: boolean = canConstruct(suffix, wordBank); // O(n^m * m)
            //  return true if the result is true
            if (result) return true; // O(1)
        }
    }
    // return false if the loop is finished
    return false; // O(1)
}

// Optimized Solution
// Time Complexity: O(n * m^2)
// Space Complexity: O(m^2)
function OPcanConstruct(targetString: string, wordBank: string[], memo: { [key: string]: boolean } = {}): boolean {
    // Base Case
    if (targetString in memo) return memo[targetString];
    if (targetString === '') return true;

    // Recursive Case
    // Iterate through the wordBank and check if the word is a prefix of the targetString
    for (let word of wordBank) {
        let isPrefix: boolean = targetString.indexOf(word) === 0 ? true : false;
        // If the word is a prefix of the targetString
        if (isPrefix) {
            // get the suffix of the targetString
            let suffix: string = targetString.slice(word.length);
            // Recursive call with the suffix
            let result: boolean = OPcanConstruct(suffix, wordBank, memo);
            //  return true if the result is true
            if (result) {
                memo[targetString] = true;
                return true;
            }
        }
    }
    // return false if the loop is finished
    memo[targetString] = false;
    return false;
}

const case_ = test_cases[4];
const ans = OPcanConstruct(case_.targetString, case_.wordBank);
console.log(`Computed: ${ans}\nExpected: ${case_.expected}\n`)