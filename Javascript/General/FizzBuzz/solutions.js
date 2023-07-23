"use strict";
function fizzBuzz(n) {
    let ans = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            ans.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            ans.push("Fizz");
        }
        else if (i % 5 === 0) {
            ans.push("Buzz");
        }
        else {
            ans.push(i.toString());
        }
    }
    return ans;
}
const ans1 = fizzBuzz(3);
console.log(ans1);
//# sourceMappingURL=solutions.js.map