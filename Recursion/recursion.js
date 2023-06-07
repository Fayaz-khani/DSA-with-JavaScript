


// console.log("hello world")


// var count = 0;

// function first(n) {

//     if (count === n) 
//     {return};
//     console.log(count)
//     count ++;
//     first(n);
// }


// first(5);

// var count = 0;
// var ans = null;
// function first(n) {

//     if (count === n) 
//     {return};
//     count++;
//     ans+=count;
//     first(n);
// }


// first(3);

// console.log(ans)





// var count = 0;

// function first(n) {
//     if (count === n) 
//     {return};
//     count++;
//     console.log("Developers");
//     first(n);
// }


// first(3);

var ans = null;
function factorial(n) {
    if (n === 0) 
    {
        console.log(1)
    }
    else{
        if (n === 1) 
    {
        return 
    }
       console.log(n*factorial(n-1));

    }
}

factorial(3);

console.log(ans)
