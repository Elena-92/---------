let password = String('пароль' );
let password2 = String('кошка');
let answer = String(prompt('Введите пароль'));
answer = answer.toLocaleLowerCase();
if (answer === 'кошка') {alert('Пароль введен верно');
  
} else { alert('Пароль введен неправильно')
  
};
