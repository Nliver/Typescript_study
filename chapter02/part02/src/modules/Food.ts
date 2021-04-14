// 定义食物类Food
class Food{
    // 定义的一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor(){
        // 获取页面种的food元素并将其赋值给element
        this.element = document.getElementById('food')!;
    }

    // 定义一个获取食物X轴坐标的方法
    get X(){
        return this.element.offsetLeft;
    }

    // 定义一个获取食物Y轴坐标的方法
    get Y(){
        return this.element.offsetTop;
    }

    // 修改食物位置
    change(){
        // 生成一个随机的位置
        // 食物的位置最小是0， 最大是290
        // 蛇移动一次就是一格，一格大小就是10，所以要求 食物的坐标必须是整10

        // Math.round(Math.random() * 290);
       let top = Math.round(Math.random() * 29) * 10;
       let left = Math.round(Math.random() * 29) * 10;
        // Math.floor(Math.random() * 30) * 10;//向下取整

        this.element.style.left = top + 'px';
        this.element.style.top = left + 'px';
    }
}

// 测试代码
// const food = new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y);

export default Food;