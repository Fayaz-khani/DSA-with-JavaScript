
console.log("hello Coders")

let emptyArry = [];   
// length is undefined but after we asign the values it will just store the vales as much we are going to assign.
function ArryReverse(N,Num){
    if(N===0) return;
    emptyArry.push(Num[N-1]);
    // emptyArry.push("Think first");
    N--;
    ArryReverse(N,Num)
    
}

ArryReverse(7,[1,2,5,6,7,9,10])

console.log(emptyArry)