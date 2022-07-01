var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
var groceryArray = [["milk", 25, 3.99], ["bread", 37, 2.99], ["eggs", 56, 5.99]];
var groceryObjects = [];
for (var _i = 0, groceryArray_1 = groceryArray; _i < groceryArray_1.length; _i++) {
    var entry = groceryArray_1[_i];
    var newObj = new Grocery(entry[0], entry[1], entry[2]);
    groceryObjects.push(newObj);
}
for (var _a = 0, groceryObjects_1 = groceryObjects; _a < groceryObjects_1.length; _a++) {
    var obj = groceryObjects_1[_a];
    var name_1 = obj["name"];
    var quantity = obj["quantity"];
    var price = obj["price"];
    var htmlString = "<li><h3>".concat(name_1, "</h3><p>Quantity: ").concat(quantity, " Price: $").concat(price, "</p></li>");
    document.getElementById("root").innerHTML += htmlString;
}
