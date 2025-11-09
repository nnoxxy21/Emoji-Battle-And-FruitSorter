let fighters = ['🐉', '🐊', '🦁', '🦍', '🐘', '🐩', '🐆', '🦀', '🦭',
                        '🐥', '🐝', '🐢', '🐸', '🕷️', '🤖', '💩', '🦕']

let stageEl = document.getElementById('stage-el');

function startBattle() {
    let playerA = Math.floor(Math.random()*fighters.length);
    let playerB = Math.floor(Math.random()*fighters.length);
    stageEl.textContent = fighters[playerA] + '     V/S      ' + fighters[playerB];
}

let fruits = ['🍎', '🍊', '🍎', '🍎', '🍊']
let orangeEl = document.getElementById('orange-el')
let appleEl = document.getElementById('apple-el')
let appleShelf = []
let orangeShelf = []

function sortFruits() {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === '🍎' && appleShelf.length < 4 ) {
            appleShelf.push(fruits[i]);
        } else if (orangeShelf.length < 3 ) {
            orangeShelf.push(fruits[i]);
        } else {
            return ''
        }
    }
    appleEl.textContent = appleShelf.join(' ');
    orangeEl.textContent = orangeShelf.join(' ');
}

function resetFruits() {
    appleEl.textContent = '🍎 🍊 🍎'
    orangeEl.textContent = '🍊 🍎'
    appleShelf = []
    orangeShelf = []
}