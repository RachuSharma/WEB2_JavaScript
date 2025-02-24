class Point {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    getX() {
        return this.#x;
    }
    getY() {
        return this.#y;
    }

    moveTo(x, y) {
        this.#x = x;
        this.#y = y;
    }

    toString() {
        return `Center:  [${this.#x}, ${this.#y}]`;
    }
}

class Circle extends Point {
    #radius;
    #center;

    constructor(center, radius) {
        super(center);
        this.#center = center;
        this.#radius = radius;
    }

    getCenterX() {
        return this.#center.getX();
    }

    getCenterY() {
        return this.#center.getY();
    }

    getRadius() {
        return this.#radius;
    }

    moveCenterTo(x, y) {
        this.#center.moveTo(x, y);
    }

    toString() {
        return `Circle(${this.#center.toString()} , radius : ${this.#radius})`;
    }

}

console.log( new Circle( new Point(1, 2), 4).toString())
// → Circle(Center: [1,2], Radius: 4)