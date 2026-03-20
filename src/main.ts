import { CANVAS_HEIGHT, CANVAS_WIDTH, DOLY_POLY_MAX_RADIUS } from "./const"

const canvas = document.getElementById('canvas') as HTMLCanvasElement
const context = canvas.getContext('2d')

const drawCircle = () => {
    if (!context) return;
    const circleCenterX = CANVAS_WIDTH/2
    const circleCenterY = CANVAS_HEIGHT - DOLY_POLY_MAX_RADIUS
    const circleRadius = DOLY_POLY_MAX_RADIUS
    context.arc(circleCenterX, circleCenterY, circleRadius, 0, Math.PI * 2)
    context.lineWidth = 2;
    context.stroke();
}

const init = () => {
    canvas.width = CANVAS_WIDTH
    canvas.height = CANVAS_HEIGHT
    drawCircle()
}

init()