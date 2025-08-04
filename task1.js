const numbers = [1, 5, 12];
const greaterThan5 = numbers.filter(n => n > 5);

const sum = numbers.reduce((acc, n) => acc + n, 0);

const fruits = ['apple', 'banana', 'orange'];
const citrus = fruits.slice(2);

fruits.splice(1, 1, 'grape');

const arr1 = [1, 2];
const arr2 = [...arr1, 3];