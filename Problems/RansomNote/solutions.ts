function canConstruct(ransomNote: string, magazine: string): boolean {
  //   Ransom Note: Iterate over letters and create a hash map of the letters and occurence: <key: char> : <count: int>
  let ransom_map: { [key: string]: number } = {};
  for (let ransom_letter of ransomNote) {
    // Check if letter(key) is not in the hashmap
    if (!ransom_map[ransom_letter]) {
      ransom_map[ransom_letter] = 1;
    } else {
      // if it is... increase the count by 1
      ransom_map[ransom_letter] += 1;
    }
  }

  //   Magazine: Iterate over letter and create a hash map of the letters and occurence <key: char> : <count: int>
  let magazine_map: { [key: string]: number } = {};
  for (let mag_letter of ransomNote) {
    // Check if letter(key) is not in the hashmap
    if (!ransom_map[mag_letter]) {
      ransom_map[mag_letter] = 1;
    } else {
      // if it is... increase the count by 1
      magazine_map[mag_letter] += 1;
    }
  }

  //   Check ransom map keys & count against the magazine map keys & count
  for (const key in ransom_map) {
    if (
      magazine_map[key] === undefined ||
      magazine_map[key] < ransom_map[key]
    ) {
      return false;
    }
  }
  return true;
}

const ransomNote = "aa";
const magazine = "aab";

let ans = canConstruct(ransomNote, magazine);
