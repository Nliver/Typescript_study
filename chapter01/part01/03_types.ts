//也可以直接使用字面量进行类型声明

let a1:10;

a1 = 10;//但是后期不可修改有点儿类似常量了

//可以使用 | 来连接多个类型（联合类型）
let b1: "male" | "female";

b1= "male";
b1= "female";

let c1 : boolean | string;

c1 = true;
c1 = 'hello';

//any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
//使用TS时，不建议是哟吧gany类型
// let d:any;

//声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let d;
d = 10;
d = 'hello';
d = 'true';

let e: unknown;
e = 10;
e = true;
e = "hello";

let s:string;

//d的类型时any，它是可以赋值给任意变量
//s = d;

e = 'hello';

//unknown 实际上就是一个类型安全的any
//unknown 类型的变量，不是直接赋值给其他变量

// s = e;
if (typeof e === "string") {
    s = e;
    
}

//类型断言: 可以用来告诉解析器变量的实际类型
/*
语法：
    变量 as 类型
    <类型>变量
*/
s = e as string;
s = <string>e;

function 3fn(num){
    if (num > 0) {
        return true;
    } else {
        return 123
    }
    
}

//void 用来表示空，以函数为例，就表示没有返回值得函数
function fn2(): void{

}
//never: 表示永远不会返回结果;没有值
function fn3(): never{
    throw new Error("报错了！");
}