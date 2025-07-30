while (true) {
  let choice = prompt("Choose: 1-Add, 2-Subtract, 3-Multiply, 4-Divide, 5-Exit");
  if (choice === "5") break;

  let a = parseFloat(prompt("Enter first number:"));
  let b = parseFloat(prompt("Enter second number:"));

  if (isNaN(a) || isNaN(b)) continue;

  let result;
  switch (choice) {
    case "1": result = a + b; break;
    case "2": result = a - b; break;
    case "3": result = a * b; break;
    case "4":
      if (b === 0) result = "Cannot divide by zero";
      else result = a / b;
      break;
    default: continue;
  }

  console.log("Result:", result);
}