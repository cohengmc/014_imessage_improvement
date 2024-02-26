const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
const row3 = ["z", "x", "c", "v", "b", "n", "m"]
const row4 = ["space"]

const topRowEl = document.querySelector("#top-row")
const midRowEl = document.querySelector("#mid-row")
const botRowEl = document.querySelector("#bot-row")
const spaceRowEl = document.querySelector("#space-row")


addLetters(topRowEl, row1)
addLetters(midRowEl, row2)
addLetters(botRowEl, row3)
addLetters(spaceRowEl, row4)


function addLetters(element, row){
    console.log(element);
    for(let i = 0; i < row.length; i++){
        element.innerHTML += `
            <button class="letter">${row[i]}</button>
        `
    }
}

