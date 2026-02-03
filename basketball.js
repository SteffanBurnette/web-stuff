let homeScore = document.getElementById("homeScore")
let guessScore = document.getElementById("guessScore")

homeCount = 0
guessCount = 0

function add1(){
    homeCount+= 1
    homeScore.textContent = homeCount
}

function add2(){
    homeCount+= 2
    homeScore.textContent = homeCount
}

function add3(){
    homeCount+= 3
    homeScore.textContent = homeCount
}


function add1G(){
    guessCount+= 1
    guessScore.textContent = guessCount
}

function add2G(){
    guessCount+= 2
    guessScore.textContent = guessCount
}

function add3G(){
    guessCount+= 3
    guessScore.textContent = guessCount
}
