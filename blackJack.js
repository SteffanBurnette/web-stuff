let firstCard = 6
let secondCard = 9
let cards  = [firstCard, secondCard]
let sum = cards[0] + cards[1]
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){

    if (sum < 21){
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21){
        message = "You've got black jack!"
        hasBlackJack = true
    }
    else if(sum > 21){
        message = "You lost"
        isAlive = false
    }

    console.log(message)
    messageEl.textContent = message
    for(let card of cards){
        cardsEl.textContent += " " + card
    }
    //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum 
}


function newCard(){
     //firstCard = 10
    // secondCard = 11
    cards.push(6)
    sum += cards[cards.length - 1]
    cardsEl.textContent += " " + cards[cards.length - 1]
    sumEl.textContent = "Sum: " + sum 
}