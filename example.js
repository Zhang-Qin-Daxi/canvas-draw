let painting = false;
let startPoint = { x: undefined, y: undefined };

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.onmousedown = (e) => {
    let x = e.offsetX
    let y = e.offsetY
    startPoint = { x: x, y: y}
    painting = true;
}

canvas.onmousemove = (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let newPoint = { x: x, y: y}
    if (painting) {
        drawLine(startPoint.x, startPoint.y, newPoint.x, newPoint.y)
        startPoint = newPoint
    }
}

canvas.onmouseup = () => {
    painting = false
}

function drawLine(xStart, yStart, xEnd, yEnd) {
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.moveTo(xStart, yStart)
    ctx.lineTo(xEnd, yEnd)
    ctx.stroke()
    ctx.closePath()
}

clear.onclick = () => {
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

save.onclick = () => {
    const url = canvas.toDataURL('image/jpg')
    const a = document.createElement("a")
    a.href = url
    a.download = "画板"
    a.target = "_blank"
    a.click()
}