'use strict'

function playGame () {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    function guessNumber() {
        let question = prompt("Угадай число от 1 до 100");
        let num = Number(question);

        if (question === null) {
            alert("Игра окончена");
        }
        
        if (isNaN(num)) {
            alert("Введи число!");
            guessNumber();
            return;
        }

        if (num > randomNumber ) {
            alert("Загаданное число меньше");
            guessNumber();
            return
        }

        if (num < randomNumber ) {
            alert("Загаданное число больше");
            guessNumber();
            return;
        }

        alert("Поздравляю, Вы угадали!!!");
        return;
        

    }

    guessNumber()
}

playGame();




