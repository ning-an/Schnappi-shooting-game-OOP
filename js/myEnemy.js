class Enemy {
    constructor(root) {
        this.root = root;
        this.domElement = document.createElement('img');
        this.domElement.src = './images/rock.png';
        //locate the enemy
        this.x = Math.random() * (GAME_WIDTH - ENEMY_WIDTH);
        this.y = -ENEMY_HEIGHT;
        this.domElement.style.position = 'absolute';
        this.domElement.style.top = `${this.y}`;
        this.domElement.style.left = `${this.x}`;
        this.domElement.style.zIndex = '2';
        this.domElement.style.height = `${ENEMY_HEIGHT}px`;
        this.domElement.style.width = `${ENEMY_WIDTH}px`;
        root.appendChild(this.domElement);

        //game status
        this.destroyed = false;
        this.speed = Math.random() / 5 + 0.1;
        this.expandRate = Math.random() * 3;
        this.isExpanding = true;
    }

    updatePos = (time) => {
        this.y += this.speed * time;
        this.domElement.style.top = `${this.y}px`;
        if (this.y >= GAME_HEIGHT) {
            this.destroyed = true;
        }
        if (this.destroyed) {
            this.root.removeChild(this.domElement);
        }

        if (ENEMY_WIDTH >= INI_ENEMY_WIDTH * 2) {
            this.isExpanding = false;
        } else if (ENEMY_WIDTH <= INI_ENEMY_WIDTH) {
            this.isExpanding = true;
        }
        if (this.isExpanding) {
            ENEMY_WIDTH += this.expandRate;
            ENEMY_HEIGHT += this.expandRate;
        } else {
            ENEMY_WIDTH -= this.expandRate;
            ENEMY_HEIGHT -= this.expandRate;
        }
        this.domElement.style.width = `${ENEMY_WIDTH}px`;
        this.domElement.style.height = `${ENEMY_HEIGHT}px`;
        
    }
}