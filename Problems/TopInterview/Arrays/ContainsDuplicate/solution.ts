interface TestCase {
  input: number[];
  output: boolean;
}

function containsDuplicate(nums: number[]): boolean {
  return true;
}

const test_cases: { [key: number]: TestCase } = {
  1: {
    input: [1, 2, 3, 1],
    output: true,
  },
  2: {
    input: [1, 2, 3, 4],
    output: false,
  },
  3: {
    input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
    output: true,
  },
};

const case1 = test_cases[1];
const case2 = test_cases[2];
const case3 = test_cases[3];
