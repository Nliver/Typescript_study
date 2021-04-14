"use strict";
// 使用class关键字来定义一个类
/*
    对象中主要包含两个部分：
    属性
    方法

*/
class Person {
    constructor() {
        /*
            直接定义的属性是实例属性，需要通过对象的实例去访问；
                const per = new Person();
                per.name
            使用static的开头的属性是静态属性（类型），可以直接通过类去访问
                Person.age
            readonly 开头的属性表示一个只读的属性无法修改
        */
        //定义实例属性
        // name: string = '孙悟空';
        // readonly name: string = '孙悟空';
        this.name = '孙悟空';
        // 在属性前使用static关键字可以定义类属性（静态属性）
        // static readonly age: number = 18;
        this.age = 18;
    }
    //定义方法
    /*
        如果方法以static开头则方法就是类方法，可以直接通过类去调用
    */
    sayHello() {
        console.log("Hello 大家好！");
    }
}
//new 一个实例
const per = new Person();
console.log(per.name);
per.name = 'tom';
console.log(per.name);
// console.log(Person.age); //static时可以使用
// Person.sayHello();
per.sayHello();
