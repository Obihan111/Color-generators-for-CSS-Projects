let colorPallete = document.querySelector('button');
let firstContainer = document.querySelector('.color-container-1');
let secondContainer = document.querySelector('.color-container-2');
let firstH = document.querySelector('.first-h');
let secondH = document.querySelector('.second-h');
let thirdContainer = document.querySelector('.color-container-3')
let thirdH = document.querySelector('.third-h')
let fourthContainer = document.querySelector('.color-container-4')
let fourthH = document.querySelector('.fourth-h')
let fifthContainer = document.querySelector('.color-container-5')
let fifthH = document.querySelector('.fifth-h')

function first() {
    let r = (Math.floor(Math.random() * 255) + 1)
    let g = (Math.floor(Math.random() * 255) + 1)
    let b = (Math.floor(Math.random() * 255) + 1)
    let firstbg = `rgb(${r}, ${g}, ${b})`  
    firstContainer.style.backgroundColor = firstbg
    firstH.innerText = firstbg
    firstH.style.fontSize = '2rem'
}
function second() {
    let r = (Math.floor(Math.random() * 255) + 1)
    let g = (Math.floor(Math.random() * 255) + 1)
    let b = (Math.floor(Math.random() * 255) + 1)
    let secondbg = `rgb(${r}, ${g}, ${b})`
    secondContainer.style.backgroundColor =  secondbg
    secondH.innerText = secondbg
    secondH.style.fontSize = '2rem'
}

function third() {
    let r = (Math.floor(Math.random() * 255) + 1)
    let g = (Math.floor(Math.random() * 255) + 1)
    let b = (Math.floor(Math.random() * 255) + 1)
    let thirdbg = `rgb(${r}, ${g}, ${b})`
    thirdContainer.style.backgroundColor = thirdbg
    thirdH.innerText = thirdbg
    thirdH.style.fontSize = '2rem'
}

function fourth() {
    let r = (Math.floor(Math.random() * 255) + 1)
    let g = (Math.floor(Math.random() * 255) + 1)
    let b = (Math.floor(Math.random() * 255) + 1)
    let fourthbg = `rgb(${r}, ${g}, ${b})`
    fourthContainer.style.backgroundColor = fourthbg
    fourthH.innerText = fourthbg
    fourthH.style.fontSize = '2rem'
}

function fifth() {
    let r = (Math.floor(Math.random() * 255) + 1)
    let g = (Math.floor(Math.random() * 255) + 1)
    let b = (Math.floor(Math.random() * 255) + 1)
    let fifthbg = `rgb(${r}, ${g}, ${b})`
    fifthContainer.style.backgroundColor = fifthbg
    fifthH.innerText = fifthbg
    fifthH.style.fontSize = '2rem'
}
colorPallete.addEventListener('click', first)
colorPallete.addEventListener('click', second)
colorPallete.addEventListener('click', third)
colorPallete.addEventListener('click', fourth)
colorPallete.addEventListener('click', fifth)

