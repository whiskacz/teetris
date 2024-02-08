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

    loadCuber = async (cubes) => {
        const data = await fetch(cubes)
        const dataJSON = await data.json()

        if(!dataJSON) {
            throw new Error ("No cubes list");
            return null
        }

        this.typesOfCube = dataJSON.cubes;
    }

    

}