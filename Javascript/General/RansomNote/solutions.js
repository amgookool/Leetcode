"use strict";
function canConstruct(ransomNote, magazine) {
    const ransom_map = {};
    const magazine_map = {};
    for (const rNote_letter of ransomNote) {
        if (!ransom_map[rNote_letter]) {
            ransom_map[rNote_letter] = 1;
        }
        else {
            ransom_map[rNote_letter]++;
        }
    }
    for (const mag_letter of magazine) {
        if (!magazine_map[mag_letter]) {
            magazine_map[mag_letter] = 1;
        }
        else {
            magazine_map[mag_letter]++;
        }
    }
    for (const key in ransom_map) {
        if (!magazine_map[key] || magazine_map[key] < ransom_map[key]) {
            return false;
        }
    }
    return true;
}
;
const ransomNote = "aaa";
const magazine = "aabcde";
let ans = canConstruct(ransomNote, magazine);
console.log(ans);
//# sourceMappingURL=solutions.js.map