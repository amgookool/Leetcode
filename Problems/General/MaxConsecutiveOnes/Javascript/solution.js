function findMaxConsecutiveOnes(nums) {
    let count = 0;
    let max_value = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        }
        else {
            count = 0;
        }
        if (count > max_value) {
            max_value = count;
        }
    }
    return max_value;
}
;
const input = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(input));
//# sourceMappingURL=solution.js.map