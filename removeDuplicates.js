/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    
if(nums.length === 0) return 0;
let i = 0, j = 1;

while(j < nums.length ){
    if(nums[j] !== nums[i]){
        i++
        nums[i] = nums[j]
        j++
    }else j++
}
return i + 1
};
