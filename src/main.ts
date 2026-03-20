import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./const"

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const context = canvas.getContext('2d')

const init = () => {
    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT
    
}

init()