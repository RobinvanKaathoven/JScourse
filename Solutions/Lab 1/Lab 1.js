function HelloWorld() {
    console.log("Hello world")
}

HelloWorld();

var person = { name: "chris", age: 31 };
console.log(person);

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log("hello from " + this.name);
    };
}

var me = new Person("chris", 31);
console.log(me);
me.sayHello();