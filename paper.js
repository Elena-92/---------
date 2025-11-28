function rockScissorsPaperGame() {

    const randomItems = ["камень", "ножницы", "бумага"];
    const regexp = /^[а-яА-Я]+$/;

    let playerAnswer; 

    const getRandomItem = () => Math.floor(Math.random() * randomItems.length);
    const computerChoice = randomItems[getRandomItem()]; 
      do {
        
        playerAnswer = prompt("Введите \"камень\", \"ножницы\" или \"бумага\" (или нажмите Отмена)");
            if (playerAnswer === null) {
            alert("Игра отменена пользователем.");
            return; 
        }

        const normalizedAnswer = playerAnswer.trim().toLowerCase();
        
        const isValidInput = regexp.test(normalizedAnswer) && randomItems.includes(normalizedAnswer);

     if (isValidInput) {
            
            alert(`Выбор компьютера: ${computerChoice}`);

            if (normalizedAnswer === computerChoice) {
                alert("Ничья!");
            } else if (
                (normalizedAnswer === "камень" && computerChoice === "ножницы") ||
                (normalizedAnswer === "ножницы" && computerChoice === "бумага") ||
                (normalizedAnswer === "бумага" && computerChoice === "камень")
            ) {
                alert("Вы победили!");
            } else {
                alert("Компьютер победил!");
            }
           
            return; 

        } else {
         
            alert("Неверный ввод. Пожалуйста, введите 'камень', 'ножницы' или 'бумага'.");
        }

    } while (true);
}  