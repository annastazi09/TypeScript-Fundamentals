import {Points} from "./Point"
namespace Main {
    function getData<T>(data: T) {
        return data;
    }

    var output = getData("str");

    class List<T extends Points.IPoint> {
        private _items: T[];

        add(item: T) {
            this._items.push(item);
        }

        getAll():T[] {
            return this._items;
        }
    }

    var list = new List<Points.Point>();
   
    var values = list.getAll();
}
