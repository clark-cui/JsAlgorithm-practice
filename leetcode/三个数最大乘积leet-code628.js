/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    var n = nums.length;
    nums.sort((a, b) => a - b);
    var mul11 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    var mull2 = nums[0] * nums[1] * nums[n - 1];
    var mull = mul11 > mull2 ? mul11 : mull2;
    return mull
};