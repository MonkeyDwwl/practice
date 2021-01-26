/*
* 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
你可以按任意顺序返回答案。
示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：
输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]
* */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 方法1，根据两数之和可以算出另一个目标值，遍历数组
const twoSum = (nums, target) => {
  for (let i=0; i<nums.length; i++) {
    const diff = target - nums[i]
    if (nums.indexOf(diff) !== -1 && nums.indexOf(diff) !== i) {
      return [i, nums.indexOf(diff)]
    }
  }
  console.log('no answer')
};

// 哈希表
const twoSum2 = (nums, target) => {
  const theMap = new Map()
  // {数组值：index}
  for (let i=0; i<nums.length; i++) {
    const diff = target - nums[i]
    if ((theMap.get(diff) !== undefined) && theMap.get(diff) !== i) {
      return [theMap.get(diff), i]
    }
    theMap.set(nums[i], i)
  }
  console.log('no answer')
};

const test1 = [0,1,0,3,12]
const test2 = [2,7,11,15]
console.log('>>>>>>>>>>>>>>>>>>>>>>')
console.log(twoSum(test1, 4))
console.log(twoSum(test2, 9))
console.log('>>>>>>>>>>>>>>>>>>>>>>')

console.log('>>>>>>>>>>>>>>>>>>>>>>')
console.log(twoSum2(test2, 9))
console.log('>>>>>>>>>>>>>>>>>>>>>>')
