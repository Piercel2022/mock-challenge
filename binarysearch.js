/**
 * This function has the purpose to search a target number in the array
 * and use the binary search algorithm
 * @param {*} nums 
 * @param {*} target 
 * @returns 
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
        if (nums[middle] === target) return middle;

        switch (true) {
            case nums[low] <= nums[middle]:
                if (target >= nums[low] && target < nums[middle]) {
                    high = middle;
                }
                else {
                    low = middle + 1;
                }
                break;
            default:
                if (target > nums[middle] && target <= nums[high]) {
                    low = middle + 1;
                }
                else {
                    high = middle;
                }
                break;
        }
    }

    if (nums[low] === target) {
        return low;
    } else {
        return -1;
    }
};
/**input = nums = [4,5,6,7,0,1,2], target = 0
 output = 4
*/
nums = [4,5,6,7,0,1,2]
console.log(search(nums, 0));
console.log(search(nums, 3));