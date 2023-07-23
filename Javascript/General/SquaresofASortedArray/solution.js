"use strict";
function sortedSquares(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }
    nums.sort((a, b) => a - b);
    return nums;
}
;
const input = [-4, -1, 0, 3, 10];
const output = sortedSquares(input);
console.log(output);
//# sourceMappingURL=solution.js.map