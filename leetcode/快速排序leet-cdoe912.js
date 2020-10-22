/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    quick_sort(nums, 0, nums.length - 1)
    return nums
};

function quick_sort(q, l, r) {
    if (l >= r) return;
    //l+r>>1 是位操作符，与c++相同，表示(l+r)/2取整数
    i = l - 1, j = r + 1, x = q[l + r >> 1];
    while (i < j) {
        do i++; while (q[i] < x); //如果从大到小，这里<变>即可
        do j--; while (q[j] > x);//如果从大到小，这里>变<即可
        if (i < j) {
            // swap(q[i], q[j]); 交换q[i]与q[j]，js没有swap
            let nB = q[i];
            q[i] = q[j];
            q[j] = nB;
        }
    }
    quick_sort(q, l, j), quick_sort(q, j + 1, r);

}