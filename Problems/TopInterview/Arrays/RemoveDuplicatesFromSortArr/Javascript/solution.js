"use strict";
function removeDuplicates(nums) {
    let k = nums.length;
    for (let i = 0; i < k; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
            k--;
        }
    }
    return k;
}
;
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let size = removeDuplicates(nums);
console.log(size);
console.log(nums);
//# sourceMappingURL=solution.js.map