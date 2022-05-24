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

// RESULTS - runtime: 542 ms, memory: 51.8 MB
var addTwoNumbers = function(l1, l2) {
    let l1Arr = [];
    let l2Arr = [];
    
    while (l1.next !== null) {
        console.log('L1: ', l1)
        l1Arr.push(l1.val);
        console.log('L1ARR: ', l1Arr)
        l1 = l1.next;
    }
    while (l2.next !== null) {
        l2Arr.push(l2.val);
        l2 = l2.next;
    }
    
    l1Arr.push(l1.val);
    l2Arr.push(l2.val);
    
    const a = BigInt(l1Arr.reverse().join(''));
    const b = BigInt(l2Arr.reverse().join(''));
    const c = a + b;
    console.log('[A,B,C]: ', [a, b, c])
    
    let cStr = c.toString();
    cStr = cStr.split('');
    console.log('cStr', cStr);
    cStr = cStr.reverse();
    console.log('cStr', cStr);
    
    // let newLL;
    let node = new ListNode;
    let nextNode = new ListNode;
    for (let i = cStr.length - 1; i >= 0; i--) {
        let currentNode = new ListNode;
        if (i === cStr.length - 1) {
            currentNode.val = parseInt(cStr[i]);
            currentNode.next = null;
        }
        else {
            currentNode.val = parseInt(cStr[i]);
            currentNode.next = nextNode;
        }
        nextNode = currentNode;
    }
    return nextNode;
};