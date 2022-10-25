/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let m = {}
    for (let i = 0; i < nums.length; i++) {
        let x = target - nums[i]
        if (m.hasOwnProperty(x)) {
            return [m[x], i]
        }
        m[nums[i]] = i
    }
};