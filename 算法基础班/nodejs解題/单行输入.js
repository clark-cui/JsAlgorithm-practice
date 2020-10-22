
//单行输入，空格分隔成数组
//输入： 1 2 3 4 
//输出：[1,2,3,4]
var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line', function (line) {
    //line为输入的单行字符串，trim()去除字符串两端空格，split(" ")通过空格将该行数据转换为数组。
    var arr = line.trim().split(' ')
    //数组的字符串元素转数字
    arr.forEach((e, i) => {
        arr[i] = parseInt(e)
    });

    console.log(arr)
    //退出输入
    process.exit()
})

