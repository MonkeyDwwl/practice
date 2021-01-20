/*
* 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
你可以假设除了整数 0 之外，这个整数不会以零开头。

示例 1：
输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
示例 2：
输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
示例 3：
输入：digits = [0]
输出：[1]
提示：
1 <= digits.length <= 100
0 <= digits[i] <= 9
*
* */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 需要考虑进位问题
const plusOne = (digits) => {
  for (let i=digits.length-1; i>=0; i--) {
    digits[i] += 1
    digits[i] %= 10
    console.log('digits[i]>>>', digits[i])
    // 末位加一之后是否需要进位，如果不进位直接return结果；如果需要进位则看下一层循环的位数是否需要进位
    if (digits[i] !== 0) {
      return digits
    }
  }
  // 循环结束后，如果没有在循环内return结果，则代表所有位数都变成了0，则需要首位变为1；末位补0；
  digits[0] = 1
  digits.push(0)
  return digits
};

const test1 = [1,1,3,9]
const test2 = [9,9]
console.log('>>>>>>>>>>>>>>>>>>>>>>')
console.log(plusOne(test1))
console.log(plusOne(test2))
console.log('>>>>>>>>>>>>>>>>>>>>>>')
