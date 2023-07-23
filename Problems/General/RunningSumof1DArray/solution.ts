function runningSum(nums: number[]): number[] {
  let iSum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    iSum += nums[i];
    nums[i] = iSum;
  }
  return nums;
}

let input: number[] = [1, 2, 3, 4];

let ans: number[] = runningSum(input);
console.log(ans)
