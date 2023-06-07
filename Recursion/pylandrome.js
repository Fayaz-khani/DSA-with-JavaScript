
// var palindrome = karak;
// var str = "#a q$uick$brown '%fox324 ju%mps !over the^ ";
var str = "karak";
var newStr = str.replaceAll(/[^a-zA-Z]/g, "")


// console.log(newStr.length)
var emptyArray = [];
var count = newStr.length
var Superpalindrome = function (newStr) {
    if(count ===0) return;
    emptyArray.push(newStr[count])
    count--;
    Superpalindrome(newStr);
}

Superpalindrome(newStr)
emptyArray.toString();

if (emptyArray = newStr) {
    console.log("A palindrome")
}
else
    console.log("Not A palindrome")
