/*
* 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
* */

/**
 * @param {number[]} nums
 * @return {number}
 */
// 先数组排序，然后判断相邻元素
const singleNumber1 = (nums) => {
  nums.sort((a, b) => a - b)
  for (let i=0; i<nums.length; i++) {
    if (i === 0 && nums[0] !== nums[1]){
      return nums[0]
    }
    if (i === nums.length && nums[i] !== nums[i-1]){
      return nums[i]
    }
    if ((nums[i] !== nums[i-1]) && (nums[i] !== nums[i+1])){
      return nums[i]
    }
  }
  console.log('not found')
};

// 哈希表
const singleNumber2 = (nums) => {
  let set = new Set()
  for (let i = 0; i< nums.length; i++) {
    if (set.has(nums[i])){
      set.delete(nums[i])
      continue
    }
    set.add(nums[i])
  }
  return [...set][0]
};

/* 位运算位运算中的异或运算 XOR，主要因为异或运算有以下几个特点：
    一个数和 0 做 XOR 运算等于本身：a⊕0 = a
    一个数和其本身做 XOR 运算等于 0：a⊕a = 0
    XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
    故而在以上的基础条件上，将所有数字按照顺序做抑或运算，最后剩下的结果即为唯一的数字
    时间复杂度：O(n)O(n)，空间复杂度：O(1)O(1)
 */

const singleNumber3 = (nums) => {
  let res = 0
  for (let i=0; i<nums.length; i++) {
    res = res ^ nums[i]
  }
  return res
};

const test1 = [1,1,3,3,4,4,2]
const test2 = [2,2,1]
console.log('>>>>>>>>>>>>>>>>>>>>>>')
console.log(singleNumber1(test1))
console.log(singleNumber1(test2))
console.log('>>>>>>>>>>>>>>>>>>>>>>')

console.log('>>>>>>>>>>>>>>>>>>>>>>')
console.log(singleNumber2(test1))
console.log(singleNumber2(test2))
console.log('>>>>>>>>>>>>>>>>>>>>>>')

console.log('>>>>>>>>>>>>>>>>>>>>>>')
console.log(singleNumber3(test1))
console.log(singleNumber3(test2))
console.log('>>>>>>>>>>>>>>>>>>>>>>')
