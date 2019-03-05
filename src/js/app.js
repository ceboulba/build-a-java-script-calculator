document.addEventListener('DOMContentLoaded', function() {
  //gere les zone d'affichage
  const inputScreen = document.getElementById('input')
  const display = document.getElementById('display')

  //init les valeurs des variables utiles
  let input = '0'
  let output = ''
  let current = ''

  //quellques regEx necessaires
  const reg = /\./gm
  const regOp = /[*\-+\/]/gi

  //valide la possibilitée de calculer
  let doingCalc = true

  //rend les chiffres clickable
  const buttons = [...document.querySelectorAll('.num')].map(button =>
    button.addEventListener('click', event => {
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
    const n = output.length - 1
    if (
      output[n] === '/' ||
      output[n] === '*' ||
      output[n] === '-' ||
      output[n] === '+'
    ) {
      output = output.slice(0, n)
      console.log('output apres modif => ', output)
    }
    return
  }

  //handle add
  const add = document
    .getElementById("add")
    .addEventListener("click", event => {
      if (output[output.length - 1] === "+") {
        return
      }
      output += input
      onlyOneOperator("+")
      output += "+"
      input = ""
      display.innerText = "+"
      updateScreen(" + ")
      doingCalc = true
      console.log("output => ", output)
    })

  //handle substract
  const substract = document
    .getElementById("subtract")
    .addEventListener("click", () => {
      if (output[output.length - 1] === "-") {
        return
      }
      output += input
      onlyOneOperator('-')
      output += '-'
      input = ''
      display.innerText = '-'
      updateScreen(' - ')
      doingCalc = true
      console.log('output => ', output)
    })

  //handle multiply
  const multiply = document
    .getElementById("multiply")
    .addEventListener("click", () => {
      if (output[output.length - 1] === "*") {
        return
      }
      output += input
      onlyOneOperator('*')
      output += '*'
      input = ''
      display.innerText = 'x'
      updateScreen(' x ')
      doingCalc = true
      console.log('output => ', output)
    })

  //handle divide
  const divide = document
    .getElementById("divide")
    .addEventListener("click", () => {
      if (output[output.length - 1] === "/") {
        return
      }
      output += input
      onlyOneOperator('/')
      output += '/'
      input = ''
      display.innerText = '/'
      updateScreen(' / ')
      doingCalc = true
      console.log('output => ', output)
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
        input = Math.floor(eval(output) * 10000) / 10000
        display.innerText = input
        updateScreen(' = ' + input)
        output = input
        input = ''
        doingCalc = false
      }
      return
    })

  // handle clear button
  const clear = document
    .getElementById('clear')
    .addEventListener('click', () => {
      console.log('on reset')
      input = '0'
      output = ''
      current = ''
      display.innerText = input
      inputScreen.innerText = current
      doingCalc = true
    })

  //handle click number
  function handleClick(event) {
    if (doingCalc) {
      const inputKey = event.target.value
      const testDeReg = input.match(reg)
      if (inputKey === '.' && testDeReg) {
        return
      } else if (input === '0' && inputKey !== '.') {
        input = inputKey
        display.innerText = input
        updateScreen(inputKey)
        return
      }
      input += inputKey
      display.innerText = input
      updateScreen(inputKey)
      console.log("input => ", input)
    }
    return
  }
})
