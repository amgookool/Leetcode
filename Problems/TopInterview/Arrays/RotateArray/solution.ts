/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  let left = 0;
  let right = nums.length - 1;
  // Rotate the array to the right by k steps

  while (k > 0) {
    // Shift the array to the right by k steps where the last value becomes the first value
    let last = nums[right];
    for (let i = right; i > left; i--) {
        nums[i] = nums[i - 1];
    }
    nums[left] = last;
    k--;
  }
}

let test_cases = {
  1: { nums: [1, 2, 3, 4, 5, 6, 7], k: 3, expected: [5, 6, 7, 1, 2, 3, 4] },
  2: { nums: [-1, -100, 3, 99], k: 2, expected: [3, 99, -1, -100] },
};

const test_case1 = test_cases[1];
const test_case2 = test_cases[2];

rotate(test_case1.nums, test_case1.k);

console.log(test_case1.nums);
