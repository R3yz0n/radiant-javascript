// const products = [
//   { title: "Tshirt", price: 10, qty: 10 },
//   { title: "Cargo Jeans", price: 10, qty: 0 }, // out of stock
//   { title: "Hoodie", price: 10, qty: 5 },
// ];
// // an array that has products in stock

// let filteredArray = products.filter((prod) => {
//   //   console.log(prod);
//   console.log(prod.qty);
//   return prod.qty > 0;
// });

// console.log(filteredArray);

const products = [
  { title: "Tshirt", price: 10, qty: 10 },
  { title: "Cargo Jeans", price: 10, qty: 0 },
  { title: "Hoodie", price: 10, qty: 5 },
];

const subTotal = products.reduce((acc, prod) => {
  return prod.qty * prod.price + acc;
}, 0);
console.log(subTotal);
