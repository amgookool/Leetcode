from typing import List


def maxProfit(prices: List[int]) -> int:
    profits = []
    for i in range(len(prices)-1):
        # If today price is greater than the next day price, no opportunity to buy (continue to next day)
        if prices[i] > prices[i+1]:
            prices[i] = 0
        # If today price is less than the next day price, opportunity to buy and sell to make profit
        elif prices[i] < prices[i+1]:
            profits.append(prices[i+1] - prices[i])
            prices[i] = 0
            i += 1
        
    return sum(profits)



if __name__ == '__main__':
    test_cases = {
        1: ([7, 1, 5, 3, 6, 4], 7),
        2: ([1, 2, 3, 4, 5], 4),
        3: ([7, 6, 4, 3, 1], 0),
    }

    case1_input, case1_check = test_cases.get(1)
    case2_input, case2_check = test_cases.get(2)
    case3_input, case3_check = test_cases.get(3)

    case1_output = maxProfit(case1_input)

    assert case1_output == case1_check, \
        f'Case 1 failed: {case1_output} != {case1_check}'

    case2_output = maxProfit(case2_input)
    assert case2_output == case2_check, \
        f'Case 2 failed: {case2_output} != {case2_check}'

    case3_output = maxProfit(case3_input)
    assert case3_output == case3_check, \
        f'Case 3 failed: {case3_output} != {case3_check}'
