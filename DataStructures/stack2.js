// console.log("hi welcome to stack practice two")
//1 adds a value anto the end of the stack
//2 Removes and returns the value at the end of the stack
//3 Return the value at the end of the stack
// class Stack2{
//     getmessage(){
//         console.log("this is second class");
//     }
// };
// var obj = new Stack2();
// obj.getmessage();
// // Stack2.getmessage();
// var stack = function () {
//     this.count = 0;
//     this.storage = {};


//     //adds a value anto the end of the stack
//     this.push = function (value) {
//         this.storage[this.count] = value;
//         this.count++;
//     }

//     //2 Removes and returns the value at the end of the stack
//     this.pop = function (){
//         if (this.count === 0){
//             return undefined;
//         }

//         var result = this.storage[this.count];
//         delete this.storage[this.count]
//         return result;
//         // this.storage[this.count].pop();
//         // delete this.storage[this.count];
//         // this.count--;
//         // return this.storage[this.count].value;
//     }



//     // return the size of the stack

//     this.size = function(){
//         return this.count;
//     }


//     //return the value at the end of the stack
//     this.peek = function(){
//         return this.storage[this.count-1]
//     }
// };


// var myStack = new stack();


// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek())
// console.log(myStack.pop())
// console.log(myStack.peek())


// console.log("hello Welcome to Stack Data Structure");


var stack = function () {
    this.stackArray = [];
    this.count = 0;
    this.push = function (num) {
        this.stackArray[this.count] = num;
        this.count++;
        console.log("item inserted")
    }

    this.pop = function() {
        var result = this.stackArray[this.count];
        delete this.stackArray[this.count]
        this.count--;
        
        // console.log(this.stackArray[count].value)
        console.log("item poped")
        return result;
    }


    this.size = function(){
        console.log(this.stackArray.length);
    }

    //return the top value
    this.top = function(){
        console.log( this.stackArray[this.count]);
    }

    //return the first value
    this.peek = function(){
        console.log( this.stackArray[0]);
    }

}

var obj = new stack();

obj.push(45);
obj.push(50);
obj.push(55);
obj.size();
obj.pop();
obj.size();
obj.top();
obj.peek();

