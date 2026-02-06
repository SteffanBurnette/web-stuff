let hands = ["Rock", "Paper", "scissor"]

function getHand(){
    let randomIndex = Math.floor(Math.random() * 3)
    return hands[randomIndex]
}

console.log(getHand())