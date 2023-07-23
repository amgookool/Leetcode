"use strict";
function duplicateZeros(arr) {
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
let input = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(input);
console.log(input);
//# sourceMappingURL=solution.js.map