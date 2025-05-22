//Task#1
let b = 0;
while (b < 2) {
    alert("Привет"); 
    b ++; 
};

//Task#2
let a = 0;
while (a < 5) {
    alert(a);
    a ++;
};
 //Task#3
let c = 7;
while (c <= 22) {
    alert(c);
    c ++;
};

//Task#4
const obj = {
    "Коля": 200,
    "Вася": 300,
    "Петя": 400,
    
 }
 
 for (let key in obj) {
    alert(`${key}: ${obj[key]}`);
 };


//Task#5
 let n = 1000;
    let num = 1;
    do {
    n /=2;
    alert(n);
    alert(num);
    num ++;
    } while (n >= 50);

//Task#6
    const firstFriday = 1;
    const monthDays = 31;
    for (let index = 5; index <= monthDays; index += 7) {
    alert("Сегодня пятница " + index +"-ое число. Нужно подготовить отчет.");
   
    };
 