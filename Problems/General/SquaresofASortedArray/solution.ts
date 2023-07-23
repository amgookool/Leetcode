function sortedSquares(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++){
    nums[i] = nums[i] * nums[i];
  }
  nums.sort((a, b) => a - b); // ascending order
  return nums;
};

const input = [-4,-1,0,3,10];
const output = sortedSquares(input);
console.log(output);