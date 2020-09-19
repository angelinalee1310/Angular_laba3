var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Laptop = /** @class */ (function () {
    function Laptop(Id, Name) {
        this.id = Id;
        this.name = Name;
        Laptop.counterLaptop++;
    }
    Laptop.prototype.getInfo = function () {
        return 'id: ' + this.id + '\nname: ' + this.name;
    };
    Laptop.counterLaptop = 0;
    return Laptop;
}());
var UltraBook = /** @class */ (function (_super) {
    __extends(UltraBook, _super);
    function UltraBook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = 'Ultra Book';
        return _this;
    }
    UltraBook.prototype.getModel = function () {
        return 'Laptop model: ' + this.model;
    };
    UltraBook.prototype.getYear = function () {
        return 'Year: ' + this.year;
    };
    return UltraBook;
}(Laptop));
var asus = new UltraBook(1, 'asus');
console.log(asus.getInfo());
var lenovo = new UltraBook(2, 'lenovo');
console.log(lenovo.getInfo());
console.log(lenovo.getModel());
console.log('counter: ' + Laptop.counterLaptop);
asus.year = 2020;
console.log(asus.getYear());
var MacBook = /** @class */ (function (_super) {
    __extends(MacBook, _super);
    function MacBook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.company = 'Apple';
        return _this;
    }
    MacBook.prototype.getCompany = function () {
        return 'Laptop company: ' + this.company;
    };
    return MacBook;
}(UltraBook));
var macBook = new MacBook(3, 'MacBook Pro');
console.log(macBook.getCompany());
