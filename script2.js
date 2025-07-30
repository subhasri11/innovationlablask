let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let n = 5;
let sum = 0;
for (let j = 1; j <= n; j++) {
  sum += j;
}
console.log(sum);

for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= 10; b++) {
    console.log(a + " x " + b + " = " + (a * b));
  }
}