from typing import List
def removeElement(nums: List[int] =[3,2,2,3] , val: int = 3) -> int:
    nums[:] = [num for num in nums if num != val]
    return len(nums)

if __name__ == '__main__':
    removeElement()