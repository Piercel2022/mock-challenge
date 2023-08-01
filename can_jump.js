//You are given an integer array `nums`. You are initially positioned at the array's **first index**,
// and each element in the array represents your maximum jump length at that position. *Return true if you can reach the last index, or false otherwise.*
//Input: nums = [2,3,1,1,4] , nums[0] = 2 and 3, nums[1] = 3 , 1, 1, 4 return true
//Output: true
//Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// if nums = [2, 2, 0, 0, 4]  return false

/**
 * Determines if it is possible to reach the last index of the given array.
 *
 * @param {number[]} nums - The array of non-negative integers representing the maximum jump length at each position.
 * @returns {boolean} - True if it is possible to reach the last index, false otherwise.
 */
function canJump(nums) {
    if (!Array.isArray(nums) || !nums.every(Number.isInteger)) {
        throw new Error('Input must be an array of integers');
    }
    
    if (nums.length === 0) return false;
    
    let lastJumpableIndex = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
      if (i + nums[i] >= lastJumpableIndex) {
        lastJumpableIndex = i;
      }
    }

    return lastJumpableIndex === 0;
}

  // Example usage:
  const nums1 = [2, 3, 1, 1, 4];
  console.log(canJump(nums1)); // Output: true
  
  const nums2 = [2, 2, 0, 0, 4];
  console.log(canJump(nums2));// return false