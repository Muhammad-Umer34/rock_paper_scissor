document.addEventListener('DOMContentLoaded', function() {
    let humanScore = 0;
    let computerScore = 0;

    const rockButton = document.querySelector('.Rock');
    const paperButton = document.querySelector('.Paper');
    const scissorButton = document.querySelector('.Scissor');

    const userScoreElement = document.querySelector('.user-score');
    const compScoreElement = document.querySelector('.comp-score');
    const descriptionElement = document.querySelector('.description');

    // Add event listeners for user choices
    if (rockButton) {
        rockButton.addEventListener('click', function() {
            playRound("Rock");
        });
    } else {
        console.error('Rock element not found');
    }

    if (paperButton) {
        paperButton.addEventListener('click', function() {
            playRound("Paper");
        });
    } else {
        console.error('Paper element not found');
    }

    if (scissorButton) {
        scissorButton.addEventListener('click', function() {
            playRound("Scissor");
        });
    } else {
        console.error('Scissor element not found');
    }

    function getComputerChoice() {
        let number = Math.random();

        if (number < 0.33) {
            return "Rock";
        } else if (number < 0.66) {
            return "Paper";
        } else {
            return "Scissor";
        }
    }

    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();

        console.log('Human choice:', humanChoice);
        console.log('Computer choice:', computerChoice);

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            updateDescription("It's a tie!");
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissor") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissor" && computerChoice === "Paper")
        ) {
            humanScore++;
            console.log("You win this round!");
            updateDescription(`You win this round! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log("Computer wins this round!");
            updateDescription(`Computer wins this round! ${computerChoice} beats ${humanChoice}`);
        }

        updateScore();
    }

    function updateScore() {
        if (userScoreElement && compScoreElement) {
            userScoreElement.textContent = humanScore;
            compScoreElement.textContent = computerScore;
        } else {
            console.error('Score elements not found');
        }
    }

    function updateDescription(message) {
        if (descriptionElement) {
            descriptionElement.textContent = message;
        } else {
            console.error('Description element not found');
        }
    }
});
