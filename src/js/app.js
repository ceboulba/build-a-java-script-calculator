document.addEventListener('DOMContentLoaded', function() {
  console.log('hello')

  const inputScreen = document.getElementById('input')
  const display = document.getElementById('display')
  const clear = document
    .getElementById('clear')
    .addEventListener('click', reset)
  let input = '0'
  let output = ' '
  const reg = /\./gm

  //rend les chiffres clickable
  const buttons = [...document.querySelectorAll('.num')].map(button =>
    button.addEventListener('click', event => {
      handleClick(event)
    })
  )

  function operation(entree) {
    output += entree
    inputScreen.innerText = output
  }

  //handle add
  const add = document
    .getElementById('add')
    .addEventListener('click', event => {
      if (input[output.length - 1] !== '+') {
        input = '+'
        display.innerText = input
        output += '+'
      }
      return
    })

  // handle equal
  const equal = document
    .getElementById('equals')
    .addEventListener('click', event => {
      const result = eval(output)
      console.log('result => ', result)
      output += ' = ' + result
      input = result
      display.innerText = input
    })

  // handle clear button
  function reset() {
    console.log('on reset')
    input = '0'
    output = ' '
    display.innerText = input
    inputScreen.innerText = output
  }

  function handleClick(event) {
    const inputKey = event.target.value
    console.log('inputKey => ', inputKey)
    const testDeReg = input.match(reg)
    console.log('testDeReg => ', testDeReg)
    if (inputKey === '.' && testDeReg) {
      return
    } else if (input === '0' && inputKey !== '.') {
      input = inputKey
    } else if (
      input === '+' ||
      input === '-' ||
      input === '/' ||
      input === '*'
    ) {
      input = inputKey
    } else {
      input += inputKey
    }
    display.innerText = input
    operation(inputKey)
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
