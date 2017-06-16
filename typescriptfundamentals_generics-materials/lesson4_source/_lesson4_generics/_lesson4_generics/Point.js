"use strict";
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
        return Point;
    }());
    Points.Point = Point;
})(Points = exports.Points || (exports.Points = {}));
//# sourceMappingURL=Point.js.map