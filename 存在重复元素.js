/*
* 给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
* */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 数组先排序，然后判断相邻的两个元素是否相等
const containsDuplicate1 = (nums) => {
  nums.sort((a, b) => a - b)
  for (let i=0; i<nums.length; i++) {
    if (nums[i] === nums[i+1]) {
      return true
    }
  }
  return false
};
// 使用hash结构
const containsDuplicate2 = (nums) => {
  const set = new Set()
  for (let i=0; i<nums.length; i++) {
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
  }
  return false
};

const test1 = [1,1,1,3,3,4,3,2,4,2]
const test2 = [1,2,3,4]
console.log('>>>>>>>>>>>>>>>>>>>>>>')
console.log(containsDuplicate1(test1))
console.log(containsDuplicate1(test2))
console.log('>>>>>>>>>>>>>>>>>>>>>>')

console.log('>>>>>>>>>>>>>>>>>>>>>>')
console.log(containsDuplicate2(test1))
console.log(containsDuplicate2(test2))
console.log('>>>>>>>>>>>>>>>>>>>>>>')
