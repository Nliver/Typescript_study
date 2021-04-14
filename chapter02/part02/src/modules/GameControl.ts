// 引入其他的类

import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他的所有类
class GameControl {
    // 定义三个属性
    // 蛇
    snake: Snake;
    // 食物
    food: Food;
    // 记分牌
    scorePanel: ScorePanel;

    // 创建一个属性来存储蛇的移动方向(也就是按键的方向)
    direction: string = '';
    // 创建一个属性用来记录游戏是否结束
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel(10, 2);

        this.init();
    }

    // 游戏的初始化方法，调用后游戏即开始
    init() {
        // 绑定键盘按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        // 涉及到this和bind知识

        // 调用run()方法，使蛇移动
        this.run();

    }

    /* 
        ArrowUp Up
        ArrowDown Down
        ArrowRight Right
        ArrowLeft Left
    */
    // 创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // console.log(this);
        // 需要检查event.key的值是否合法(用户是否按了正确的按键)
        // 修改direction属性
        this.direction = event.key
        // console.log(event.key);
    }

    // 创建一个控制蛇移动的方法
    run() {
        /* 
            根据方向(this.direction)来使蛇的位置改变
            向上 top 减少
            向下 top 增加
            向左 left 减少
            向右 left 增加 
        */
        // 获取蛇现在的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;


        // 根据按键方向修改X值和Y值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10; 
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
            

        }

        // 检查蛇是否吃到了食物
        this.checkEat(X, Y);
        // if (this.checkEat(X, Y)) {
        //     console.log('吃到食物了~~');
        //     // 食物的位置进行重置
        //     this.food.change();
        //     // 分数增加
        //     this.scorePanel.addScore();
        //     // 蛇要增加一节
        //     this.snake.addBody();
        // }

        // 修改蛇的X和Y值
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            // 进入到catch, 说明出现了异常，游戏结束，弹出一个提示信息
            alert(e.message+ 'GAME OVER!');
            // 将isLive设置为false
            this.isLive = false;
        }
    

        // 开启一个定时调用
        clearTimeout();
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    // 定义一个方法，用来检查蛇是否吃到食物
    checkEat(X: number, Y: number){
        if (X === this.food.X && Y === this.food.Y) {
            console.log('吃到食物了~~');
            // 食物的位置进行重置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇要增加一节
            this.snake.addBody();
        } 
    }


}

export default GameControl;



