function createCircle(center, radius) {
    return {
        getCenterX: () => center.getX(),
        getCenterY: () => center.getY(),
        getRadius: () => radius,
        moveCenterTo: (x, y) => center.moveTo(x, y),
        toString: () => `Circle(Center: ${center.toString()}, Radius: ${radius})`,
    }
}

function createPoint(x, y) {
    return {
        getX: () => x,
        getY: () => y,
        moveTo(newX, newY) {
            x = newX
            y = newY
        },
        toString: () => `[${x},${y}]`,
    }
}

console.log(createCircle(createPoint(1, 2), 4).toString())

const circles = [createCircle(createPoint(1, 2), 7), createCircle(createPoint(2, 4), 5), createCircle(createPoint(2, 4), 3)]
const radii = circles.map(circle => circle.getRadius())
console.log(radii)
// → [7, 5  3]


