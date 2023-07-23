/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
    i++;
  }
}

let input: number[] = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(input);
console.log(input);
