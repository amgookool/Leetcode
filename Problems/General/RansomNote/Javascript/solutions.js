function canConstruct(ransomNote, magazine) {
    const ransom_map = {};
    const magazine_map = {};
    // Count the occurrences of each character in the ransom note
    for (const rNote_letter of ransomNote) {
        if (!ransom_map[rNote_letter]) {
            ransom_map[rNote_letter] = 1;
        }
        else {
            ransom_map[rNote_letter]++;
        }
    }
    // Count the occurrences of each character in the magazine
    for (const mag_letter of magazine) {
        if (!magazine_map[mag_letter]) {
            magazine_map[mag_letter] = 1;
        }
        else {
            magazine_map[mag_letter]++;
        }
    }
    // Check if the ransom note can be constructed
    for (const key in ransom_map) {
        if (!magazine_map[key] || magazine_map[key] < ransom_map[key]) {
            return false;
        }
    }
    return true;
}
;
// True
// const ransomNote = "aa";
// const magazine = "aab";
// False
// const ransomNote = "a";
// const magazine = "b";
const ransomNote = "aaa";
const magazine = "aabcde";
let ans = canConstruct(ransomNote, magazine);
console.log(ans);
//# sourceMappingURL=solutions.js.map