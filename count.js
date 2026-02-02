//document.getElementById("count-el").innerText=5

//let count = 0
//console.log(count)
//document is an object

let count = 0
let countEl = document.getElementById("count-el")
let entries = ""
let previousEntries = document.getElementById("entries")

function increment(){
    console.log("The button was clicked")
    count++
    countEl.innerText = count
    console.log(count)

}

//A function that logs the count when it's called
function save(){
    console.log(count)
    entries += String(count) + " -> "
    previousEntries.innerText = entries 
}