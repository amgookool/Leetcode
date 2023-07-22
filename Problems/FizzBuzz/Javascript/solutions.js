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
// const ans2 = fizzBuzz(5);
// console.log(ans2);
// const ans3 = fizzBuzz(15);
// console.log(ans3);
//# sourceMappingURL=solutions.js.map