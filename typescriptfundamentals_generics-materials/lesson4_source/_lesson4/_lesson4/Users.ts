namespace MyNamespace {

    import alias1 = Interfaces

    export namespace Interfaces {
        export interface IUser {
            name;
            id;
            getInfo();
        }
    }

    export class User implements alias1.IUser {

        constructor(public id: number,
            public name: string,
            public phone: string) {
        }

        getInfo() {
            return 'id=' + this.id
                + ' name' + this.name
                + ' phone=' + this.phone;
        }
    }
}



