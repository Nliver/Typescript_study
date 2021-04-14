let a = 10;
console.log(a);
function fn(a, b) {
    return a + b;
}
function fn2() {
    alert(this);
}
let box1 = document.getElementById('box1');
box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', function () {
    alert('hello');
});
export {};
