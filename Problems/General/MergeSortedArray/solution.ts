/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  for (let i = m; i < nums1.length; i++) {
    if (nums1[i] === 0) {
      nums1[i] = nums2[n -1];
      n--;
    }
  }
  nums1.sort((a, b) => a - b);
}

let nums1: number[] = [1, 2, 3, 0, 0, 0];
let m: number = 3;
let nums2: number[] = [2, 5, 6];
let n: number = 3;

merge(nums1, m, nums2, n);

console.log(nums1);


