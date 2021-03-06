document.addEventListener("DOMContentLoaded", function() {
  console.log("hello")

  const inputScreen = document.getElementById("input")
  const display = document.getElementById("display")
  let input = "0"
  let output = ""
  const reg = /\./gm
  let current = ""
  let doingCalc = true

  //rend les chiffres clickable
  const buttons = [...document.querySelectorAll(".num")].map(button =>
    button.addEventListener("click", event => {
      handleClick(event)
    })
  )

  //update inputScreen
  function updateScreen(input) {
    current += input
    inputScreen.innerText = current
    doingCalc = true
  }

  //handle repeat operator
  function onlyOneOperator(op) {
    console.log("output dans repeat op => ", output)
    const n = output.length - 1
    console.log("output dans onlyOneOperator => ", output[n])
    if (
      output[n] === "/" ||
      output[n] === "*" ||
      output[n] === "-" ||
      output[n] === "+"
    ) {
      output = output.slice(0, n)
      console.log("output apres modif => ", output)
    }
    console.log("IMPOSSIBLE")
    return
  }

  //handle add
  const add = document
    .getElementById("add")
    .addEventListener("click", event => {
      console.log("you want add")
      if (current[current.length - 2] === "+") {
        return
      }
      output += input
      onlyOneOperator("+")
      output += "+"
      input = ""
      display.innerText = "+"
      updateScreen(" + ")
      //doingCalc = true
      console.log("output => ", output)
    })

  //handle substract
  const substract = document
    .getElementById("subtract")
    .addEventListener("click", () => {
      if (current[current.length - 2] === "-") {
        alert("Impossible")
        return
      }
      output += input
      onlyOneOperator("-")
      output += "-"
      input = ""
      display.innerText = "-"
      updateScreen(" - ")
      doingCalc = true
      console.log("output => ", output)
    })

  //handle multiply
  const multiply = document
    .getElementById("multiply")
    .addEventListener("click", () => {
      if (current[current.length - 2] === "*") {
        alert("Impossible")
        return
      }
      output += input
      onlyOneOperator("*")
      output += "*"
      input = ""
      display.innerText = "x"
      updateScreen(" x ")
      doingCalc = true
      console.log("output => ", output)
    })

  //handle divide
  const divide = document
    .getElementById("divide")
    .addEventListener("click", () => {
      if (current[current.length - 2] === "/") {
        alert("Impossible")
        return
      }
      output += input
      onlyOneOperator("/")
      output += "/"
      input = ""
      display.innerText = "/"
      updateScreen(" / ")
      doingCalc = true
      console.log("output => ", output)
    })

  // handle equal
  const equal = document
    .getElementById("equals")
    .addEventListener("click", event => {
      if (
        current[current.length - 2] === "+" ||
        current[current.length - 2] === "-" ||
        current[current.length - 2] === "/" ||
        current[current.length - 2] === "*"
      ) {
        alert("Impossible")
        return
      }

      output += input
      console.log(output)
      const reg = /\+|-|\*|\//gm
      const verif = output.match(reg)
      if (output.length > 1 && verif) {
        console.log(eval(output))
        input = eval(output)
        display.innerText = input
        updateScreen(" = " + input)
        output = input
        input = ""
        doingCalc = false
      }
      return
    })

  // handle clear button
  const clear = document
    .getElementById("clear")
    .addEventListener("click", () => {
      console.log("on reset")
      input = "0"
      output = ""
      current = ""
      display.innerText = input
      inputScreen.innerText = current
      doingCalc = true
    })

  //handle click number
  function handleClick(event) {
    if (doingCalc) {
      const inputKey = event.target.value
      console.log("inputKey => ", inputKey)
      const testDeReg = input.match(reg)
      console.log("testDeReg => ", testDeReg)
      if (inputKey === "." && testDeReg) {
        return
      } else if (input === "0" && inputKey !== ".") {
        input = inputKey
        display.innerText = input
        updateScreen(inputKey)
        return
      }
      input += inputKey
      display.innerText = input
      updateScreen(inputKey)
      doingCalc = true
      console.log("input => ", input)
    }
    return
  }
})
