let cards  = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard(){

    let randomNum = Math.floor(Math.random() * 13) + 1
    
    if(randomNum > 10){
        return 10
    } else if(randomNum === 1){
        return 11
    } else {
        return randomNum
    }
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum += card
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
    let card = getRandomCard()
    cards.push(card)
    sum += card
    renderGame() 
}