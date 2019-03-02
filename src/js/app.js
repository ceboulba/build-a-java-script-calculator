document.addEventListener("DOMContentLoaded", function() {
  console.log("hello")

  const inputScreen = document.getElementById("input")
  const display = document.getElementById("display")
  let input = "0"
  let output = ""
  const reg = /\./gm
  const regOperator = /\+|-|\*|\//gm

  //rend les chiffres clickable
  const buttons = [...document.querySelectorAll(".num")].map(button =>
    button.addEventListener("click", event => {
      handleClick(event)
    })
  )

  function operation(entree) {
    output += entree
    inputScreen.innerText = output
  }

  //handle add
  const add = document
    .getElementById("add")
    .addEventListener("click", event => {
      if (input[input.length - 1] === "+") {
        return
      }
      output += input
      output += "+"
      input = "0"
      display.innerText = "+"
      console.log("output => ", output)
    })

  //handle substract
  const substract = document
    .getElementById("subtract")
    .addEventListener("click", () => {
      if (input[input.length - 1] === "-") {
        return
      }
      output += input
      output += "-"
      input = "0"
      display.innerText = "-"
      console.log("output => ", output)
    })

  //handle multiply
  const multiply = document
    .getElementById("multiply")
    .addEventListener("click", () => {
      if (input[input.length - 1] === "x") {
        return
      }
      output += input
      output += "*"
      input = "0"
      display.innerText = "x"
      console.log("output => ", output)
    })

  //handle divide
  const divide = document
    .getElementById("divide")
    .addEventListener("click", () => {
      if (input[input.length - 1] === "/") {
        return
      }
      output += input
      output += "/"
      input = "0"
      display.innerText = "/"
      console.log("output => ", output)
    })

  // handle equal
  const equal = document
    .getElementById("equals")
    .addEventListener("click", event => {
      output += input
      console.log(output)
      const reg = /\+|-|\*|\//gm
      const verif = output.match(reg)
      if (output.length > 1 && verif) {
        console.log(eval(output))
        input = eval(output)
        display.innerText = input
        output = ""
        input = "0"
      }
      return
    })

  // handle clear button
  const clear = document
    .getElementById("clear")
    .addEventListener("click", () => {
      console.log("on reset")
      input = "0"
      output = " "
      display.innerText = input
      inputScreen.innerText = output
    })

  //handle click number
  function handleClick(event) {
    const inputKey = event.target.value
    console.log("inputKey => ", inputKey)
    const testDeReg = input.match(reg)
    console.log("testDeReg => ", testDeReg)
    if (inputKey === "." && testDeReg) {
      return
    } else if (input === "0" && inputKey !== ".") {
      input = inputKey
      display.innerText = input
      return
    }
    input += inputKey
    display.innerText = input
    console.log("input => ", input)
  }
})
