class Bullet {
    constructor(root) {
        this.root = root;
        //create bullet
        this.domElement = document.createElement('img');
        this.domElement.src = './images/bubble.png';
        this.width = 20;
        this.height = 20;
        this.domElement.style.width = `${this.width}px`;
        this.domElement.style.height = `${this.height}px`;
        this.domElement.style.position = 'absolute';
        root.appendChild(this.domElement);
        this.x;
        this.y;
        //status
        this.destroyed = false;
        this.isDestroyed = false;
    }
    updatePos = () => {
        this.y -= 2;
        this.domElement.style.top = `${this.y}px`;
        if (this.x <=0 || this.x >= GAME_WIDTH || this.y <= 0) {
            this.destroyed = true;
        }
        if (this.destroyed && !this.isDestroyed) {
            this.root.removeChild(this.domElement);
            this.isDestroyed = true;
        }
    }
}