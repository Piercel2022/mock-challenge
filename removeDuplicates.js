/**
 * Removes duplicate elements from a given array of numbers and returns the length of the modified array.
 * The function modifies the input array in place and assumes that the input array is sorted in non-decreasing order.
 *
 * @param {number[]} nums - The array of numbers to remove duplicates from
 * @return {number} - The length of the modified array
 */
const removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0, j = 1;
    
    while (j < nums.length) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
        j++;
    }
    
    return i + 1;
};
