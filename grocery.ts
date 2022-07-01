class Grocery {
    name: string;
    quantity: number;
    price: number;
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

let groceryArray: Array<any> = [["milk", 25, 3.99], ["bread", 37, 2.99], ["eggs", 56, 5.99]];
let groceryObjects: Array<object> = [];

for (const entry of groceryArray) {
    const newObj: Grocery = new Grocery(entry[0], entry[1], entry[2]);
    groceryObjects.push(newObj);
}

for (const obj of groceryObjects){
    let name: string = obj["name"];
    let quantity: number = obj["quantity"];
    let price: number = obj["price"]
    let htmlString: string = `<li><h3>${name}</h3><p>Quantity: ${quantity} Price: $${price}</p></li>`;
    document.getElementById("root").innerHTML += htmlString;
}
