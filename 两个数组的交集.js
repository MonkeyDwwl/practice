/*
* 给定两个数组，编写一个函数来计算它们的交集。
示例 1：
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
示例 2:
输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
说明：
输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序。
进阶：
如果给定的数组已经排好序呢？你将如何优化你的算法？
如果 nums1 的大小比 nums2 小很多，哪种方法更优？
如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

**/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 使用哈希表
const intersect1 = (nums1, nums2) => {
  const tempMap = new Map()
  const res = []
  // 取数组长度最小的放进map里
  for (let i=0; i<nums1.length; i++) {
    if (tempMap.has(nums1[i])) {
      let count = tempMap.get(nums1[i]) + 1
      tempMap.set(nums1[i], count)
    } else {
      tempMap.set(nums1[i], 1)
    }
  }
  console.log('tempMap>>>', tempMap)
  for (let j=0; j<nums2.length; j++) {
    if (tempMap.get(nums2[j])) {
      res.push(nums2[j])
      let count = tempMap.get(nums2[j]) - 1
      tempMap.set(nums2[j], count)
    }
  }
  return res
};

// 先排序再使用双指针比较
const intersect2 = (nums1, nums2) => {
  nums1.sort((a, b) => a-b)
  nums2.sort((a, b) => a-b)
  const res = []
  console.log('nums1>>', nums1)
  console.log('nums2>>', nums2)
  let p1 = 0 // 扫描nums1
  let p2 = 0 // 扫描nums2
  while (p1<nums1.length && p2<nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      p1++
      continue
    }
    if (nums1[p1] > nums2[p2]) {
      p2++
      continue
    }
    res.push(nums1[p1])
    p1++
    p2++
  }
  return res
}

const test1 = [1,1,3,3,4,4,2]
const test2 = [2,2,1,1]
console.log('>>>>>>>>>>>>>>>>>>>>>>')
console.log(intersect1(test1, test2))
console.log('>>>>>>>>>>>>>>>>>>>>>>')

console.log('>>>>>>>>>>>>>>>>>>>>>>')
console.log(intersect2(test1, test2))
console.log('>>>>>>>>>>>>>>>>>>>>>>')
