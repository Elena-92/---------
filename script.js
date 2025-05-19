let password = String('пароль' );
let password2 = String('кошка');
let answer = String(prompt('Введите пароль'));
answer = answer.toLocaleLowerCase();
if (answer === 'кошка') {alert('Пароль введен верно');

} else { alert('Пароль введен неправильно')

};


let c = Number('0');
let d = Number('10');

if (c>0 && c<10) {alert('Верно');
};




    let dd = Number('59');
    let e = Number('188');
    if (d>100 || e>100) {alert('Верно');
    
    } else { alert('Неверно')
    };


    let a = '2';
    let b = '3';
    // Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
    alert (parseInt(a) + parseInt(b));


    let monthNumber = Number(prompt('Введите месяц'));

    switch (monthNumber) {
    case 1:
    alert('зима');
    break;
    case 2:
    alert('зима');
    break;
    case 3:
    alert('весна');
    break;
    case 4:
    alert('весна');
    break;
    case 5:
    alert('весна');
    break;  
    case 6:
    alert('лето');
    break;
    case 7:
    alert('лето');
    break
    case 8:
    alert('лето');
    break;  
    case 9:
    alert('осень');
    break;
    case 10:
    alert('осень');
    break;
    case 11:
    alert('осень');
    break;
    case 12:
    alert('зима');
    break;
    default: alert('Такого месяца не существует!');
    break;

};