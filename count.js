//document.getElementById("count-el").innerText=5

//let count = 0
//console.log(count)

let count = 0
let countEl = document.getElementById("count-el")

function increment(){
    console.log("The button was clicked")
    count++
    countEl.innerText = count
    console.log(count)

}