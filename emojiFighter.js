let fighters = ["👽", "🤖", "👾", "🐶", "🐱", "🐭", 
    "🐰", "🦅", "🐍", "🦖", "🐙", "🫎", "🐌", "🦦", "🐖", "🐁", "🐘"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let results = document.getElementById("results")

fightButton.addEventListener("click", function(){

    let randomIndexOne = Math.floor(Math.random() * fighters.length)
    let randomIndexTwo = Math.floor(Math.random() * fighters.length)
    stageEl.textContent = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo]
    if(randomIndexOne > randomIndexTwo){
        results.textContent = "You Win!"
    }else if (randomIndexOne < randomIndexTwo){
        results.textContent = "You Lose!"
    }else{
        results.textContent = "Its a Tie!"

    }
    console.log(fighters[randomIndexOne]) + " vs " + console.log(fighters[randomIndexTwo])
})

