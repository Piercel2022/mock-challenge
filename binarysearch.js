/**
 * This function has the purpose to search a target number in the array
 * and use the binary search algorithm
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */


/**
 * Searches for the index of a target number in a rotated sorted array using the binary search algorithm.
 * @param {number[]} nums - The rotated sorted array.
 * @param {number} target - The target value to be found in the array.
 * @returns {number} - The index of the target value in the array if found, -1 otherwise.
 * @throws {Error} - If nums is not an array or target is not a number.
 */
const search = (nums, target) => {
    if (!Array.isArray(nums)) {
        throw new Error('nums must be an array');
    }
    if (typeof target !== 'number') {
        throw new Error('target must be a number');
    }

    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        const middle = Math.floor((low + high) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (nums[low] <= nums[middle]) {
            if (target >= nums[low] && target < nums[middle]) {
                high = middle;
            } else {
                low = middle + 1;
            }
        } else {
            if (target > nums[middle] && target <= nums[high]) {
                low = middle + 1;
            } else {
                high = middle;
            }
        }
    }

    return nums[low] === target ? low : -1;
};

// Example usage:
const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 0;
console.log(search(nums, target)); // Output: 4
/**input = nums = [4,5,6,7,0,1,2], target = 0
 output = 4
*/
nums = [4,5,6,7,0,1,2]
console.log(search(nums, 0));
console.log(search(nums, 3));