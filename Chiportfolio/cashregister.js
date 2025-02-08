const fruitPrices = [
    {name: "Apple", price: 10 },
    {name: "Black Pineapple", price: 37 },
    {name: "Mango", price: 8 },
    {name: "Watermelon", price: 25},
    {name: "Banana", price: 7 },
    {name: "Pear", price: 12 },
    {name: "Orange", price: 3}
    // This is an array of fruits and their prices. An array is a list of items.
];

let basket = [];

function calculateTotalCost() {
   let totalCost = 0;
    for (const item of basket) {
        totalCost = totalCost + item.price;
    }
    return totalCost;

    // This array and function adds the price of current items in the basket to total cost.
    // The "for" loop states that for every constant item added to the basket add to total cost.
};

function addToBasket(fruit) {
    let item = fruitPrices.find(function(f) {
    return f.name.toLowerCase() === fruit.toLowerCase();
    //Traditional function syntax 
});
    if (!item) {
        console.log("Invalid fruit. Try again.");
        return;
    }
    basket.push({ name: item.name, price: item.price });
    console.log(`${item.name} added to basket.`);
}

function generateInvoice() {
    console.log("---invoice---");
    if (basket.length === 0) {
        console.log("Basket is empty.");
        return;
    }

    for (const item of basket) {
        console.log(`${item.name} - $${item.price}`);
    }

    const totalCost = calculateTotalCost();
    console.log(`------------------`);
    console.log('Total items: ${basket.length}');
    console.log(`Total cost: $${totalCost.toFixed(2)}`); //toFixed for 2 decimal places 
    console.log("------------------");
    
    // The generate invoice function first checks if the basket is empty, 
    // Then prints a mesage if it is empty then exits
    // Otherwise it loops through the basket and prints the name and price of each fruit.
    // Then it calculates the total cost and prints the total number  of items and total cost.
}