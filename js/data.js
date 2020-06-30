// In this file we have some data that the other source files will use.
// Most of this data is stored in constants.
// Constants are just variables that never change. By convention,
// We write constants with upper case letters.

// The GAME_WIDTH and GAME_HEIGHT constants denote the size
// of the game area in pixels and is used in engine-utilities.js.
const GAME_WIDTH = window.innerWidth;
const GAME_HEIGHT = window.innerHeight;

// These constants represent the width and height of an enemy in pixels
// as well as the maximum number of enemies on screen at any given time.
const INI_ENEMY_WIDTH = 75;
const INI_ENEMY_HEIGHT = 60
let ENEMY_WIDTH = INI_ENEMY_WIDTH;
let ENEMY_HEIGHT = INI_ENEMY_HEIGHT;
const MAX_ENEMIES = 3;

// These constants represent the player width and height.
const PLAYER_WIDTH = 75;
const PLAYER_HEIGHT = 54;

const time = 20;

//insert sound track
const addSound = (root, src) => {
    const bgm = document.createElement('audio');
    bgm.src = src;
    bgm.preload = 'auto';
    bgm.controls = 'none';
    bgm.style.display = 'none';
    root.appendChild(bgm);
    return bgm
}

//create start button
const addBtn = (root) => {
    const Btn = document.createElement('button');
    Btn.innerText = 'START';
    Btn.style.position = 'absolute';
    Btn.style.top = '30%';
    Btn.style.left = `${GAME_WIDTH / 2}`;
    Btn.style.transform = 'translate(-50%)';
    Btn.style.fontSize = '30px';
    Btn.style.height = '2.5em';
    Btn.style.borderRadius = '2em';
    Btn.style.padding = '.6em 1.5em';
    Btn.style.background = 'linear-gradient(to bottom, #F46001, #E14802)';
    Btn.style.color = '#fff';
    Btn.style.zIndex = 10;
    root.appendChild(Btn);
    return Btn;
}


//create score board
const addScoreBoard = (root) => {
    const scoreDiv = document.createElement('div');
    scoreDiv.innerText = 'TRY AGAIN\n\n';
    scoreDiv.style.position = 'absolute';
    scoreDiv.style.top = '30%';
    scoreDiv.style.left = `${GAME_WIDTH / 2}px`;
    scoreDiv.style.transform = 'translate(-50%)';
    scoreDiv.style.zIndex = 99;
    scoreDiv.style.fontSize = '30px';
    scoreDiv.style.fontWeight = 'bold';
    scoreDiv.style.color = 'red';
    scoreDiv.style.textAlign = 'center';
    scoreDiv.style.background = '#14192C';
    scoreDiv.style.padding = '20px';
    scoreDiv.style.borderRadius = '5px';
    scoreDiv.style.boxShadow = '0 0 2px 2px palegoldenrod';
    scoreDiv.style.display = 'none';
    root.appendChild(scoreDiv);
    const Btn = document.createElement('button');
    Btn.innerText = 'CONTINUE';
    Btn.style.height = '2.5em';
    Btn.style.borderRadius = '2em';
    Btn.style.padding = '.6em 1.5em';
    Btn.style.background = 'linear-gradient(to bottom, #F46001, #E14802)';
    Btn.style.color = '#fff';
    scoreDiv.appendChild(Btn);
    return scoreDiv;
}

let seconds = 0, minutes = 0;
const timeIncrement = (node) => {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
   }
    node.textContent = (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + ':' + (seconds > 9 ? seconds : '0' + seconds);
}

const addTimer = (root) => {
    const timer = document.createElement('div');
    timer.textContent = '00:00';
    timer.style.position = 'absolute';
    timer.style.top = '15px';
    timer.style.left = '50%';
    timer.style.transform = 'translate(-50%)';
    timer.style.fontSize = '25px';
    timer.style.color = '#E14802';
    timer.style.fontWeight = 'bold';
    root.appendChild(timer);
    return timer;
}

//initiate bullet
const shoot = (root, x, y) => {
    const bullet = new Bullet(root);
    bullet.domElement.style.top = `${y - 1}px`;
    bullet.domElement.style.left = `${x - 15}px`;
    return bullet;
}

//collision detection
const isCollide = (a, b) => {
    return !(
        ((a.y + a.height - 15) < b.y) ||
        ((a.y + 15) > (b.y + b.height)) ||
        ((a.x + 15) > (b.x + b.width)) ||
        ((a.x + a.width - 15) < (b.x))
    );
}