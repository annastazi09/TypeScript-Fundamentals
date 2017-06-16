"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Color_1 = require("./Color");
var Points;
(function (Points) {
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
    }());
    Points.Point = Point;
    var ColoredPoint = (function (_super) {
        __extends(ColoredPoint, _super);
        function ColoredPoint(x, y, color) {
            _super.call(this, x, y);
            this.color = color;
        }
        ColoredPoint.prototype.getColor = function () {
            return this.color;
        };
        ColoredPoint.prototype.toString = function () {
            return _super.prototype.toString.call(this) + " color=" + Color_1.PointProgram.Enums.Color[this.color];
        };
        ColoredPoint.prototype.someMethod = function () {
            var x = this.x;
        };
        return ColoredPoint;
    }(Point));
    Points.ColoredPoint = ColoredPoint;
})(Points = exports.Points || (exports.Points = {}));
//# sourceMappingURL=Points.js.map