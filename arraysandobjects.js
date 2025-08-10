const colors = ["Red", "Green", "Blue", "Yellow"];
const [primary, secondary, , extra] = colors;
console.log(primary);
console.log(secondary);
console.log(extra);

const employee = {
  id: 101,
  fullName: "Emma Watson",
  job: "Designer",
  contact: {
    email: "emma@example.com",
    phone: "123-456-7890"
  }
};

const { fullName, job } = employee;
console.log(fullName, job);

const { contact: { email, phone } } = employee;
console.log(email, phone);

console.log(employee.job);
console.log(employee["id"]);

const infoKey = "email";
console.log(employee.contact[infoKey]);

const laptop = { brand: "Dell", model: "XPS 15", price: 1500 };

for (let key in laptop) {
  console.log(key, ":", laptop[key]);
}

Object.keys(laptop).forEach(key => {
  console.log(key, ":", laptop[key]);
});

Object.entries(laptop).forEach(([key, value]) => {
  console.log(key, ":", value);
});