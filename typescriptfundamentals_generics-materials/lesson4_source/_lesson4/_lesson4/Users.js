var MyNamespace;
(function (MyNamespace) {
    var User = (function () {
        function User(id, name, phone) {
            this.id = id;
            this.name = name;
            this.phone = phone;
        }
        User.prototype.getInfo = function () {
            return 'id=' + this.id
                + ' name' + this.name
                + ' phone=' + this.phone;
        };
        return User;
    }());
    MyNamespace.User = User;
})(MyNamespace || (MyNamespace = {}));
//# sourceMappingURL=Users.js.map