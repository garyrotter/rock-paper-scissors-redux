let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.id);
    })
})

function computerPlay() {
    let choices = ['paper', 'rock', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {

let computerSelection = computerPlay();
let result = '';

if (playerSelection == 'rock') {
    if (computerSelection == 'scissors') {
    playerScore += 1;
    result = "You win this one Jabroni!";
    } else if (computerSelection == 'paper') {
    computerScore += 1;
    result = "The Rock will Layeth the Smacketh Down all over your Candy Ass!";
    } else {
    result = "This bores the Rock.";
    }
}
if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
    playerScore += 1;
    result = "You win this one Jabroni!";
    } else if (computerSelection == 'scissors') {
    computerScore += 1;
    result = "I turned that sumbitch side ways!";
    } else {
    result = "Bring your roody-poo candy ass one more time!";
    }
}
if (playerSelection == 'scissors') {
    if (computerSelection == 'paper') {
    playerScore += 1;
    result = "Don’t lie to The Rock.";
    } else if (computerSelection == 'rock') {
    computerScore += 1;
    result = "The Rock will slap that crooked eye straight";
    } else {
    result = "The Rock says... Shut your mouth and go again!";
    }
}

document.getElementById('score-description').innerHTML = result;
document.getElementById('playerScore').innerHTML = playerScore;
document.getElementById('computerScore').innerHTML = computerScore;

checkWinner();

}

function checkWinner() {

     if (playerScore == 5) {
         result = "You beat the Rock!";
         disableButtons();
     } else if (computerScore == 5) {
         result = "You got your candy ass whooped!";
         disableButtons();
     } else if (computerScore == 5 && playerScore == 5) {
         result = "The game is a tie!";
     }
     
    document.getElementById('score-description').innerHTML = result;
    playAgain();
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playAgain() {
    const playagain = document.querySelector('#playagain');
    const againbutton = document.createElement('button');
    againbutton.setAttribute('id', 'again');
    againbutton.setAttribute('onClick', 'window.location.reload();')
    againbutton.textContent = 'Another round!';
    playagain.appendChild(againbutton);

    const remove = document.getElementById('score-description');
    remove.remove();
}
