import { PointProgram as Colors, SomeEnum as s } from "./Color"

export namespace Points {
    export class Point {
        protected x: number;
        y: number;


        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        public getDistanseToStart(): number {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }

        static origin = new Point(0, 0);

        toString() {
            return 'x=' + this.x + ' y=' + this.y;
        }

    }


    export class ColoredPoint extends Point {

        constructor(x: number, y: number, private readonly color: Colors.Enums.Color) {
            super(x, y);
        }

        getColor() {
            return this.color;
        }

        public toString() {
            return super.toString() + " color=" + Colors.Enums.Color[this.color];
        }

        someMethod() {
            let x = this.x;
        }

    }
}