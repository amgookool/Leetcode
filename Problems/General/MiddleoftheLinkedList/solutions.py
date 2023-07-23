from typing import Optional

# Definition for singly-linked list.


class ListNode:
    def __init__(self, val=0, next_node=None):
        self.val = val
        self.next_node = next_node


def middleNode(head: Optional[ListNode]) -> Optional[ListNode]:
    last_node = mid_node = head
    while last_node and last_node.next_node is not None:
        mid_node = mid_node.next_node # move 1 step
        last_node = last_node.next_node.next_node # move 2 steps
    return mid_node