function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function sumAll(...nums) {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}

console.log(add(5, 3));
console.log(multiply(4, 6));
console.log(sumAll(1, 2, 3, 4, 5));