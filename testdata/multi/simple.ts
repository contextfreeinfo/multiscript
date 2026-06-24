export class Rectangle {
  size: Vec2;

  constructor(size: Vec2) {
    this.size = { ...size };
  }

  area(): number {
    return this.size.x * this.size.y;
  }
}

export type Vec2 = {
  x: number;
  y: number;
};
