"use strict";
var PointProgram;
(function (PointProgram) {
    var Enums;
    (function (Enums) {
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Black"] = 2] = "Black";
        })(Enums.Color || (Enums.Color = {}));
        var Color = Enums.Color;
    })(Enums = PointProgram.Enums || (PointProgram.Enums = {}));
})(PointProgram = exports.PointProgram || (exports.PointProgram = {}));
(function (SomeEnum) {
    SomeEnum[SomeEnum["First"] = 0] = "First";
    SomeEnum[SomeEnum["Last"] = 1] = "Last";
})(exports.SomeEnum || (exports.SomeEnum = {}));
var SomeEnum = exports.SomeEnum;
//# sourceMappingURL=Color.js.map