const products = [
  { id: 1, name: "Phone", details: { brand: "Samsung", price: 20000 } },
  { id: 2, name: "Tablet", details: { brand: "Apple", price: 45000 } },
  { id: 3, name: "Headphones", details: { brand: "Sony", price: 5000 } }
];

console.log(products[0].name);
console.log(products[1].details.brand);

function multiplyAll(...nums) {
  return nums.reduce((result, n) => result * n, 1);
}
console.log(multiplyAll(2, 3, 4));

const numbers1 = [10, 20, 30];
const numbers2 = [40, 50, 60];
const mergedNumbers = [...numbers1, ...numbers2];
console.log(mergedNumbers);

const customer = { id: 201, name: "David", membership: "Gold" };
const newCustomer = { ...customer };
console.log(newCustomer);

function showProduct({ name, details: { brand, price } }) {
  console.log(`Product: ${name}, Brand: ${brand}, Price: ₹${price}`);
}
showProduct(products[0]);
showProduct(products[2]);