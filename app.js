const computersGame = () => {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Компьютер 1 загадал число от 1 до 100');
    let low = 1;
    let high = 100;
    let attempts = 0;

    while(true) {
        const guess = Math.floor((low + high) / 2);
        attempts++;
        console.log(`Компьютер 2: Пробую число ${guess}.`);

        if (guess < secretNumber) {
            console.log("Компьютер 1: Больше.");
            low = guess + 1;
        } else if (guess > secretNumber) {
            console.log("Компьютер 1: Меньше.");
            high = guess - 1;
        } else {
            console.log(`Компьютер 1: Угадал! Загаданное число было ${secretNumber}.`);
            console.log(`Количество попыток: ${attempts}`);
            break;
        }
    }
}
computersGame()
