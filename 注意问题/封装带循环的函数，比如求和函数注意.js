//此处这么写会出问题,下面的for循环调用sum方法时,两个参数i会重叠,导致出问题.
//所以封装的方法sum,改一下循环参数,改成k即可.
function sum(a) {
    let sumAll = 0;
    for (i = 0; i < a.length; i++) {
        sumAll += a[k]
    }
    return sumAll
}

let a = [0, 1, 2, 3, 4];
let result = [], sub = 3, arr = [];

for (i = 0; i < a.length; i++) {
    arr.push(a[i])
    console.log(arr)
    if (sum(arr) === sub) {
        console.log(i)
        break
    }
}