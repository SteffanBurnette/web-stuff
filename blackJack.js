let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){

    if (sum < 21){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "You've git black jack!"
        hasBlackJack = true
    }
    else if(sum > 21){
        message = "You lost"
        isAlive = false
    }

    console.log(message)
    messageEl.textContent = message
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum 
}


