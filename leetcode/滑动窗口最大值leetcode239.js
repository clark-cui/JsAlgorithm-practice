/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    //维护一个结果数组，和一个单调递减队列（存储下标，方便出队列判断）
    let result = [], deque = [];
    for (i = 0; i < nums.length; i++) {
        while (nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        //存储下标
        deque.push(i)
        //增加出队列判断,错误操作为i-1，也是醉了
        if (deque[0] <= i - k) {
            deque.shift();
        }
        if (i > k - 2) {
            result.push(nums[deque[0]])
        }

    }
    return result
};