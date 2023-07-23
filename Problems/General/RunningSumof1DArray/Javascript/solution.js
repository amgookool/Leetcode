function runningSum(nums) {
    let iSum = 0;
    for (let i = 0; i < nums.length; i++) {
        iSum += nums[i];
        nums[i] = iSum;
    }
    return nums;
}
let input = [1, 2, 3, 4];
let ans = runningSum(input);
console.log(ans);
//# sourceMappingURL=solution.js.map