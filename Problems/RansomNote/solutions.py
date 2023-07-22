# def canConstruct(ransomNote: str, magazine: str) -> bool:
#     from collections import Counter
#     # ransomNote_letter_map = {l: ransomNote.count(l) for l in ransomNote}
#     ransomNote_letter_map = Counter(ransomNote)

#     # magazine_letter_map = {l: magazine.count(l) for l in magazine}
#     magazine_letter_map = Counter(magazine)
#     for key in ransomNote_letter_map:
#         if key not in magazine_letter_map or magazine_letter_map[key] < ransomNote_letter_map[key]:
#             return False
#     return True

def canConstruct(ransomNote: str, magazine: str) -> bool:
    ransom_map = {}
    magazine_map = {}

    for rNote_letter in ransomNote:
        if rNote_letter not in ransom_map:
            ransom_map[rNote_letter] = 1
        else:
            ransom_map[rNote_letter] += 1

    for mag_letter in magazine:
        if mag_letter not in magazine_map:
            magazine_map[mag_letter] = 1
        else:
            magazine_map[mag_letter] += 1

    for key in ransom_map:
        if key not in magazine_map or magazine_map[key] < ransom_map[key]:
            return False
    return True


if __name__ == "__main__":
    ransomNote = "itwqbtcdprfsuprkrjkausiterybzncbmdvkgljxuekizvaivszowqtmrttiihervpncztuoljftlxybpgwnjb"
    magazine = "noclrnthqqganujpsabdjjrwfljribdbwoskcnmtxokkrlvcvsdcxlcqtmugwdedfebnveivovwmkcgncoqslqteecmnekxqkaguebafmmldaljsdhfjasdhljshfuweryhjfasdjfg"
    out = canConstruct(ransomNote=ransomNote, magazine=magazine)
    print(out)
