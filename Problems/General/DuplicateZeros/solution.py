from typing import List

def duplicateZeros(arr: List[int]) -> None:
    """
    Do not return anything, modify arr in-place instead.
    """
    i = 0
    while i < len(arr):
        if arr[i] == 0:
            arr.insert(i, 0)
            arr.pop()
            i += 1
        i += 1

if __name__ == '__main__':
    input = [1,0,2,3,0,4,5,0]
    duplicateZeros(input)
    print(input)
