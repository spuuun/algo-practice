/**
 * @param {number[]} nums
 * @return {number[]}
 */
// RESULTS - runtime: 61ms, memory: 42.2MB
var runningSum = function(nums) {
    let prev = 0;
    for (let i = 0; i < nums.length; i++) {
        prev = nums[i] += prev;
    }
    return nums;
};