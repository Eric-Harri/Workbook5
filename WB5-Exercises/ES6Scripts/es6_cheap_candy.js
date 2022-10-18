let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Snickers", price: 2.79 },
  { product: "Kit Kat", price: 1.79 },
  { product: "Skittles", price: 3.79 },
  { product: "Cow tails", price: 1.69 },
];

let oneCheapCandy =
    products.filter((product) => product.price < 4)

console.log(oneCheapCandy);

let findMMs =
    products.filter((product) => product.product.indexOf("M&Ms") >= 0)

console.log(findMMs);
