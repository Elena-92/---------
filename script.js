//Task#1
function minFunc(a,b) {
    return Math.min(a,b);
};
alert(minFunc(8,4));
alert(minFunc(6,6));

//Task#2

function evenNumber(Number) {
    Number % 2 === 0;
    if (Number === 0) {
        return('Число четное');
        }
        else {
            return('Число нечетное');
        }
}
alert(evenNumber(57));
alert(evenNumber(2));

 //Task#3

 let squareNumber = myNumber => alert(Math.pow(myNumber, 7));
squareNumber(6);

let squaredNumber = anotherNumber => {
    let result = anotherNumber ** 2
    return result;
}
alert(squaredNumber(8));



//Task#4
function age() {
    let userAge = Number(prompt('Сколько тебе лет?'));

if (userAge >= 13) {
    alert('Добро пожаловать!');
} else if (userAge >= 0 && userAge <=12) {
    alert('Привет, друг!');
} else if (userAge < 0) {    
    alert('Вы ввели неправильное значение');               
}
}
age();
//Task#5

function correctNumbers(n1, n2) {

    let num1 = Number(n1);
    let num2 = Number(n2);

    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';

    } else {
        return num1 * num2;
    }
}
alert(correctNumbers(8, 'o'));
alert(correctNumbers(8, 6));

//Task#6

function userFunction() {
    let userEnter = Number(prompt('Введите число'));

    if (isNaN(userEnter)) {
        return 'Переданный параметр не является числом';

    } else {
        return `${userEnter}  в кубе равняется: ${Math.pow(userEnter, 3)}`;
    }

   }

alert (userFunction());
 
//Task#7

function getArea() {
    let circleArea = (Math.pow(this.radius, 2) * Math.PI) /2;

    return `Площадь ${this.label} круга составляет ${Math.ceil(circleArea)}`;
}

function getPerimeter() {
    let circlePerimeter = 2 * Math.PI * this.radius;
    return `Периметр ${this.label} круга составляет ${Math.floor(circlePerimeter)}`;
}

const circle1 = {
    label: '1',
    radius: 6,
    getArea: getArea,
    getPerimeter: getPerimeter
}
const circle2 = {
    label: '2',
    radius: 9,
    getArea: getArea,
    getPerimeter: getPerimeter
}
    alert(circle1.getArea());
    alert(circle1.getPerimeter());
    alert(circle2.getArea());
    alert(circle2.getPerimeter());