class Player {
    constructor(root) {
        this.root = root;
        //player hight and width
        this.width = PLAYER_WIDTH;
        this.height = PLAYER_HEIGHT;
        //create the player element
        this.domElement = document.createElement('img');
        this.domElement.src = 'images/schnappi.png';
        //locate it
        this.x = GAME_WIDTH / 2 - PLAYER_WIDTH / 2;
        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
        this.domElement.style.position = 'absolute';
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top = `${this.y}px`;
        //Challenge: increasing player width
        this.domElement.style.width = `${PLAYER_WIDTH}px`;
        this.domElement.style.zIndex = '2';
        root.appendChild(this.domElement);
        //create bullets
        this.bulletsUp = [];
        this.bulletsLeft = [];
        this.bulletsRight = [];
    }
    
    moveLeft = () => {
        if (this.x > 0) this.x -= 25;
        this.domElement.style.left = `${this.x}px`;
    }
    moveRight = () => {
        if (this.x + PLAYER_WIDTH < GAME_WIDTH) this.x += 25;
        this.domElement.style.left = `${this.x}px`;
    }
    moveUp = () => {
        if (this.y > 0) this.y -= 25;
        this.domElement.style.top = `${this.y}px`;
    }
    moveDown = () => {
        if (this.y + PLAYER_HEIGHT + 10 < GAME_HEIGHT) this.y += 25;
        this.domElement.style.top = `${this.y}px`;
    }

    shootUp = () => {
        const bullet = shoot(this.root, this.x, this.y);
        bullet.x = this.x;
        bullet.y = this.y;
        this.bulletsUp.push(bullet);
    }
}