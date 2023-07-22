class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let mid: ListNode = head;
  let end: ListNode = head;
  while (end && end.next) {
    mid = mid.next;
    end = end.next.next;
  }
  return mid;
}
