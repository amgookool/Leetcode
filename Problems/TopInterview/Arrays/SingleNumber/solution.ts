interface TestCase {
  input: number[];
  output: number;
}

function singleNumber(nums: number[]): number {
  let hashmap: { [key: number]: number } = {};
  let result = -1;
  for (let i = 0; i < nums.length; i++) {
    if (hashmap[nums[i]]) {
      hashmap[nums[i]]++;
    } else {
      hashmap[nums[i]] = 1;
    }
  }
  // Iterate over hash map keys and return the key with value 1
  for (let key in hashmap) {
    if (hashmap[key] === 1) {
      result = parseInt(key);
    }
  }
  return result;
}

let testCases: { [key: number]: TestCase } = {
  1: {
    input: [2, 2, 1],
    output: 1,
  },
  2: {
    input: [4, 1, 2, 1, 2],
    output: 4,
  },
  3: {
    input: [1],
    output: 1,
  },
};

const case1 = testCases[1];
const case2 = testCases[2];
const case3 = testCases[3];

let case1_out = singleNumber(case2.input);

console.log(case1_out);
