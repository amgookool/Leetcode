function maximumWealth(accounts) {
    let highest = 0;
    // Iterate over each customer
    for (let i = 0; i < accounts.length; i++) {
        let total = 0;
        // Iterate over each bank to get value and add to total
        for (let j = 0; j < accounts[i].length; j++) {
            total += accounts[i][j];
        }
        if (total >= highest) {
            highest = total;
        }
    }
    return highest;
}
let accounts_input1 = [
    [1, 2, 3],
    [3, 2, 1],
];
let accounts_input2 = [
    [1, 5],
    [7, 3],
    [3, 5],
];
let accounts_input3 = [
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
];
const ans1 = maximumWealth(accounts_input1);
const ans2 = maximumWealth(accounts_input2);
const ans3 = maximumWealth(accounts_input3);
console.log(ans1);
console.log(ans2);
console.log(ans3);
//# sourceMappingURL=solutions.js.map