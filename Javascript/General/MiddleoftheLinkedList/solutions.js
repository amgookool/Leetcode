"use strict";
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function middleNode(head) {
    let mid = head;
    let end = head;
    while (end && end.next) {
        mid = mid.next;
        end = end.next.next;
    }
    return mid;
}
//# sourceMappingURL=solutions.js.map