var Programmer = /** @class */ (function () {
    function Programmer(name, position, age, favLang) {
        this.name = name;
        this.position = position;
        this.age = age;
        this.favLang = favLang;
    }
    Programmer.prototype.programmer = function () {
        console.log(this);
    };
    return Programmer;
}());
var Nick = new Programmer("Nick", "web dev", 30, "typescript");
Nick.programmer();
