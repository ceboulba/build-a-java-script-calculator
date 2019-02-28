document.addEventListener("DOMContentLoaded", function() {
  console.log("hello")

  const inputScreen = document.getElementById("input")
  const display = document.getElementById("display")
  let input = "0"
  const reg = /\./gm

  const buttons = [...document.querySelectorAll("button")].map(button =>
    button.addEventListener("click", event => {
      handleClick(event)
    })
  )

  function handleClick(event) {
    const inputKey = event.target.value
    console.log("inputKey => ", inputKey)
    const test = input.match(reg)
    console.log("test => ", test)
    if (inputKey === "=" && input.length > 1) {
      input = eval(input)
      display.innerText = input
    } else if (input[0] === "0") {
      input = inputKey
      display.innerText = input
    } else if (inputKey === "reset") {
      input = "0"
      display.innerText = input
    } else {
      input += inputKey
      display.innerText = input
    }
    display.innerText = input
  }
})

// let operation = []
// let output = []
// let result = document.querySelector('#display')
// let resultat = ['0']

// const display = document.querySelector('#display')

// const nums = [...document.querySelectorAll('.num')].map(num =>
//   num.addEventListener('click', e => {
//     action(e)
//   })
// )

// function daboum() {
//   console.log('BOUM')
// }
// daboum()

// const operators = [...document.querySelectorAll('.op')].map(op =>
//   op.addEventListener('click', e => {
//     operate(e)
//   })
// )

// const clear = document
//   .querySelector('#clear')
//   .addEventListener('click', () => {
//     operation = ['0']
//     display.innerText = operation.join('')
//   })

// const equal = document.querySelector('.equ').addEventListener('click', () => {
//   if (operation.length >= 1) {
//     const temp = eval(operation.join(''))
//     console.log(temp)
//     display.innerHTML = temp
//     operation = [temp]
//   }
//   return
// })

// const operate = operator => {
//   if (operator.target.innerText === 'x') {
//     operation.push('*')
//   } else {
//     operation.push(operator.target.innerText)
//   }
//   display.innerText = operation.join('')
// }

// function action(e) {
//   if (operation[0] === '0') {
//     operation.shift()
//   }
//   operation.push(e.target.innerText)
//   display.innerText = operation.join('')
//   console.log('operation => ', operation)
// }
