/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  return nums
    .sort((a, b) => a - b)
    .filter((_, i) => !(i & 1))
    .reduce((acc, i) => acc + i, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  const len = nums.length;
  let result = 0;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i += 2) {
    result += Math.min(nums[i], nums[i + 1]);
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  //Due to the question set value will in range of [-10000, 10000]
  const POSSIBLE_VALUE_SUM = 20001;
  const NEGATIVE_MAX_VALUE = 10000;
  const exist = Array.from({ length: POSSIBLE_VALUE_SUM }, () => 0);
  for (let i = 0; i < nums.length; i++) {
    //Let value -10000 become 0, so index won't be negative
    exist[nums[i] + NEGATIVE_MAX_VALUE]++;
  }

  let sum = 0;
  let odd = true;
  for (let i = 0; i < exist.length; i++) {
    while (exist[i] > 0) {
      if (odd) {
        //Resume the value
        sum += i - NEGATIVE_MAX_VALUE;
      }
      odd = !odd;
      exist[i]--;
    }
  }

  return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6214, -2290, 2833, -7908]));
