class Grocery {
    name: string;
    quantity: number;
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

let groceryArray: Array<any> = [["milk", 25], ["bread", 37], ["eggs", 56]];
let groceryObjects: Array<object> = [];

for (const entry of groceryArray) {
    const newObj: Grocery = new Grocery(entry[0], entry[1]);
    groceryObjects.push(newObj);
}

for (const obj of groceryObjects){
    let name: string = obj["name"];
    let quantity: number = obj["quantity"];
    let htmlString: string = `<li><h3>${name}</h3><p>Quantity: ${quantity}</p></li>`;
    document.getElementById("root").innerHTML += htmlString;
}
