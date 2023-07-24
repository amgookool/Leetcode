"use strict";
function rotate(matrix) {
    const n = matrix.length;
    let left = 0;
    let right = n - 1;
    while (left < right) {
        for (let i = 0; i < right - left; i++) {
            const top = left;
            const bottom = right;
            const temp = matrix[top][left + i];
            matrix[top][left + i] = matrix[bottom - i][left];
            matrix[bottom - i][left] = matrix[bottom][right - i];
            matrix[bottom][right - i] = matrix[top + i][right];
            matrix[top + i][right] = temp;
        }
        left++;
        right--;
    }
}
function rotate2(matrix) {
    let left = 0;
    let right = matrix.length - 1;
    while (left < right) {
        for (let i = 0; i < right - left; i++) {
            let top = left;
            let bottom = right;
            let temp = matrix[top][left + i];
            matrix[top][left + i] = matrix[bottom - i][left];
            matrix[bottom - i][left] = matrix[bottom][right - i];
            matrix[bottom][right - i] = matrix[top + i][right];
            matrix[top + i][right] = temp;
        }
        left++;
        right--;
    }
}
const testCases = {
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
//# sourceMappingURL=solution.js.map