const products = [
  { id: 1, name: 'Laptop', price: 1200, quantity: 2 },
  { id: 2, name: 'Mouse', price: 25, quantity: 5 },
  { id: 3, name: 'Keyboard', price: 75, quantity: 0 },
  { id: 4, name: 'Monitor', price: 300, quantity: 3 }
];

const availableProducts = products.filter(product => product.quantity > 0);
console.log('Available Products:', availableProducts);

const totalCartValue = availableProducts.reduce((total, product) => {
  return total + (product.price * product.quantity);
}, 0);
console.log('Total Cart Value:', totalCartValue);

const firstTwoProducts = availableProducts.slice(0, 2);
console.log('First two available products (using slice):', firstTwoProducts);

const mutableProductList = [...availableProducts];
const removedProduct = mutableProductList.splice(2, 1);
console.log('Removed product (using splice):', removedProduct);
console.log('Product list after removal:', mutableProductList);

const updatedProductList = availableProducts.map(product => {
  if (product.name === 'Mouse') {
    return { ...product, quantity: 10 };
  }
  return product;
});
console.log('Updated product list (using spread operator):', updatedProductList);

function createProduct(id, name, price, quantity) {
  return {
    id,
    name,
    price,
    quantity,
    printDetails: function() {
      console.log('--- Product Details ---');
      console.log(`ID: ${this.id}`);
      console.log(`Name: ${this.name}`);
      console.log(`Price: $${this.price}`);
      console.log(`Quantity: ${this.quantity}`);
    }
  };
}

const newProduct = createProduct(5, 'Headphones', 50, 4);
newProduct.printDetails();

const { name, price } = newProduct;
console.log('Displaying with destructuring:');
console.log(`Product Name: ${name}`);
console.log(`Product Price: $${price}`);