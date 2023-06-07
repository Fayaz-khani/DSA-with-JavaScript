
// console.log("")

// One method 
var num = 78435
var count = 0;

// num = num.toString()
// console.log(num.length)



// second method
while (num !== 0) {
    num = Math.floor( num % 10)
    count++;
}
console.log(count);

