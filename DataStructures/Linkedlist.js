console.log("This is the Stack Tutorial")

class Person { constructor(name, age, address) { this.name = name; this.age = age; this.address = address; }

getInfo() { 
    console.log("hello")
    console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`); 
} 
}

const obj = new Person(
    "je;;p",
654,
"hello"
);


obj.getInfo();