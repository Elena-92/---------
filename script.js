const value = prompt('Пожалуйста, введите любое число');
const result = Number(value);
if (isNaN(result)) {
  alert('Нечисло');
  
} else {
 alert('Число');
  
}


const value1 = prompt('Пожалуйста, введите любое число');
const result1 = Number(value1);
if(result1 % 2 === 0 ) {
  alert('Чётное число');
  
} else {
 alert('Нечётное число');
  
}


let clientOS = Number(prompt('Какая у вас OS,где 0 - это iOS, а 1 - это Android?'));
if (clientOS === 0) {
  alert('Установите версию приложения для iOS по ссылке');
  
} else {
  alert('Установите версию приложения для Android по ссылке');
  
}


