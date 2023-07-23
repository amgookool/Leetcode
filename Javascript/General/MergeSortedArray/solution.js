"use strict";
function merge(nums1, m, nums2, n) {
    for (let i = m; i < nums1.length; i++) {
        if (nums1[i] === 0) {
            nums1[i] = nums2[n - 1];
            n--;
        }
    }
    nums1.sort((a, b) => a - b);
}
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
//# sourceMappingURL=solution.js.map