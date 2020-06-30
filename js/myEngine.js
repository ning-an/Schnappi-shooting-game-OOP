class Engine {
    constructor(root) {
        //create game background
        this.imgBackground = document.createElement('img');
        this.imgBackground.src = './images/river.jpg';
        this.imgBackground.style.height = `${GAME_HEIGHT}px`;
        this.imgBackground.style.width = `${GAME_WIDTH}px`;
        root.appendChild(this.imgBackground);
        this.root = root;
        //initiate player
        this.player = new Player(root);
        //initiate enemies
        this.enemies = [];
        //create lives
        this.lives = document.createElement('div');
        this.lives.innerText = '💗💗💗💗💗';
        this.lives.style.position = 'absolute';
        this.lives.style.top = '10px';
        this.lives.style.right = 0;
        this.lives.style.zIndex = 2;
        this.lives.style.fontSize = '25px'
        root.appendChild(this.lives);
        //create start button
        this.startBtn = addBtn(root);
        //create score board
        this.scoreBoard = addScoreBoard(root);
        this.bgm = addSound(root, "./images/Schnappi.flac");
        this.bgm.loop = 'loop';
        this.collideSoundEffect = addSound(root, "./images/crack2.mp3")
        //create timer
        this.timer = addTimer(root);
        //create score
        this.score = document.createElement('div');
        this.score.innerText = '0';
        this.score.style.position = 'absolute';
        this.score.style.top = '15px';
        this.score.style.left = `20px`;
        this.score.style.color = '#E14802';
        this.score.style.zIndex = 2;
        this.score.style.fontSize = '25px'
        root.appendChild(this.score);
        //initiate boss
        this.boss;
    }

    gameLoop = () => {
        //update enemies and bullets
        while (this.enemies.length < MAX_ENEMIES) {
            this.enemies.push(new Enemy(this.root))
        }
        this.enemies.forEach( enemy => {
            this.player.bulletsUp.forEach( bullet => {
                if (isCollide(bullet, enemy)) {
                    enemy.destroyed = true;
                    bullet.destroyed = true;
                    this.score.innerText = `${parseInt(this.score.innerText) + 10}`;
                }
                bullet.updatePos();
            })
            enemy.updatePos(time);
        })
        this.enemies = this.enemies.filter( enemy => !enemy.destroyed );
        this.player.bulletsUp = this.player.bulletsUp.filter( bullet => !bullet.destroyed);

    };

    isPlayerDead = () => {
        return this.enemies.some( (enemy) => isCollide(this.player, enemy))
    }
}