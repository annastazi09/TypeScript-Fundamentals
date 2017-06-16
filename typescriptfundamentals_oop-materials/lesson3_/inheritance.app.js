var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getDistanseToStart = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Point.prototype.toString = function () {
        return 'x=' + this.x + ' y=' + this.y;
    };
    Point.origin = new Point(0, 0);
    return Point;
})();
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
var ColoredPoint = (function (_super) {
    __extends(ColoredPoint, _super);
    function ColoredPoint(x, y, readonly, Color) {
        if (readonly === void 0) { readonly = color; }
        _super.call(this, x, y);
        this.readonly = readonly;
    }
    ColoredPoint.prototype.getColor = function () {
        return this.color;
    };
    ColoredPoint.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " color=" + Color[this.color];
    };
    ColoredPoint.prototype.someMethod = function () {
        var x = this.x;
    };
    return ColoredPoint;
})(Point);
var point = new Point(5, 5);
var coloredPoint = new ColoredPoint(5, 7, Color.Black);
console.log(coloredPoint.toString());
