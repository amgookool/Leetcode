from typing import List


def intersect(nums1: List[int], nums2: List[int]) -> List[int]:
    # Sort nums1 and nums2
    # Iterate over nums1 and sort the array
    for i in range(len(nums1) - 1):
        for j in range(i+1, len(nums1)):
            if nums1[i] > nums1[j]:
                nums1[i], nums1[j] = nums1[j], nums1[i]
    # Iterate over nums2 and sort the array
    for i in range(len(nums2) - 1):
        for j in range(i+1, len(nums2)):
            if nums2[i] > nums2[j]:
                nums2[i], nums2[j] = nums2[j], nums2[i]

    i = 0
    j = 0
    ans = []
    # Iterate over nums1 and nums2
    while i < len(nums1) and j < len(nums2):
        # If nums1[i] == nums2[j], append to ans
        if nums1[i] == nums2[j]:
            ans.append(nums1[i])
            i += 1
            j += 1
        # If nums1[i] < nums2[j], increment i
        elif nums1[i] < nums2[j]:
            i += 1
        # If nums1[i] > nums2[j], increment j
        else:
            j += 1
    return ans


if __name__ == '__main__':
    test_cases = {
        1: ([1, 2, 2, 1], [2, 2]),
        2: ([4, 9, 5], [9, 4, 9, 8, 4])
    }
    case1 = test_cases[1]
    case2 = test_cases[2]

    ans = intersect(case2[0], case2[1])
    # print(ans)
