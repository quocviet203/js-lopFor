let tinh = 0

for (let i = 1; i <= 100; i++) {
    tinh += i
}

document.writeln(tinh)

/*bai 12_2 */
var n = parseInt(prompt('nhap vao so nguyen'))
let sum = 0
for (let j = 1; j < n; j++) {
    if (j % 3 == 0)
        sum += j
}
document.writeln('tong cac so chia het cho 3 be hon n' + '<br>' + sum + '<br>')
/**bai 12_3 */
function fibonacci(n) {
    var fib = [0, 1];
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

var ini = fibonacci(100);
document.writeln(ini);

