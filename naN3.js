function processData(data, callback) {
  let result = data * 2
  callback(result)
}

function display(value) {
  console.log("Processed:", value)
}

processData(10, display)

var globalVar = "I am global"

function checkScope() {
  var localVar = "I am local"
  if (true) {
    let blockLet = "I am block scoped"
    const blockConst = "I am const block scoped"
    console.log(blockLet)
    console.log(blockConst)
  }
  console.log(localVar)
}

checkScope()
console.log(globalVar)