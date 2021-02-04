const _ = require('lodash');
/*
* 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
*
* 示例：
*  s = "leetcode"
  返回 0
  *
  * 提示：你可以假定该字符串只包含小写字母。

* */

/**
 * @param {string} s
 * @return {number}
 */
// 哈希表
const firstUniqChar = (s) => {
  const M = new Map()
  for (let a=0; a<s.length; a++) {
    if (M.has(s[a])) {
      const data = _.split(M.get(s[a]), '_')
      data[1] = _.toNumber(data[1]) + 1
      const newData = `${data[0]}_${data[1]}`
      M.set(s[a], newData)
    } else {
      M.set(s[a], `${a}_1`)
    }
  }
  for (let i=0; i<Array.from(M).length; i++) {
    const formatT = _.split(Array.from(M)[i][1], '_')
    if (_.toNumber(formatT[1]) === 1) {
      return formatT[0]
    }
  }
  return -1
};


const test1 = 'leetcode'
const test2 = 'cc'

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
console.log('firstUniqChar>>>>>', firstUniqChar(test1))
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
console.log('firstUniqChar>>>>>', firstUniqChar(test2))
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
