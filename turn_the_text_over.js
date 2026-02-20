function turnOverText() {
    let userInsert;

    do {
        userInsert = prompt("Введите ваше слово!");

        if (userInsert === null) {
            alert("Вы отменили ввод.");
            return;
        }

        userInsert = userInsert.trim();

        if (userInsert === '') {
            alert("Вы ничего не ввели!");
        } else if (!isNaN(userInsert)) {
            alert("Вы ввели не слово. Пожалуйста, введите слово.");
        } else if (!/^[a-zA-Zа-яА-Я]+$/.test(userInsert)) {
             alert("Пожалуйста, используйте только буквы.");
        } else {
            alert(userInsert.toUpperCase().split('').reverse().join(''));
            break;
        }
    } while (true);
}














