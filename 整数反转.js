/*
* 给你一个 32 位的有符号整数 x ，返回 x 中每位上的数字反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。
* 示例 1：
输入：x = 123
输出：321
* */

/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const MAX_INT = 2 ** 31 - 1
  const MIN_INT = - (2 ** 31)
  if (x > MAX_INT || x < MIN_INT || x === 0) {
    return 0
  }
  let res = 0
  while (x !== 0) {
    const value = x % 10 // 取余 拿到最后一位
    x = ~~(x / 10) // 两个取反运算 代替Math.floor ,拿到去掉末位的整数
    res = res * 10 + value
  }
  if (res > MAX_INT || res < MIN_INT) {
    return 0
  }
  return res
};

const test1 = 123
const test2 = -3456
console.log('>>>>>>>', reverse(test1))
console.log('>>>>>>>', reverse(test2))
