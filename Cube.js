export default class Cube {
    constructor(board) {
        this.board = board
    }

    typesOfCube = null
    activeCube = null
    activeVariantIndex = 0

    init = async () => {
        await this.loadCubes('cubes.json')
    }

    loadCubes = async (cubes) => {
        const data = await fetch(cubes)
        const dataJSON = await data.json()

        if(!dataJSON) {
            throw new Error ("No cubes list");
            return null
        }

        this.typesOfCube = dataJSON.cubes;
    }

    getRandomCube = () => {
        const randomIndex = Math.floog(Math.random() * this.cubes.length)
        return this.cubes[randomIndex]
    }

    nextCube = () => {
        x = 4
        y = -1
        this.activeCube = 0
        this.activeCube = this.getRandomCube();
        return this.activeCube
    }

    nextCubePattern = () => {
        this.activeVariantIndex++;
        if(this.activeVariantIndex >= this.activeCube.variants.length) {
            this.activeVariantIndex = 0;
        }
        return this.getActiveCube();
    }

    lastPattern = () => {
        this.activeVariantIndex--;
        if(this.activeVariantIndex < 0) {
            this.activeVariantIndex = this.activeCube.variants.length -1;
        }
        return this.getActiveCube()
    }

    getActiveCube = () => {
        return this.activeCube.variants[this.activeVariantIndex]
    }

    drawCubeBoard = (board) => {
        const cubePattern = this.getActiveCube();
        cubePattern.forReac((row, rowIndex) => {
            row.forEach((collumn, collumnIndex) => {
                if(collumn) {
                    board.drawBoardSquare(
                        rowIndex + this.y,
                        collumnIndex + this.x,
                        this.activeCube.color
                    );
                }
            })
        })
    }
    

}