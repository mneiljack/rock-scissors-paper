function getUserChoice() {
    let userChoice1 = prompt("Please choose: rock, scissors, paper:")
    let userChoice = userChoice1.charAt(0).toUpperCase() + userChoice1.slice(1)
    return userChoice
}

function getCompChoice(){
    let compChoice1 = Math.floor(Math.random() * 3);
    let compChoice;

    if (compChoice1 === 0){
        compChoice = "Rock"
    } else if (compChoice1 === 1) {
        compChoice = "Scissors"
    } else{
        compChoice = "Paper"
    }
    return compChoice;
}


// Run game

function match() {
    let userScore = 0;
    let compScore = 0;

    function game() {
        let compChoice = getCompChoice();
        let userChoice = getUserChoice();

        if (compChoice == userChoice) {
            console.log("Tie")
            }   else if ((userChoice == "Rock" && compChoice == "Scissors") ||
                        (userChoice == "Scissors" && compChoice == "Paper") ||
                        (userChoice == "Paper" && compChoice == "Rock")) {
                        userScore++
                        console.log("User win")
                          
            } else {
                compScore++
                return console.log("Computer win")
            }
        }

    for (let round = 1; round <= 5; round++) {
        console.log(`Round:${round}`)
        game()
    }

    if (compScore === userScore) {
        console.log("The game tie")
    } else if (compScore > userScore) {
        console.log("Computer wins the game")
    } else {
        console.log("Congratulation, You win the game")
    }
}

match()