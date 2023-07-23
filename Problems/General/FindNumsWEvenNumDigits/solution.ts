function findNumbers(nums: number[]): number {
  let evenDigitCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let digitCount = 0;
    while (num > 0) {
      num = Math.floor(num / 10);
      digitCount++;
    }
    if (digitCount % 2 == 0) {
      evenDigitCount++;
    }
  }
  return evenDigitCount;
}

const input = [12, 345, 2, 6, 7896];
const output = findNumbers(input);
console.log(output);