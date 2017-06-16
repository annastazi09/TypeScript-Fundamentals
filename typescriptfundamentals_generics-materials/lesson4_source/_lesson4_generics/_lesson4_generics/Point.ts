export namespace Points {
    export class Point implements IPoint {
        public x: number;
        public y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
        public getDistanseToStart(): number {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
        toString() {
            return 'x=' + this.x + ' y=' + this.y;
        }
    }

    export interface IPoint {
        x: number;
        y: number;
    }
}

