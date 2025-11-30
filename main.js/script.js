//Task#1
let text = "js";
let textAltered = text.toUpperCase();
console.log(textAltered);

//Task#2
const searchElement = (elements) => {
    const newArray = new Array();
    const findIt = 'арбуз';
    elements.forEach(element => {
        if (element.toLowerCase().startsWith(findIt.toLowerCase())) {
            newArray.push(element);
        }
    });
    return newArray;
}
console.log(searchElement(['Астраханский арбуз',  'ВОЛжанин арбуз','Томаты', 'Принц Гамлет арбуз', 'арбуз Лунный', 'Арбузные дольки']));


//Task#3
const num = 32.58884;
console.log(`До меньшего целого ${Math.floor(num)}`);
console.log(`До большего целого ${Math.ceil(num)}`);
console.log(`До ближайшего целого ${Math.round(num)}`);

//Task#4
const numbers = [52, 53, 49, 77, 21, 32];
let number = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > number) {
        number = numbers[index];
    }

}
console.log(`Максимальное значение равно: ${number}`);


const toFindMin = () => {
    return Math.min(52, 53, 49, 77, 21, 32);
}
console.log(`Минимальное значение равно: ${toFindMin()}`);

//Task#5

const randomNumber = () => {
    return Math.floor(Math.random() * 10 + 1);
}
console.log(randomNumber());

//Task#6

function randomArray(n) {
    newArray = new Array();
    let randomNum = Math.floor(Math.random() * n);
    const newArrayLenth = n / 2;
    for (let i = 0; i < newArrayLenth; i++) {
        newArray.push(randomNum);

    }
    return newArray;
}
console.log(randomArray(6));
 
//Task#7

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  console.log(getRandomInt(3, 8));

//Task#8
let todaysDate = new Date();
console.log(todaysDate);


//Task#9
let myDate = new Date();
let date_1 = myDate.getDate();
let date_2 = myDate.setDate(73);
let date1Calculated = date_1 * 24 * 3600 * 1000;
let result = new Date(date1Calculated + date_2);
console.log(result);
//Task#10

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
let newDate = new Date();
let fullDate = "Дата: " + newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear() + " год " + " - это " + days[newDate.getDay()];
let fullTime = "Время: " + newDate.toLocaleTimeString('ru-RU');
console.log(fullDate);
console.log(fullTime);
