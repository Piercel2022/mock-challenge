function twoSum(nums, target) 
{
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numObj[complement] !== undefined) {
      return [numObj[complement], i];
    }
    numObj[nums[i]] = i;
  }
}
nums = [2, 7, 11, 15]
console.log(twoSum(nums, 9))
//output [0, 1], because nums[0] + nums[1] = 9