function pageLoad () {
    alert("Welcome to this amazing Website!")
}
pageLoad()

let my_element = document.createElement('h1')
let my_span = document.createElement('span')
my_span.innerText = "Hi, this is fun";
my_element.appendChild(my_span)
document.body.appendChild(my_element)

my_element.classList.add('firstH1')



let buttonBoy = document.createElement('button')
let newSpan = document.createElement('span')
buttonBoy.appendChild(newSpan)
buttonBoy.innerText = "Button";
document.body.appendChild(buttonBoy)


let createIMG = document.createElement('img')
createIMG.src = "drason.0.jpeg"
document.body.appendChild(createIMG)

createIMG.classList.add('picture')

let createP = document.createElement('p')
let span3 = document.createElement('span')
createP.innerText = "Dragons are so fierce"
createP.appendChild(span3)
document.body.appendChild(createP)

let createH2 = document.createElement('h2')
let span4 = document.createElement('span')
createH2.innerText = "This is an H2?"
createH2.appendChild(span4)
document.body.appendChild(createH2)

let radioButton = document.createElement('button')
radioButton.setAttribute("dragon", "fireball")
radioButton.innerText="Hi Dragons!"
document.body.appendChild(radioButton)
radioButton.onclick = function dragonButton () {
    window.open('https://www.reddit.com/', target="_blank")
}

let footerAdd = document.createElement('footer')
footerAdd.innerText = "Made by Wyatt Allan"
document.body.appendChild(footerAdd)

let createh3 = document.createElement('h3')
let newSpan1 = document.createElement('span')
createh3.innerText = "Want some elves?"
createh3.appendChild(newSpan1)
document.body.appendChild(createh3)

let elfPicture = document.createElement('img')
elfPicture.src = "elf.png"
document.body.appendChild(elfPicture)
elfPicture.classList.add('picture')

let beautifulH1 = document.createElement('h1')
beautifulH1.innerText = "Isn't he beautiful?"
document.body.appendChild(beautifulH1)
beautifulH1.classList.add('beautifulColor')

let buttonFun = document.createElement('button')
buttonFun.innerText = "Make more elves!!"
document.body.appendChild(buttonFun)
buttonFun.classList.add('beautifulColor')
buttonFun.onclick = function button() {
    window.open('https://www.reddit.com/r/ImaginaryElves/', target="_blank")
}

let longP = document.createElement('p')
let longPSpan = document.createElement('span')
longP.innerText = "So along went the elves to go fight the dragons but they soon realized they could not without the help of the dwarves!"
longP.appendChild(longPSpan)
document.body.appendChild(longP)
longP.classList.add('picture', 'beautifulColor')

let anotherImg = document.querySelector('#dwarf')
anotherImg.src = "dwarfguard.jpg"

function lilButton() {
    window.open("https://www.reddit.com/r/dragons/", target="_blank")
}

let morningH1 = document.createElement('h1')
let morningSpan = document.createElement('span')
morningH1.textContent = "Good morning Lord of the Rings!"
morningH1.appendChild(morningSpan)
document.body.appendChild(morningH1)

let morningButton = document.createElement('button')
morningButton.textContent = "Good Morning!"
document.body.appendChild(morningButton)
morningButton.onclick = function morningButtonHello () {
    window.open('https://tenor.com/search/good-morning-gifs', target="_blank")
}

let anotherButton = document.createElement('button')
anotherButton.textContent = "This is another button"
document.body.appendChild(anotherButton)
anotherButton.onclick = function buttonclicky () {
    window.open('https://steamywolf.tumblr.com/', target="_blank")
}

let moreButtons = document.createElement('button')
moreButtons.textContent = "Feeling Lucky?"
let luckyButtonSpan = document.querySelector('#luckyButton')
luckyButtonSpan.appendChild(moreButtons)
moreButtons.onclick = function clicky () {
    window.open('http://manbabies.com/', target="_blank")
}

let camilleButton = document.createElement('button')
camilleButton.textContent = "Camille Button"
camilleButton.onclick = function camillicus () {
    window.open('https://www.instagram.com/', target="_blank")
}
document.body.appendChild(camilleButton)

let randomButton = document.createElement('button')
randomButton.textContent = "Random Website"
let randomButtonLink = document.querySelector('#randomButton')
randomButton.onclick = function baby () {
    window.open('https://theuselessweb.com/', target="_blank")
}
randomButtonLink.appendChild(randomButton)

let helpButtonLink = document.querySelector('#help')
let helpButton = document.createElement('button')
helpButton.onclick = function fun () {
    window.open('https://www.google.com/search?q=help+button&rlz=1C5CHFA_enUS814US815&sxsrf=ACYBGNTdMSBbjjgzugsZ2fZbarM7Qppp1Q:1575918876681&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiw_9qmo6nmAhXHi54KHcx0AhwQ_AUoAXoECAsQAw&biw=666&bih=792', target="_blank")
}
helpButton.textContent = "Press me for help"
helpButtonLink.appendChild(helpButton)


let practiceButton = document.createElement('button')
practiceButton.textContent = "Practice"
practiceButton.onclick = function practiceB () {
    window.open('https://www.grammarly.com/blog/idk-meaning/', target="_blank")
}
document.body.appendChild(practiceButton)

let randomSpan = document.createElement('span')
let h1random = document.createElement('h1')
h1random.textContent = "This is even funner than life!"
h1random.appendChild(randomSpan)
document.body.appendChild(h1random)
h1random.classList.add('anotherColor')

let addPic = document.createElement('img')
addPic.src = "mountain.jpeg"
document.body.appendChild(addPic)

let addAnotherButton = document.createElement('button')
addAnotherButton.textContent = "Mountains!"
addAnotherButton.onclick = function mountain () {
    window.open('https://www.google.com/search?q=mountain&rlz=1C5CHFA_enUS814US815&sxsrf=ACYBGNRoJ2S9f9hwWFR_LRiw3ur2_KXXTQ:1575924973035&source=lnms&tbm=isch&sa=X&ved=2ahUKEwis7NaBuqnmAhVL7J4KHRN6BJwQ_AUoAXoECBMQAw&biw=666&bih=792#imgrc=V8KzvYV6KU5JSM', target="_blank")
}
document.body.appendChild(addAnotherButton)

addAnotherButton.classList.add('anotherColor')

let funButton = document.createElement('button')
funButton.textContent = "Beastars!"
funButton.onclick = function beastarsFunc () {
    window.open('https://www.reddit.com/r/Beastars/', target="_blank")
}
document.body.appendChild(funButton)
funButton.classList.add('picture', 'anotherColor')


let anotherOne = document.querySelector('#addAnother1')
let anotherTwo = document.querySelector('#addAnother2')
let sum2 = document.querySelector('#sumAnother')

anotherOne.addEventListener('input', sumFunc)
anotherTwo.addEventListener('input', sumFunc)

function sumFunc() {
    let boxAdd = parseFloat(anotherOne.value) || 0;
    let boxAdd2 = parseFloat(anotherTwo.value) || 0;
    console.log(sum2)
    sum2.textContent = boxAdd + boxAdd2;

}

let date = document.querySelector('#date')
date.textContent = new Date()

let testh2 = document.createElement('h2')
let appendSpan = document.createElement('span')
testh2.textContent = "Keep up the grind!"
testh2.appendChild(appendSpan)
testh2.classList.add('anotherColor')
document.body.appendChild(testh2)

let dwarfImage = document.createElement('img')
let dwarfButton = document.createElement('button')
let dwarfText = document.createElement('p')
dwarfText.textContent = "Interest ya on a pint?"
dwarfButton.textContent = "Want a Dwarf?"
dwarfImage.src = "Dwarfguard.jpg"
document.body.appendChild(dwarfButton)

dwarfButton.addEventListener('click', dwarfAdd)
function dwarfAdd () {
    document.body.appendChild(dwarfImage)
    document.body.appendChild(dwarfText)
}

let dragonImage = document.createElement('img')
dragonImage.src = "dragonGif.gif"
let dragonButt = document.createElement('button')
dragonButt.textContent = "How about some Flying Dragons?"
document.body.appendChild(dragonButt)
dragonButt.addEventListener('click', dragonFunc)
function dragonFunc () {
    document.body.appendChild(dragonImage)
}