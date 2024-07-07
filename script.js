let humanscore = 0;
let computerscore = 0;

function playround(humanchoice, comchoice) {
    if (humanchoice == "rock" && comchoice == "scissors") {
        humanscore++;
        console.log("Rock Beats Scissors!");
    }
    else if (humanchoice == "paper" && comchoice == "scissors") {
        computerscore++;
        console.log("Scissors Beats Paper!");
    }
    else if (humanchoice == "rock" && comchoice == "paper") {
        computerscore++;
        console.log("Paper Beats Rock!");
    }
    else if (humanchoice == "scissors" && comchoice == "paper") {
        humanscore++;
        console.log("Scissors Beats Paper!");
    }
    else if (humanchoice == "scissors" && comchoice == "rock") {
        computerscore++;
        console.log("Rock Beats Scissors!");
    }
    else if (humanchoice == "paper" && comchoice == "rock") {
        humanscore++;
        console.log("Paper Beats Rock!");
    }
    else {
        console.log("It's a tie!");
    }
}

function getcomputerchoice() {
    let value = Math.random();
    if (value <= 0.3) {
        return "rock";
    } else if (value > 0.3 && value <= 0.6) {
        return "paper";
    } else {
        return "scissors";
    }
}

function gethumanchoice() {
    let input;
    do {
        input = prompt("Choose one: rock, paper, or scissors");
        input = input.toLowerCase();
    } while (input != "rock" && input != "paper" && input != "scissors");
    return input;
}

function playgame() {
    for (let i = 0; i < 5; i++) {
        let humanchoice = gethumanchoice();
        let comchoice = getcomputerchoice();
        console.log("Human Choice:", humanchoice);
        console.log("Computer Choice:", comchoice);
        playround(humanchoice, comchoice);
    }
    if (humanscore > computerscore) {
        console.log("Human Wins!");
    } else if (computerscore > humanscore) {
        console.log("Computer Wins!");
    } else {
        console.log("It's a tie!");
    }
}

playgame();