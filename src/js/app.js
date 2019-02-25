import Calc from "./calc"

console.log("HelloWorld !")
const App = (document.getElementById("root").innerHTML = Calc())

let operation = []
let result = document.querySelector(".display")
let resultat = ["0"]

const display = document.querySelector(".display")

const nums = [...document.querySelectorAll(".num")].map(num =>
  num.addEventListener("click", e => {
    action(e)
  })
)

const operators = [...document.querySelectorAll(".op")].map(op =>
  op.addEventListener("click", e => {
    operate(e)
  })
)
console.log(operators)

const clear = document.querySelector(".clear").addEventListener("click", () => {
  console.log("clearClicked")
  operation = ["0"]
  display.innerText = operation.join("")
})

const equal = document.querySelector(".equ").addEventListener("click", () => {
  if (operation.length >= 1) {
    const temp = eval(operation.join(""))
    console.log(temp)
    display.innerHTML = temp
    operation = [temp]
  }
  return
})

const operate = operator => {
  if (operator.target.innerText === "x") {
    operation.push("*")
  } else {
    operation.push(operator.target.innerText)
  }
  display.innerText = operation.join("")
}

function action(e) {
  if (operation[0] === "0") {
    operation.shift()
  }
  operation.push(e.target.innerText)
  display.innerText = operation.join("")
  console.log("operation => ", operation)
}
