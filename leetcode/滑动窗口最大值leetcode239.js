/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    //维护一个结果数组，和一个单调递减队列（存储下标，方便出队列判断）
    let result = [], deque = [];
    //遍历数组
    for (i = 0; i < nums.length; i++) {
        //当队列的最后一个元素（表示下标），对应的nums比nums[i]小
        while (nums[deque[deque.length - 1]] < nums[i]) {
            //去掉队列最后一个元素
            deque.pop();
        }
        //否则就把下标存储在队列
        deque.push(i)
        //如果队列里第一个元素的下标，超过了当前i与k对应的框框（队列里也会有别的元素抄过框框，但是无所谓，我们的result只与第一个元素有关，所以无需处理）
        if (deque[0] <= i - k) {
            //把他去掉
            deque.shift();
        }
        //当i到达框框的大小时，每次把第一个值，也就是最大的值存在result里
        if (i > k - 2) {
            result.push(nums[deque[0]])
        }

    }
    return result
};