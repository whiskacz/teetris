export default class Render {
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext("2d")
    }

    getCanvas = () => {
        return this.canvas;
    }

    getHeight = () => {
        return this.canvas.height;
    }

    getWidth = () => {
        return this.canvas.width
    }

    drawSquare  = (x, y, width, height, color) => {
        this.drawCube(x, y, width, height, color)
    }
    
    drawCube = (x, y, width, height, color) => {
        this.context.fillStyle = color;
        this.context.fillRect(x,y,width, height)
    }

    static getInstance () {
        if(!this.instance) {
            this.instance = new Render();
        }

        return this.instance
    }
}