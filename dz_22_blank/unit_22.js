// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие onclick. При срабатывании события  выводите в out-1 количество срабатываний события. В комментариях опишите результат. */
let d1 = document.querySelector(".div-1");
let out1 = document.querySelector(".out-1");
let count1 = 0;
function t1() {
  count1++;
  out1.textContent = "click " + count1;
}
d1.onclick = t1;

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие ondblclick. При срабатывании события  выводите в out-2 количество срабатываний события. В комментариях опишите результат. */
let d2 = document.querySelector(".div-2");
let out2 = document.querySelector(".out-2");
let count2 = 0;
function t2() {
  count2++;
  out2.textContent = "double click " + count2;
}
d2.ondblclick = t2;

// ваше событие здесь!!!

// Task 3 ============================================
/*  Создайте блок div-3. Добавьте на него событие onmousemove. При срабатывании события выводите в out-3 количество срабатываний события. В комментариях опишите результат. */
let d3 = document.querySelector(".div-3");
let out3 = document.querySelector(".out-3");
let count3 = 0;
function t3() {
    count3++;
    out3.textContent = "mousemove " + count3;
}
d3.onmousemove = t3;

// ваше событие здесь!!!

// Task 4 ============================================
/*  Создайте блок div-4. Добавьте на него событие oncontextmenu. При срабатывании события выводите в out-4 количество срабатываний события. В комментариях опишите результат. */
let d4 = document.querySelector(".div-4");
let out4 = document.querySelector(".out-4");
let count4 = 0;
function t4() {
    count4++;
    out4.textContent = "contextmenu " + count4;
    return false;
}
d4.oncontextmenu = t4;
// ваше событие здесь!!!

// Task 5 ============================================
/*   Создайте блок div-5. Добавьте на него событие onmousedown. При срабатывании события выводите в out-5 количество срабатываний события. В комментариях опишите результат. */
let d5 = document.querySelector(".div-5");
let out5 = document.querySelector(".out-5");
let count5 = 0;
function t5() {
    count5++;
    out5.textContent = "mousedown " + count5;
}
d5.onmousedown = t5;
// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте блок div-6. Добавьте на него событие onmouseenter. При срабатывании события выводите в out-6 количество срабатываний события. В комментариях опишите результат. */
let d6 = document.querySelector(".div-6");
let out6 = document.querySelector(".out-6");
let count6 = 0;
function t6() {
    count6++;
    out6.textContent = "mouseenter " + count6;
}
d6.onmouseenter = t6;


// ваше событие здесь!!!

// Task 7 ============================================
/*   Создайте блок div-7. Добавьте на него событие onmouseleave. При срабатывании события выводите в out-7 количество срабатываний события. В комментариях опишите результат.*/

let d7 = document.querySelector(".div-7");
let out7 = document.querySelector(".out-7");
let count7 = 0;
function t7() {
    count7++;
    out7.textContent = "mouseleave " + count7;
}
d7.onmouseleave = t7;

// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте блок div-8. Добавьте на него событие onmouseout. При срабатывании события выводите в out-8 количество срабатываний события. В комментариях опишите результат.*/

let d8 = document.querySelector(".div-8");
let out8 = document.querySelector(".out-8");
let count8 = 0;
function t8() {
    count8++;
    out8.textContent = "mouseout " + count8;
}
d8.onmouseout = t8;

// ваше событие здесь!!!

// Task 9 ============================================
/* Создайте блок div-9. Добавьте на него событие onmouseover. При срабатывании события выводите в out-9 количество срабатываний события. В комментариях опишите результат. */

let d9 = document.querySelector(".div-9");
let out9 = document.querySelector(".out-9");
let count9 = 0;
function t9() {
    count9++;
    out9.textContent = "mouseover " + count9;
}
d9.onmouseover = t9;

// ваше событие здесь!!!

// Task 10 ============================================
/*  Создайте блок div-10. Добавьте на него событие onmouseup. При срабатывании события выводите в out-10 количество срабатываний события. В комментариях опишите результат.*/

let d10 = document.querySelector(".div-10");
let out10 = document.querySelector(".out-10");
let count10 = 0;
function t10() {
    count10++;
    out10.textContent = "mouseup " + count10;
}
d10.onmouseup = t10;
