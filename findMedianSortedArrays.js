const findMedianSortedArrays = function (nums1, nums2) {
    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
    }

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

    function getMedian(arr, middleLeft, isEven = false) {
        if (isEven) {
            return (arr[middleLeft] + arr[middleLeft + 1]) / 2;
        } else {
            return arr[middleLeft];
        }
    }

    const mergedArrays = mergeSort(nums1.concat(nums2));
    const middleLeft = Math.floor(mergedArrays.length / 2);

    return getMedian(mergedArrays, middleLeft, mergedArrays.length % 2 === 0);
};
const nums1 = [1, 2, 4], nums2 = [6]
console.log(findMedianSortedArrays(nums1, nums2));