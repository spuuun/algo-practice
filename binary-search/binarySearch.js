/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// RESULTS - runtime: 90 ms, memory: 45.1 MB
 var binarySearch = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        const pivot = Math.floor((left + right) / 2);
        const current = nums[pivot];
        
        if (current === target) {
            return pivot;
        }
        else if (current < target) {
            // continue searching on right
            left = pivot + 1;
        }
        else {
            // continue searching on left
            right = pivot - 1;
        }
    }
    return -1;
};

// RESULTS - runtime: 115 ms, memory: 45.1 MB
var breadthFirst = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        } 
    }
    return -1;
};
