//object 表示一个js对象

let a:object;
a = {};
a = function(){

};

//{ } 用来指定对象中可以包含哪些属性
//语法：{属性名：属性值，属性名：属性值}
//在属性名后面加上？，表示属性是可选的
let b: {name: string, age?:number};

//没有得话就会报错
// b = {};

b = {name: "孙悟空", age: 18};


// let c3: {name: string, a?:number, b?:number};
// c = {name:"猪八戒", a:1, b:2,c:3}

//[propName: string]:any 表示任意类型的属性
let c: {name: string, [propName: string]:any}

c = {name:"猪八戒", age: 18, gender: '男'}



/* 
    多行注释（块注释）：' Alt+Shift+A ’
    设置函数结构的类型声明：
        语法: (形参：类型，形参：类型...)=> 返回值
*/
let d1: (a:number ,b: number)=>number;

d1 = function (n1: number, n2: number): number {
    return n1 + n2
}

/* 
    数组的类型声明：
        类型[]
        Array<类型>
*/

//string[] 表示字符串数组
let e1:string[];
e1 = ['a','b','c'];

//number[] 表示数值数组
let f: number[];

let g: Array<number>;
g = [1, 2, 3];

/* 新增
    tuple(元组)：就是固定长度的数组
        语法：[类型， 类型， 类型]
*/

let h: [string, number];
h = ['hello', 123];

/* 新增
    enum 枚举

*/
enum Gender{
    Male = 0,
    Female = 1,
}
let i: {name: string, gender: Gender};
i = {
    name: '孙悟空',
    gender: Gender.Male//'male'
}

console.log(i.gender === Gender.Male)


let j: {name: string} & {age: number};
j = {name: '孙悟空', age:18}


// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;

let m: myType;

k = 2;