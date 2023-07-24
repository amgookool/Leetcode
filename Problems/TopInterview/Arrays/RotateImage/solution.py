from typing import List


# def rotate(matrix: List[List[int]]) -> None:
#     left, right = 0, len(matrix) - 1
#     while left < right:
#         bottom, top = right, left
#         # Iterate over the top row... do not include the last element
#         for i in range(right-left):
#             # put the top left element in a temp variable
#             temp = matrix[top][left + i]

#             # move the bottom left element to the top left
#             matrix[top][left + i] = matrix[bottom - i][left]

#             # move the bottom right element to the bottom left
#             matrix[bottom - i][left] = matrix[bottom][right - i]

#             # move the top right element to the bottom right
#             matrix[bottom][right - i] = matrix[top + i][right]

#             # move the temp element to the top right
#             matrix[top + i][right] = temp
#         left += 1
#         right -= 1

def rotate(matrix: List[List[int]]) -> None:
    n = len(matrix)
    # Transpose the matrix
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    # Reverse each row to get the 90-degree clockwise rotation
    for row in matrix:
        row.reverse()


def rotate(matrix) -> None:
    left = 0
    right = len(matrix)-1
    while left < right:
        for i in range(right-left):
            top, bottom = left, right
            topleft = matrix[top][left+i]

            matrix[top][left+i] = matrix[bottom-i][left]

            matrix[bottom-i][left] = matrix[bottom][right-i]

            matrix[bottom][right-i] = matrix[top+i][right]

            matrix[top+i][right] = topleft

        right -= 1
        left += 1


if __name__ == '__main__':
    test_cases = {
        1: ([[1, 2, 3], [4, 5, 6], [7, 8, 9]], [[7, 4, 1], [8, 5, 2], [9, 6, 3]]),
        2: ([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]], [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]),
    }
    case1 = test_cases[1]
    case2 = test_cases[2]

    c1_input, c1_ans = case1
    c2_input, c2_ans = case2

    rotate(c2_input)
    print(c2_input)
