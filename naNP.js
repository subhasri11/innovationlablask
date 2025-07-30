let tasks = []

const printTasks = () => {
  console.log("Current Tasks:")
  tasks.forEach((task, index) => {
    console.log((index + 1) + ". " + task)
  })
}

function addTask(task, callback) {
  tasks.push(task)
  callback()
}

function addMultipleTasks(...taskList) {
  taskList.forEach(t => addTask(t, () => {}))
}

let globalVar = "outside"

function scopeTest() {
  var localVar = "inside var"
  let blockLet = "inside let"
  const blockConst = "inside const"
  console.log(globalVar)
  console.log(localVar)
  console.log(blockLet)
  console.log(blockConst)
}

addTask("Buy groceries", printTasks)
addTask("Pay bills", printTasks)

addMultipleTasks("Walk dog", "Clean room", "Read book")

printTasks()
scopeTest()