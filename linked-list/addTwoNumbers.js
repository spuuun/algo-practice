/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// RESULTS - runtime: 125 ms, memory: 47.4 MB
var addTwoNumbers = function(l1, l2) {
    let l1Arr = [];
    let l2Arr = [];
    
    while (l1.next !== null) {
        l1Arr.push(l1.val);
        l1 = l1.next;
    }
    while (l2.next !== null) {
        l2Arr.push(l2.val);
        l2 = l2.next;
    }
    
    l1Arr.push(l1.val);
    l2Arr.push(l2.val);
    
    let c = ((BigInt(l1Arr.reverse().join(''))) + (BigInt(l2Arr.reverse().join(''))))
        .toString()
        .split('')
        .reverse();
   
    let nextNode;    

    for (let i = c.length - 1; i >= 0; i--) {
        let currentNode = new ListNode;
        if (i === c.length - 1) {
            currentNode.val = parseInt(c[i]);
            currentNode.next = null;
        }
        else {
            currentNode.val = parseInt(c[i]);
            currentNode.next = nextNode;
        }
        nextNode = currentNode;
    }

    return nextNode;
};