/**
 * @param {number[]} A
 * @return {boolean}
 */
//求和函数
function sum(a) {
    let sumAll = 0;
    for (i = 0; i < a.length; i++) {
        sumAll += a[i]
    }
    return sumAll;
}
//主函数
var canThreePartsEqualSum = function (A) {
    let arr = A;
    let sumAll = sum(arr);
    let sumEqual = sumAll / 3;
    let arr1 = 0, arr3 = 0, result = [];
    if (sumAll % 3 !== 0) {
        return false
    }
    for (i = 0; i < arr.length - 1; i++) {
        arr1 += arr[i];
        if (arr1 === sumEqual) {
            result.push(i)
            break
        }

    }
    for (j = arr.length - 1; j > 0; j--) {
        arr3 += arr[j];

        if (arr3 === sumEqual) {
            result.push(j)
            break
        }
    }
    return (result[1] - result[0] > 1)
};


//调用
let a = apart([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]);
console.log(a)