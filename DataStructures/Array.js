// console.log("hi from Array.js")

// obj2.arrays();
var duplicateArray = function (nums) {

    this.findDuplicate = function (Array) {

        if (Array != null) {
           for(var i=0;i<Array.length;i++)
           {
            Array.forEach(element => {
                if (Array[i] == Array[element]) 
                    console.log("True")
                else  
                console.log("False")
            }); 
           }
        }
    }
}

var newArray = [6, 2, 9, 56, 5, 868, 2];
var obj = new duplicateArray();
obj.findDuplicate(newArray);
