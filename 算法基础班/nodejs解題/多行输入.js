//多行输入（2行），空格分隔成数组
//输入：5
//     2 8 9 4 3
//输出 n=5,q=[2,8,9,4,3]
//win中^+enter换行，linux\+enter换行。但输入没用，输入换行就是监听两个输入，cpp中用两个scanf,js中，用事件触发，触发2次后就结束
//注意空格问题，trim去除两端空格，replace(/\s*/g, '')去除所有空格，split 是以空格分split(" ")，还是以元素分split("")

var readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var inputs = [], n = 0, q = []
rl.on('line', function (line) {
    //每次触发line事件，就push到inputs数组
    inputs.push(line);
    //输入了两个后，退出输入
    if (inputs.length == 2) {
        //赋值n
        n = parseInt(inputs[0])
        //分隔字符串成数组,trim()去除两端空格,split(" ")根据空格分割把字符串组成数组。
        q = inputs[1].trim().split(' ');
        //数组的字符串元素转数字
        q.forEach((e, i) => {
            q[i] = parseInt(e)
        });
        console.log(n, q)
        process.exit()
    }
})
