﻿class Point {
    public x: number;
    public y: number;


    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public getDistanseToStart(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    static origin = new Point(0, 0);
}

let originValue = Point.origin;
console.log(originValue);

let point = new Point(5, 5);
let result = point.getDistanseToStart();
console.log(result);

class Point2 {
    public static x: number;
    public static y: number;

    public static getDistanseToStart(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    static origin = new Point(0, 0);
}

Point2.x = 7;
Point2.y = 10;
let result2 = Point2.getDistanseToStart();
console.log(result2);