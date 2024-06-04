export class Pyramid {
    private l: number = 5;
    private w: number = 5;
    private h: number = 5;

    private validateDimension(value: number, dimensionName: string): void {
        if (value <= 0) {
            throw new Error(`${dimensionName} must be greater than 0`);
        }
    }

    get L(): number {
        return this.l;
    }

    set L(value: number) {
        this.validateDimension(value, 'Length');
        this.l = value;
    }

    get W(): number {
        return this.w;
    }

    set W(value: number) {
        this.validateDimension(value, 'Width');
        this.w = value;
    }

    get H(): number {
        return this.h;
    }

    set H(value: number) {
        this.validateDimension(value, 'Height');
        this.h = value;
    }

    getVolume(): number {
        return (1 / 3) * this.l * this.w * this.h;
    }

    getSurfaceArea(): number {
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
