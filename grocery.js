var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
var groceryArray = [["milk", 25], ["bread", 37], ["eggs", 56]];
var groceryObjects = [];
for (var _i = 0, groceryArray_1 = groceryArray; _i < groceryArray_1.length; _i++) {
    var entry = groceryArray_1[_i];
    var newObj = new Grocery(entry[0], entry[1]);
    groceryObjects.push(newObj);
}
for (var _a = 0, groceryObjects_1 = groceryObjects; _a < groceryObjects_1.length; _a++) {
    var obj = groceryObjects_1[_a];
    var name_1 = obj["name"];
    var quantity = obj["quantity"];
    var htmlString = "<li><h3>".concat(name_1, "</h3><p>Quantity: ").concat(quantity, "</p></li>");
    document.getElementById("root").innerHTML += htmlString;
}
