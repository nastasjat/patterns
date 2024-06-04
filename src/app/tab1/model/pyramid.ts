export class Pyramid {
    public l!: number;
    public w!: number;
    public h!: number;

    constructor(l: number, w: number, h: number) {
        this.l = l;
        this.w = w;
        this.h = h;
    }

  getVolume() {
    return (1 / 3) * this.l * this.w * this.h;
  }

  getSurfaceArea() {
    let baseArea = this.l * this.w;
    let apothem1 = Math.sqrt(
        Math.pow(this.h, 2) + Math.pow(this.l / 2, 2) //hypotenuse
    );

    let apothem2 = Math.sqrt(
        Math.pow(this.h, 2) + Math.pow(this.w / 2, 2)
    );

    let surfaceArea1 = 0.5 * this.l * apothem2;
    let surfaceArea2 = 0.5 * this.w * apothem1;

    return baseArea + 2 * (surfaceArea1 + surfaceArea2);
  }
}
