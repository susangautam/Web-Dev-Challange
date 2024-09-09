document.addEventListener('DOMContentLoaded', () => {
    const userChoiceElement = document.getElementById('user-choice');
    const computerChoiceElement = document.getElementById('computer-choice');
    const outcomeElement = document.getElementById('outcome');
    const countdownElement = document.getElementById('countdown');

    const choices = ['rock', 'paper', 'scissors'];
    const images = {
        rock: 'rock.jpg',
        paper: 'paper.jpg',
        scissors: 'scissor.jpg'
    };

    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'Computer wins!';
        }
    }

    function updateChoiceDisplay(userChoice, computerChoice) {
        userChoiceElement.innerHTML = `<img src="${images[userChoice]}" alt="${userChoice}" class="choice-image" /><p>Your choice: ${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)}</p>`;
        computerChoiceElement.innerHTML = `<img src="${images[computerChoice]}" alt="${computerChoice}" class="choice-image" /><p>Computer's choice: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</p>`;
    }

    function countdownAnimation(callback) {
        let count = 3;
        countdownElement.textContent = count;
        const interval = setInterval(() => {
            count--;
            countdownElement.textContent = count;
            if (count <= 0) {
                clearInterval(interval);
                callback();
            }
        }, 1000);
    }

    function playGame(userChoice) {
        countdownAnimation(() => {
            const computerChoice = getComputerChoice();
            updateChoiceDisplay(userChoice, computerChoice);
            outcomeElement.textContent = `Result: ${determineWinner(userChoice, computerChoice)}`;
        });
    }

    document.getElementById('rock').addEventListener('click', () => playGame('rock'));
    document.getElementById('paper').addEventListener('click', () => playGame('paper'));
    document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
});
