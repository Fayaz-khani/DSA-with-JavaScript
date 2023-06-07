// prime is a number which is divisible by itself and one


function isPrime(num){
    for(var i=0; i<= Math.sqrt(num);i++){
        if(num%i==0)
        return false
    }
    return true
}

var n = 12;

var res = isPrime(n);
if(n!=1 && res == true  ){
    console.log("is prime")
}
else
console.log("is not a prime")


