/**Compare two arrays and return a new array with any items 
 * only found in one of the two given arrays, 
 * but not both. In other words, return the 
 * symmetric difference between the two arrays.

You can return the array with its elements in any order.

******************Example 1:******************
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]  code in javascript */

function diffArray(arr1, arr2) {
    var newArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        newArr.push(arr1[i]);
      }
    }
    for (let j = 0; j < arr2.length; j++) {
      if (!arr1.includes(arr2[j])) {
        newArr.push(arr2[j]);
      }
    }
    return [newArr.filter(x => arr1.includes(x)), newArr.filter(x => arr2.includes(x))];
  }

  console.log(diffArray([1,2,3],[2,4,6]))
  // Expected: [[1,3],[4,6]]