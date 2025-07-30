for (let i = 2; i <= 20; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("First prime:", i);
    break;
  }
}

for (let k = 1; k <= 20; k++) {
  if (k % 2 === 0) continue;
  console.log(k);
}