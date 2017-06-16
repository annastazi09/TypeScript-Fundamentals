interface IPoint {
    x: number;
    y: number;
     length(): number;
}
var point: IPoint = {
    x: 5,
    y: 5,
    length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
class Point implements IPoint {
    constructor(public x: number, public y: number) { }
    public length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
