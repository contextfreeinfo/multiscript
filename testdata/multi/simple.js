export class Rectangle {
    size;
    constructor(size) {
        this.size = { ...size };
    }
    area() {
        return this.size.x * this.size.y;
    }
}
