// console.log("Greatest Common Divisor and lowest common Multiple")


// function gcd(num,num2){
//     var ans = 1;
//     for(var i=0;i<=Math.min(num,num2);i++){
//         if(num%i==0 && num2%i==0){
//             ans = i
//         }
//     }
//      console.log(ans);
// }


//time complaxity = O(n)
//space complaxity = constant
// gcd(15,20);



// what about LCM :) 

function lcm (num, num2){
    var ans = 0;
    let numMultiples = []
    let num2Multiples = []
    for(var i =1;i<=Math.min(num,num2);i++){
        numMultiples.push(num*i)
        num2Multiples.push(num*i)
    }
    for(var i = 0;i<=Math.max(num2Multiples.length,numMultiples.length);i++)
    {
        if(numMultiples[i]==num2Multiples[i])
        {
            ans= numMultiples[i];
            break;
        }
    }
console.log(ans)
}
lcm(100,20);