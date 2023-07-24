interface TestCase {
  input: number[][];
  output: number[][];
}
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const n: number = matrix.length;
  let left: number = 0;
  let right: number = n - 1;
  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      const top: number = left;
      const bottom: number = right;
      // Save top-left value to temp
      const temp: number = matrix[top][left + i];
      // Move bottom left value to top left position
      matrix[top][left + i] = matrix[bottom - i][left];
      // Move bottom right value to bottom left position
      matrix[bottom - i][left] = matrix[bottom][right - i];
      // Move top right value to bottom right position
      matrix[bottom][right - i] = matrix[top + i][right];
      // Move top left value to top right position
      matrix[top + i][right] = temp;
    }
    left++;
    right--;
  }
}

function rotate2(matrix: number[][]): void {
  let left = 0;
  let right = matrix.length - 1;
  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      let top = left;
      let bottom = right;
      // Save top-left value to temp
      let temp: number = matrix[top][left + i];
      //   move bottom left value to top left position
      matrix[top][left + i] = matrix[bottom - i][left];
      //   move bottom right value to bottom left position
      matrix[bottom - i][left] = matrix[bottom][right - i];
      //   move top right value to bottom right position
      matrix[bottom][right - i] = matrix[top + i][right];
      //   move top left value to top right position
      matrix[top + i][right] = temp;
    }
    left++;
    right--;
  }
}

const testCases: { [key: number]: TestCase } = {
  1: {
    input: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    output: [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
  },
  2: {
    input: [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ],
    output: [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ],
  },
};

const case1 = testCases[1];

rotate2(case1.input);

console.log(case1.input);
