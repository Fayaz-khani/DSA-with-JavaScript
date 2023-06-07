// console.log("welcome to queue");

var queue = function () {
    this.queueArray = {};
    this.count = 0;


    this.enqueue = function (num) {
        if (num != null) {
            this.queueArray[this.count] = num;
            this.count++;
        }
        return false
    }

    this.dequeue = function () {
        delete this.queueArray[0];
    }

    this.size=function(){
        console.log(this.queueArray.length)
    }
}


var obj = new queue();
obj.enqueue(5)
obj.enqueue(9)
obj.enqueue(1)
obj.enqueue(3)
obj.enqueue(8)
obj.size()

obj.dequeue();

obj.size()
