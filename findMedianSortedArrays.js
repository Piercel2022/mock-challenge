/**
 * Finds the median value of two sorted arrays by merging them into a single sorted array and then calculating the median.
 * @param {number[]} nums1 - The first sorted array.
 * @param {number[]} nums2 - The second sorted array.
 * @returns {number} - The median value of the merged array.
 */
const findMedianSortedArrays = function (nums1, nums2) {
    /**
     * Sorts an array using the merge sort algorithm.
     * @param {number[]} arr - The array to be sorted.
     * @returns {number[]} - The sorted array.
     */
    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    }

    /**
     * Merges two sorted arrays into a single sorted array.
     * @param {number[]} left - The first sorted array.
     * @param {number[]} right - The second sorted array.
     * @returns {number[]} - The merged sorted array.
     */
    function merge(left, right) {
        let result = [];
        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }

    /**
     * Calculates the median of an array.
     * @param {number[]} arr - The array.
     * @param {number} middleLeft - The index of the middle-left element.
     * @param {boolean} isEven - Indicates if the array length is even.
     * @returns {number} - The median value.
     */
    function getMedian(arr, middleLeft, isEven = false) {
        if (isEven) {
            return (arr[middleLeft] + arr[middleLeft + 1]) / 2;
        } else {
            return arr[middleLeft];
        }
    }

    const mergedArrays = mergeSort([...nums1, ...nums2]);
    const middleLeft = Math.floor(mergedArrays.length / 2);

    return getMedian(mergedArrays, middleLeft, mergedArrays.length % 2 === 0);
};

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
 nums1 = [1, 2, 4], nums2 = [6]
console.log(findMedianSortedArrays(nums1, nums2));