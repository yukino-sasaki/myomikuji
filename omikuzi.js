/*
var clickbutton = document.querySelector('omi-btn')
var result = document.querySelector('result');
var newresult = document.createElement('p');
var a = 0;
clickbutton.addEventListener('click', () => {

    var a = Math.floor(Math.random() * 4);
    return a;
});
if (a === 0) {
    newresult.textContent = "大吉";
    result.appendChild(newresult);
} else if (a === 1) {

    newresult.textContent = "中吉";
    result.appendChild(newresult);
} else if (a === 2) {
    newresult.textContent = "小吉";
    result.appendChild(newresult);
} else {
    newresult.textContent = "凶";
    result.appendChild(newresult);
}
*/
window.onload = function () {
    var items = ["大吉", "中吉", "小吉", "凶"];
    var btn = document.querySelector('omi-btn');
    var result = document.querySelector("result");
    var num = 0;
    btn.addEventListener('click', () => {
        var num = Math.floor(Math.random() * items.length);
        alert(num);
    })
}