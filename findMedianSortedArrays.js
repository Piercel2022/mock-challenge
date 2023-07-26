const findMedianSortedArrays = function (nums1, nums2) {
    // Merge and sort the arrays
    const mergedArrays = nums1.concat(nums2);
    mergedArrays.sort((a, b) => a - b);

    // Obtain the middle (middle-left if there are an even number of elements) point
    const middleLeft = Math.floor(mergedArrays.length / 2);

    // Check if there are an odd number of values
    if (mergedArrays.length % 2) {
        // Return the middle value
        return mergedArrays[middleLeft];
    } else {
        // Return the average of the middle 2 values
        return (mergedArrays[middleLeft] + mergedArrays[middleLeft + 1]) / 2;
    }
};
const nums1 = [1,3], nums2 = [2]
console.log(findMedianSortedArrays(nums1, nums2));