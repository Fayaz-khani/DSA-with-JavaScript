// console.log("hello world")
// for all the patterns we need two loops
// the outer loop is for the rows or linesn
// the inner loop is for the columns 
// Whatever you are printing print them in the inner loop
// observe symetry which is optional (can't be applicable to all the patterns)

// var n = 5;

// for (var i = 0; i<n;i++){
//     for(var j = 0;j<n;j++){
//         console.log("*") 
//     }
//     console.log("\n")
// }

const size = 5;
for (let i = 0; i < size; i++) {
let row = '';
  for (let j = 0; j < 2; j++) {
    row += '*';
  }
  console.log(row);
}
