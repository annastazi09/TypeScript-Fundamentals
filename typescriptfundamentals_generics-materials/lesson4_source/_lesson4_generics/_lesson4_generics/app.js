"use strict";
var Main;
(function (Main) {
    function getData(data) {
        return data;
    }
    var output = getData("str");
    var List = (function () {
        function List() {
        }
        List.prototype.add = function (item) {
            this._items.push(item);
        };
        List.prototype.getAll = function () {
            return this._items;
        };
        return List;
    }());
    var list = new List();
    var values = list.getAll();
})(Main || (Main = {}));
//# sourceMappingURL=app.js.map