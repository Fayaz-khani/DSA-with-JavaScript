// console.log("hello Stack")//pylandrom with stack 

var letters =[]

var word ="Fayaz"

var reversWord =""

for (var i = 0; i< word.length; i++){
    letters.push(word[i]);
}

// console.log(letters)
for (var i = 0; i< word.length; i++){
    reversWord += letters.pop();
}

console.log(reversWord)

if(reversWord === word)
    console.log(word , "Is a palindrome")
else    
    console.log(word , "Is not a palindrome")